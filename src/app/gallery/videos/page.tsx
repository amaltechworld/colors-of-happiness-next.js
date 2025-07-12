import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Footer from "../../Components/Footer/Footer";

export const metadata: Metadata = {
    title: "Video Gallery | Colors Of Happiness",
    description:
        "Explore our beautiful wedding video collections captured by Colors Of Happiness professional videographers.",
    keywords: [
        "wedding videos",
        "video gallery",
        "Colors Of Happiness",
        "wedding videography",
        "Indian wedding videos",
        "professional videographer",
    ],
};

const VideoGallery = () => {
    const clients = [
        {
            id: "client1",
            names: "Arjun & Priya",
        },
        {
            id: "client2",
            names: "Vikram & Anjali",
        },
        {
            id: "client3",
            names: "Amal & Meera",
        },
        {
            id: "client4",
            names: "Rohan & Kavya",
        },
    ];

    return (
        <div>
            {/* Logo at Top Left */}
            <div className="absolute top-4 left-4 z-30">
                <Link href="/" aria-label="Go to Colors Of Happiness homepage">
                    <Image
                        src="/hero/COH-logo.png"
                        alt="Colors Of Happiness Wedding Photography Logo"
                        width={80}
                        height={40}
                        className="object-contain w-16 h-8 sm:w-20 sm:h-10 md:w-20 md:h-10"
                        priority
                    />
                </Link>
            </div>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Wedding Video Gallery
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our beautiful wedding video collections,
                            each telling a unique love story
                        </p>
                    </div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {clients.map((client) => (
                            <Link
                                key={client.id}
                                href={`/gallery/videos/${client.id}`}
                                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                            {client.names}
                                        </h3>
                                        <p className="text-gray-600">
                                            Wedding Video Collection
                                        </p>
                                    </div>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                                    <p className="text-white text-lg font-medium">
                                        View {client.names} Videos
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VideoGallery;
