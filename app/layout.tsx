import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";
import AddPropertyModal from "@/components/modals/AddPropertyModal";

const poppins = localFont({
    src: [
        { path: "/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
        { path: "/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
        { path: "/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
        { path: "/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    ],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Airbnb | Vacation rentals, cabins, beach houses, & more",
    description: "Airbnb clone created with Next.js and Django REST Framework",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                <Navbar />
                <div className="pt-24 ">{children}</div>

                <LoginModal />
                <SignUpModal />
                <AddPropertyModal />
            </body>
        </html>
    );
}
