import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";
import AddPropertyModal from "@/components/modals/AddPropertyModal";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                <div className="pt-32 ">{children}</div>

                <LoginModal />
                <SignUpModal />
                <AddPropertyModal />

                {/* <Modal label="Title" content={content} isOpen={true}  /> */}
            </body>
        </html>
    );
}
