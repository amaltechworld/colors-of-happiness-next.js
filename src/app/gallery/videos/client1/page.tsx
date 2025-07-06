import React from "react";
import Link from "next/link";
import Image from "next/image";
import YouTubeVideo from "../../../Components/YouTubeVideo/YouTubeVideo";
import Footer from "../../../Components/Footer/Footer";

const Client1Videos = () => {
    // Replace these with actual YouTube video IDs
    const videos = [
        {
            id: "dQw4w9WgXcQ", // Replace with actual video ID
            title: "Arjun & Priya - Wedding Ceremony",
        },
        {
            id: "dQw4w9WgXcQ", // Replace with actual video ID
            title: "Arjun & Priya - Reception Highlights",
        },
        {
            id: "dQw4w9WgXcQ", // Replace with actual video ID
            title: "Arjun & Priya - Pre-Wedding Shoot",
        },
        {
            id: "dQw4w9WgXcQ", // Replace with actual video ID
            title: "Arjun & Priya - Couple Portrait",
        },
    ];

    // Structured Data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "VideoGallery",
        name: "Arjun & Priya Wedding Videos",
        description:
            "Beautiful wedding video collection of Arjun & Priya captured by Colors Of Happiness",
        url: "https://colorsofhappiness.com/gallery/videos/client1",
        creator: {
            "@type": "Organization",
            name: "Colors Of Happiness",
            url: "https://colorsofhappiness.com",
        },
        video: videos.map((video) => ({
            "@type": "VideoObject",
            name: video.title,
            thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
            embedUrl: `https://www.youtube.com/embed/${video.id}`,
        })),
    };

    return (
        <>
            {/* Logo at Top Left */}
            <div className="absolute top-4 left-4 z-30">
                <Link href="/" aria-label="Go to Colors Of Happiness homepage">
                    <Image
                        src="/hero/COH-logo.png"
                        alt="Colors Of Happiness Wedding Photography Logo"
                        width={80}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Arjun & Priya
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Wedding Video Collection
                            </p>
                            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
                        </div>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {videos.map((video, index) => (
                            <YouTubeVideo
                                key={index}
                                videoId={video.id}
                                title={video.title}
                                className="border-4 border-red-500"
                            />
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <a
                            href="/gallery/videos"
                            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            ← Back to Video Gallery
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Client1Videos;
