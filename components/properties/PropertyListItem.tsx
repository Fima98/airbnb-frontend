import React from "react";
import Image from "next/image";
import { PropertyType } from "./PropertyList";
import { useRouter } from "next/navigation";
import FavoriteButton from "../forms/FavoriteButton";

interface PropertyListItemProps {
    property: PropertyType;
    markFavorite?: (isFavorite: boolean) => void;
}

const PropertyListItem: React.FC<PropertyListItemProps> = ({
    property,
    markFavorite,
}) => {
    const router = useRouter();
    return (
        <div
            className="cursor-pointer"
            onClick={() => router.push(`/rooms/${property.id}`)}
        >
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    priority
                    src={property.image_url}
                    alt={property.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="hover:scale-110 object-cover transition h-full w-full"
                />

                {markFavorite && (
                    <FavoriteButton
                        id={property.id}
                        isFavorite={property.is_favorite}
                        markFavorite={(isFavorite: boolean) =>
                            markFavorite(isFavorite)
                        }
                    />
                )}
            </div>
            <div className="mt-2">
                <p className="text-sm font-semibold">{property.title}</p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>${property.price_per_night}</strong> night
                </p>
            </div>
        </div>
    );
};

export default PropertyListItem;
