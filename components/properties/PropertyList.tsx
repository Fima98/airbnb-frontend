"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/services/apiService";
import { is } from "date-fns/locale";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
    is_favorite: boolean;
};

interface PropertyListProps {
    hostId?: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({ hostId }) => {
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
        if (hostId) {
            url += `?host=${hostId}`;
        }
        const response = await apiService.get(url);
        console.log(response);
        setProperties(
            response.data.map((property: PropertyType) => {
                if (response.favorites.includes(property.id)) {
                    property.is_favorite = true;
                } else {
                    property.is_favorite = false;
                }
                return property;
            })
        );
    };

    useEffect(() => {
        getProperties();
    }, []);
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
