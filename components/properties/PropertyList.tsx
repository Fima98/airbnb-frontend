"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/services/apiService";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
};

interface PropertyListProps {
    hostId?: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({ hostId }) => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        let url = "/api/properties/";
        if (hostId) {
            url += `?host=${hostId}`;
        }
        const response = await apiService.get(url);
        console.log(response);
        setProperties(response);
    };

    useEffect(() => {
        getProperties();
    }, []);

    return (
        <>
            {properties.map((property) => (
                <PropertyListItem key={property.id} property={property} />
            ))}
        </>
    );
};

export default PropertyList;
