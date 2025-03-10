"use client";

import React, { useState } from "react";
import Modal from "@/components/modals/Modal";
import useAddPropertyModal from "@/hooks/useAddPropertyModal";
import CustomButton from "@/components/forms/CustomButton";
import Categories from "@/components/addpropery/Categories";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import Image from "next/image";
import apiService from "@/services/apiService";
import { useRouter } from "next/navigation";

const AddPropertyModal = () => {
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState<string[]>([]);

    const [dataCategory, setDataCategory] = useState("");
    const [dataTitle, setDataTitle] = useState("");
    const [dataDescription, setDataDescription] = useState("");
    const [dataPrice, setDataPrice] = useState("");
    const [dataBedrooms, setDataBedrooms] = useState("");
    const [dataBathrooms, setDataBathrooms] = useState("");
    const [dataGuests, setDataGuests] = useState("");
    const [dataCountry, setdataCountry] = useState<SelectCountryValue>();
    const [dataImage, setDataImage] = useState<File | null>(null);

    const addPropertyModal = useAddPropertyModal();

    const handleCategorySelect = (category: string) => {
        setDataCategory(category);
        console.log("Category selected:", category);
    };

    const setImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const tmpImage = e.target.files[0];
            setDataImage(tmpImage);
        }
    };

    const submitForm = async () => {
        if (
            dataCategory &&
            dataTitle &&
            dataDescription &&
            dataPrice &&
            dataBedrooms &&
            dataBathrooms &&
            dataGuests &&
            dataCountry &&
            dataImage
        ) {
            const formData = new FormData();
            formData.append("category", dataCategory);
            formData.append("title", dataTitle);
            formData.append("description", dataDescription);
            formData.append("price_per_night", dataPrice);
            formData.append("bedrooms", dataBedrooms);
            formData.append("bathrooms", dataBathrooms);
            formData.append("guests", dataGuests);
            formData.append("country", dataCountry.label);
            formData.append("country_code", dataCountry.value);
            formData.append("image", dataImage);

            const response = await apiService.post(
                "/api/properties/create/",
                formData
            );
            if (response.status === "success") {
                console.log(response);
                addPropertyModal.close();
                router.push("/");
                router.refresh();
            } else {
                console.log("Error:", response.data);

                const tmpErrors: string[] = Object.values(response).map(
                    (error: any) => {
                        return error;
                    }
                );
                setErrors(tmpErrors);
            }
        }
    };

    const content = (
        <>
            {currentStep === 1 ? (
                <>
                    <h2 className="mb-6 text-2xl">Add property details</h2>
                    <Categories
                        dataCategory={dataCategory}
                        setCategory={handleCategorySelect}
                    />
                    <CustomButton
                        label="Next"
                        className="w-full"
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ) : currentStep === 2 ? (
                <>
                    <h2 className="mb-6 text-2xl">Describe your place</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataDescription}
                                onChange={(e) =>
                                    setDataDescription(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <CustomButton
                        label="Previous"
                        className="w-full mb-2 bg-gray-200 hover:bg-gray-300 !text-black"
                        onClick={() => setCurrentStep(1)}
                    />

                    <CustomButton
                        label="Next"
                        className="w-full"
                        onClick={() => setCurrentStep(3)}
                    />
                </>
            ) : currentStep === 3 ? (
                <>
                    <h2 className="mb-6 text-2xl">Details</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="price">Price per night</label>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="bedrooms">Bedrooms</label>
                            <input
                                id="bedrooms"
                                name="bedrooms"
                                type="number"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataBedrooms}
                                onChange={(e) =>
                                    setDataBedrooms(e.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="bathrooms">Bathrooms</label>
                            <input
                                id="bathrooms"
                                name="bathrooms"
                                type="number"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataBathrooms}
                                onChange={(e) =>
                                    setDataBathrooms(e.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="guests">
                                Maximum number pf guests
                            </label>
                            <input
                                id="guests"
                                name="guests"
                                type="number"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataGuests}
                                onChange={(e) => setDataGuests(e.target.value)}
                            />
                        </div>
                    </div>
                    <CustomButton
                        label="Previous"
                        className="w-full mb-2 bg-gray-200 hover:bg-gray-300 !text-black"
                        onClick={() => setCurrentStep(2)}
                    />

                    <CustomButton
                        label="Next"
                        className="w-full"
                        onClick={() => setCurrentStep(4)}
                    />
                </>
            ) : currentStep === 4 ? (
                <>
                    <h2 className="mb-6 text-2xl">Location</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            Select location
                            <SelectCountry
                                value={dataCountry}
                                onChange={(value) =>
                                    setdataCountry(value as SelectCountryValue)
                                }
                            />
                        </div>
                    </div>
                    <CustomButton
                        label="Previous"
                        className="w-full mb-2 bg-gray-200 hover:bg-gray-300 !text-black"
                        onClick={() => setCurrentStep(3)}
                    />

                    <CustomButton
                        label="Next"
                        className="w-full"
                        onClick={() => setCurrentStep(5)}
                    />
                </>
            ) : (
                <>
                    <h2 className="mb-6 text-2xl">Upload an image</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="py-4 px- bg-gray-200 text-black rounded-xl">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={setImage}
                            />
                        </div>

                        {dataImage && (
                            <div className="w-[200px] h-[150px] relative">
                                <Image
                                    src={URL.createObjectURL(dataImage)}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Property image"
                                    className="w-full h-full rounded-xl"
                                />
                            </div>
                        )}
                    </div>

                    {errors.map((error, index) => {
                        <div
                            key={index}
                            className="p-5 mb-4 bg-airbnb opacity-70 rounded-xl text-white"
                        >
                            {error}
                        </div>;
                    })}

                    <CustomButton
                        label="Previous"
                        className="w-full mb-2 bg-gray-200 hover:bg-gray-300 !text-black"
                        onClick={() => setCurrentStep(4)}
                    />

                    <CustomButton
                        label="Add property"
                        className="w-full"
                        onClick={submitForm}
                    />
                </>
            )}
        </>
    );

    return (
        <Modal
            label="Add property"
            close={addPropertyModal.close}
            content={content}
            isOpen={addPropertyModal.isOpen}
        />
    );
};

export default AddPropertyModal;
