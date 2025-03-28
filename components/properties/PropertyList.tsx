"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/services/apiService";
import useSearchModal from "@/hooks/useSearchModal";
import format from "date-fns/format";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
  is_favorite: boolean;
};

interface PropertyListProps {
  hostId?: string | null;
  favorites?: boolean | null;
}

const PropertyList: React.FC<PropertyListProps> = ({ hostId, favorites }) => {
  const searchModal = useSearchModal();
  const country = searchModal.query.country;
  const checkIn = searchModal.query.checkIn;
  const checkOut = searchModal.query.checkOut;
  const guests = searchModal.query.guests;
  const category = searchModal.query.category;

  const [properties, setProperties] = useState<PropertyType[]>([]);

  const markFavorite = (id: string, isFavorite: boolean) => {
    const Properties = properties.map((property: PropertyType) => {
      if (property.id === id) {
        property.is_favorite = isFavorite;

        if (isFavorite) {
          console.log("Favorite");
        } else {
          console.log("Unfavorite");
        }
      }
      return property;
    });

    setProperties(Properties);
  };

  const getProperties = async () => {
    let url = "/api/properties/";
    const params = new URLSearchParams();

    if (hostId) {
      params.append("host", hostId);
    } else if (favorites) {
      params.append("is_favorites", "true");
    } else {
      if (country) {
        params.append("country", country);
      }
      if (checkIn) {
        params.append("check_in", format(checkIn, "yyyy-MM-dd"));
      }
      if (checkOut) {
        params.append("check_out", format(checkOut, "yyyy-MM-dd"));
      }
      if (guests) {
        params.append("guests", guests.toString());
      }
      if (category) {
        params.append("category", category);
      }
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    const response = await apiService.get(url);
    console.log(url);
    console.log(response);
    setProperties(
      response.data.map((property: PropertyType) => {
        property.is_favorite = response.favorites.includes(property.id);
        return property;
      })
    );
  };

  useEffect(() => {
    getProperties();
  }, []);

  useEffect(() => {
    getProperties();
  }, [searchModal.query]);

  return (
    <>
      {properties.map((property) => (
        <PropertyListItem
          key={property.id}
          property={property}
          markFavorite={(isFavorite: boolean) =>
            markFavorite(property.id, isFavorite)
          }
        />
      ))}
    </>
  );
};

export default PropertyList;
