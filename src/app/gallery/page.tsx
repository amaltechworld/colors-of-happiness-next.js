"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../Components/Footer/Footer";

export default function GalleryPage() {
    const clients = [
        {
            id: "client1",
            name: "Sree & Prabhul",
            coverImage: "/gallery/clients/client1-cover.jpg",
            href: "/gallery/clients/client1",
        },
        {
            id: "client2",
            name: "Arjun & Meera",
            coverImage: "/gallery/clients/client2-cover.jpg",
            href: "/gallery/clients/client2",
        },
        {
            id: "client3",
            name: "Raj & Priya",
            coverImage: "/gallery/clients/client3-cover.jpg",
            href: "/gallery/clients/client3",
        },
        {
            id: "client4",
            name: "Kiran & Lakshmi",
            coverImage: "/gallery/clients/client4-cover.jpg",
            href: "/gallery/clients/client4",
        },
    ];

    return (
        <main className="bg-white min-h-screen !scroll-smooth scrollbar-thumb-gray-600 scrollbar-track-gray-300 pt-20">
            {/* Logo at Top Left */}
            <div className="absolute top-4 left-4 z-30">
                <Link href="/">
                    <Image
                        src="/hero/COH-logo.png"
                        alt="Logo"
                        width={80}
                        height={40}
                        className="object-contain"
                    />
                </Link>
            </div>
            {/* Hero Section */}
            <section className="h-48 lg:h-72 flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-xl md:text-3xl lg:text-4xl text-gray-700 font-light tracking-widest mb-4">
                        WEDDING PHOTOGRAPHY GALLERY
                    </h1>
                    <p className="md:text-xl text-gray-600 font-light mt-4">
                        Capturing the Moments of Joy and Love
                    </p>
                </div>
            </section>

            {/* Gallery Section - 4 Client Cards */}
            <section className="container mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clients.map((client) => (
                        <div key={client.id} className="relative group">
                            <Link href={client.href}>
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <Image
                                        src={client.coverImage}
                                        alt={`${client.name} Wedding Gallery`}
                                        width={800}
                                        height={600}
                                        className="w-full h-[400px] object-cover object-center cursor-pointer transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-60 transition-all duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                                        <div className="text-center">
                                            <h3 className="text-3xl md:text-5xl font-semibold mb-2">
                                                {client.name}
                                            </h3>
                                            <p className="text-lg font-light opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                                                View Gallery
                                            </p>
                                            <div className="h-[2px] bg-white mt-2 w-0 group-hover:w-full transition-all duration-500 mx-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
