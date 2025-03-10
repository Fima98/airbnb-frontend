"use client";
import useAddPropertyModal from "@/hooks/useAddPropertyModal";
import useLoginModal from "@/hooks/useLoginModal";
import React from "react";

interface AddProperyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddProperyButtonProps> = ({ userId }) => {
    const loginModal = useLoginModal();
    const addPropertyModal = useAddPropertyModal();
    const airbnbYourHome = () => {
        if (userId) {
            addPropertyModal.open();
        } else {
            loginModal.open();
        }
    };
    return (
        <div
            onClick={airbnbYourHome}
            className="cursor-pointer p-2 transition-all duration-200 text-sm font-semibold rounded-full hover:bg-gray-100"
        >
            Airbnb your home
        </div>
    );
};

export default AddPropertyButton;
