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

const PropertyList = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const url = "/api/properties";
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
