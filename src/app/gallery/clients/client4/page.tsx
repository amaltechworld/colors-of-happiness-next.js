"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../../../Components/Footer/Footer";
import { useState, useEffect } from "react";

export default function Client4Gallery() {
    const [screenSize, setScreenSize] = useState("desktop");

    // Update screen size dynamically
    useEffect(() => {
        const updateScreenSize = () => {
            if (window.innerWidth >= 1024) {
                setScreenSize("desktop");
            } else if (window.innerWidth >= 768) {
                setScreenSize("tablet");
            } else {
                setScreenSize("mobile");
            }
        };

        updateScreenSize(); // Set initial screen size
        window.addEventListener("resize", updateScreenSize);

        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    // Helper function to get responsive image path
    const getImagePath = (imageNumber: number) => {
        return `/gallery/clients/client4/${screenSize}/image${imageNumber}.jpg`;
    };

    return (
        <main className="bg-white min-h-screen !scroll-smooth scrollbar-thumb-gray-600 scrollbar-track-gray-300">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ImageGallery",
                        name: "Kiran & Lekshmi Wedding Gallery",
                        description:
                            "Beautiful wedding gallery of Kiran & Lekshmi captured by Colors Of Happiness professional photographers.",
                        creator: {
                            "@type": "Organization",
                            name: "Colors Of Happiness",
                            url: "https://colorsofhappiness.com",
                            telephone: "+919745713419",
                            email: "Hello@colorsofhappiness.com",
                        },
                        about: {
                            "@type": "Event",
                            name: "Kiran & Lekshmi Wedding",
                            eventStatus: "https://schema.org/EventScheduled",
                            eventAttendanceMode:
                                "https://schema.org/OfflineEventAttendanceMode",
                        },
                        image: [
                            "https://colorsofhappiness.com/gallery/clients/client4/image1.jpg",
                            "https://colorsofhappiness.com/gallery/clients/client4/image2.jpg",
                        ],
                    }),
                }}
            />

            {/* Logo at Top Left */}
            <div className="absolute top-4 left-4 z-30">
                <Link href="/" aria-label="Go to Colors Of Happiness homepage">
                    <Image
                        src="/hero/COH-logo.png"
                        alt="Colors Of Happiness Wedding Photography Logo"
                        width={80}
                        height={40}
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                        priority
                    />
                </Link>
            </div>

            <section className="w-full py-14 pt-20">
                <div className="container mx-auto max-w-[1200px] bg-white p-6 md:p-12 lg:p-16">
                    <h1 className="text-6xl text-gray-700 font-light text-center p-5">
                        Kiran <br /> & <br /> Lekshmi
                    </h1>

                    <p className="text-gray-600 text-center p-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam...
                    </p>

                    <p className="text-gray-500 text-center p-5">
                        Lorem ipsum dolor sit amet, <br /> consectetur
                        adipiscing elit, <br /> sed do eiusmod tempor incididunt
                        ut <br /> labore et dolore magna aliqua. <br /> Ut enim
                        ad minim veniam, <br /> quis nostrud exercitation
                        ullamco
                    </p>

                    {/* Image-1 [full size] */}
                    <div className="h-[75vh] md:h-[100vh] lg:h-[150vh] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full p-5 bg-gray-200 border-4 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(1)}
                                alt="Image 1"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                                priority
                            />
                        </div>
                    </div>
                    {/* Full size image-1 end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-2-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(2)}
                                    alt="Image 2"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-2-end */}

                        {/* Image-3-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(3)}
                                    alt="Image 3"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-3-end */}
                    </div>
                    {/* Side by side-image end */}

                    {/* Image-4-start [full size] */}
                    <div className="max-w-xs md:max-w-xl lg:max-w-3xl h-[400px] md:h-[500px] lg:h-[600px] mx-auto p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(4)}
                                alt="Image 4"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                            />
                        </div>
                    </div>
                    {/* Image-4-end */}

                    {/* Image-5-start [full size] */}
                    <div className="h-[400px] md:h-[500px] lg:h-[600px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(5)}
                                alt="Image 5"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-5-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-6-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(6)}
                                    alt="Image 6"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-6-end */}

                        {/* Image-7-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(7)}
                                    alt="Image 7"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-7-end */}
                    </div>
                    {/* Side by side-image end */}

                    {/* Image-8-start [full size] */}
                    <div className="h-[500px] md:h-[600px] lg:h-[700px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(8)}
                                alt="Image 8"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-8-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-9-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(9)}
                                    alt="Image 9"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-9-end */}

                        {/* Image-10-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden p-2 md:p-3 lg:p-5">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(10)}
                                    alt="Image 10"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-10-end */}
                    </div>
                    {/* Side by side-image end */}

                    {/* Image-11-start [full size] */}
                    <div className="h-[400px] md:h-[500px] lg:h-[600px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(11)}
                                alt="Image 11"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-11-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-12-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden p-2 md:p-3 lg:p-5">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(12)}
                                    alt="Image 12"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-12-end */}

                        {/* Image-13-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(13)}
                                    alt="Image 13"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Image-13-end */}
                    {/* Side by side-image end */}

                    {/* Image-14-start [full size] */}
                    <div className="h-[400px] md:h-[500px] lg:h-[600px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(14)}
                                alt="Image 14"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-14-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-15-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(15)}
                                    alt="Image 15"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-15-end */}

                        {/* Image-16-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(16)}
                                    alt="Image 16"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Image-16-end */}

                    {/* Image-17-start [full size] */}
                    <div className="h-[500px] md:h-[600px] lg:h-[700px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(17)}
                                alt="Image 17"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-17-end */}

                    {/* Image-18-start [full size] */}
                    <div className="max-w-xs md:max-w-xl lg:max-w-3xl h-[400px] md:h-[500px] lg:h-[600px] mx-auto p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(18)}
                                alt="Image 18"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                            />
                        </div>
                    </div>
                    {/* Image-18-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-19-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(19)}
                                    alt="Image 19"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-19-end */}

                        {/* Image-20-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(20)}
                                    alt="Image 20"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Image-20-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                        {/* Image-21-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(21)}
                                    alt="Image 21"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-21-end */}

                        {/* Image-22-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(22)}
                                    alt="Image 22"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Image-22-end */}

                    {/* Image-23-start [full size] */}
                    <div className="max-w-xs md:max-w-xl lg:max-w-3xl h-[400px] md:h-[500px] lg:h-[600px] mx-auto p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(23)}
                                alt="Image 23"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                            />
                        </div>
                    </div>
                    {/* Image-23-end */}

                    {/* Image-24-start [full size] */}
                    <div className="h-[500px] md:h-[600px] lg:h-[700px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(24)}
                                alt="Image 24"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-24-end */}

                    {/* Image-25-start [full size] */}
                    <div className="h-[400px] md:h-[500px] lg:h-[600px] p-1 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(25)}
                                alt="Image 25"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-25-end */}

                    {/* Image-26-start [full size] */}
                    <div className="h-[400px] md:h-[500px] lg:h-[600px] p-1 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(26)}
                                alt="Image 26"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-26-end */}

                    {/* Image-27-start [full size] */}
                    <div className="h-[400px] md:h-[500px] lg:h-[600px] p-1 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(27)}
                                alt="Image 27"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-27-end */}

                    {/* Image-28-start [full size] */}
                    <div className="h-[400px] md:h-[500px] lg:h-[600px] p-1 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(28)}
                                alt="Image 28"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-28-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                        {/* Image-29-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(29)}
                                    alt="Image 29"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                        {/* Image-29-end */}

                        {/* Image-30-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                                <Image
                                    src={getImagePath(30)}
                                    alt="Image 30"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Image-30-end */}

                    {/* Image-31-start [full size] */}
                    <div className="h-[500px] md:h-[600px] lg:h-[700px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                            <Image
                                src={getImagePath(31)}
                                alt="Image 31"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                    {/* Image-31-end */}
                </div>
            </section>
            <Footer />
        </main>
    );
}
