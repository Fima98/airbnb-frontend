"use client";
import React from "react";
import apiService from "@/services/apiService";

interface FavoriteButtonProps {
    id: string;
    isFavorite: boolean;
    markFavorite: (is_favorite: boolean) => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    id,
    isFavorite,
    markFavorite,
}) => {
    const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        try {
            const response = await apiService.post(
                `/api/properties/${id}/favorite/`,
                {
                    id,
                    is_favorite: !isFavorite,
                }
            );
            markFavorite(response.is_favorite);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={toggleFavorite}
        >
            {isFavorite ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgb(255, 56, 92)"
                    className="size-6"
                >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={1.5}
                    className="size-6 fill-transparent hover:fill-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                </svg>
            )}
        </div>
    );
};

export default FavoriteButton;
