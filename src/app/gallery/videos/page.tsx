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
            cover: "/gallery/client1-cover.jpg",
        },
        {
            id: "client2",
            names: "Vikram & Anjali",
            cover: "/gallery/client2-cover.jpg",
        },
        {
            id: "client3",
            names: "Amal & Meera",
            cover: "/gallery/client3-cover.jpg",
        },
        {
            id: "client4",
            names: "Rohan & Kavya",
            cover: "/gallery/client4-cover.jpg",
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
                        className="object-contain w-14 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10"
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
                                <div className="aspect-video relative">
                                    <Image
                                        src={client.cover}
                                        alt={`${client.names} Wedding Video Cover`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                    />

                                    {/* Video Play Icon Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-black/50 rounded-full p-4 group-hover:bg-black/70 transition-all duration-300">
                                            <svg
                                                className="w-8 h-8 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white text-xl font-semibold mb-1">
                                        {client.names}
                                    </h3>
                                    <p className="text-white/90 text-sm">
                                        Wedding Video Collection
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
