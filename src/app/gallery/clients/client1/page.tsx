"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../../../Components/Footer/Footer";

export default function Client1Gallery() {
    return (
        <main className="bg-white min-h-screen !scroll-smooth scrollbar-thumb-gray-600 scrollbar-track-gray-300">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ImageGallery",
                        name: "Sree & Prabhul Wedding Gallery",
                        description:
                            "Beautiful wedding gallery of Sree & Prabhul captured by Colors Of Happiness professional photographers.",
                        creator: {
                            "@type": "Organization",
                            name: "Colors Of Happiness",
                            url: "https://colorsofhappiness.com",
                            telephone: "+919745713419",
                            email: "Hello@colorsofhappiness.com",
                        },
                        about: {
                            "@type": "Event",
                            name: "Sree & Prabhul Wedding",
                            eventStatus: "https://schema.org/EventScheduled",
                            eventAttendanceMode:
                                "https://schema.org/OfflineEventAttendanceMode",
                        },
                        image: [
                            "https://colorsofhappiness.com/gallery/clients/client1/image1.jpg",
                            "https://colorsofhappiness.com/gallery/clients/client1/image2.jpg",
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
                        priority
                    />
                </Link>
            </div>

            <section className="w-full py-14 pt-20">
                <div className="container mx-auto max-w-[1200px] bg-white p-6 md:p-12 lg:p-16">
                    <h1 className="text-6xl text-gray-700 font-light text-center p-5">
                        Sree <br /> & <br /> Prabhul
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

                    {/* Full size image-1 start */}
                    <div className="w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full p-5 bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600">
                                <p className="text-lg font-semibold">Image 1</p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image1.jpg
                                </p>
                                <p className="text-xs mt-2">Full Size Image</p>
                            </div>
                        </div>
                    </div>
                    {/* Full size image-1 end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-2-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 2
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image2.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-2-end */}

                        {/* Image-3-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 3
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image3.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-3-end */}
                    </div>
                    {/* Side by side-image end */}

                    {/* Image-4-start [full size] */}
                    <div className="max-w-xs md:max-w-xl lg:max-w-3xl h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] mx-auto p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">Image 4</p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image4.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-4-end */}

                    {/* Image-5-start [full size] */}
                    <div className="h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">Image 5</p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image5.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-5-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-6-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 6
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image6.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-6-end */}

                        {/* Image-7-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 7
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image7.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-7-end */}
                    </div>
                    {/* Side by side-image end */}

                    {/* Image-8-start [full size] */}
                    <div className="h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[700px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">Image 8</p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image8.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-8-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-9-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 9
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image9.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-9-end */}

                        {/* Image-10-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden p-2 md:p-3 lg:p-5">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 10
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image10.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-10-end */}
                    </div>
                    {/* Side by side-image end */}

                    {/* Image-11-start [full size] */}
                    <div className="h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 11
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image11.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-11-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-12-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden p-2 md:p-3 lg:p-5">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 12
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image12.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-12-end */}

                        {/* Image-13-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 13
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image13.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image-13-end */}
                    {/* Side by side-image end */}

                    {/* Image-14-start [full size] */}
                    <div className="h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 14
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image14.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-14-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-15-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 15
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image15.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-15-end */}

                        {/* Image-16-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 16
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image16.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image-16-end */}

                    {/* Image-17-start [full size] */}
                    <div className="h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[700px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 17
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image17.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-17-end */}

                    {/* Image-18-start [full size] */}
                    <div className="max-w-xs md:max-w-xl lg:max-w-3xl h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] mx-auto p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 18
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image18.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-18-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-19-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 19
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image19.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-19-end */}

                        {/* Image-20-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 20
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image20.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image-20-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                        {/* Image-21-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 21
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image21.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-21-end */}

                        {/* Image-22-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 22
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image22.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image-22-end */}

                    {/* Image-23-start [full size] */}
                    <div className="max-w-xs md:max-w-xl lg:max-w-3xl h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] mx-auto p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 23
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image23.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-23-end */}

                    {/* Image-24-start [full size] */}
                    <div className="h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[700px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 24
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image24.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-24-end */}

                    {/* Image-25-start [full size] */}
                    <div className="h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-1 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 25
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image25.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-25-end */}

                    {/* Image-26-start [full size] */}
                    <div className="h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-1 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 26
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image26.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-26-end */}

                    {/* Image-27-start [full size] */}
                    <div className="h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-1 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 27
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image27.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-27-end */}

                    {/* Image-28-start [full size] */}
                    <div className="h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-1 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 28
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image28.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-28-end */}

                    {/* Side by side-image start */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                        {/* Image-29-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 29
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image29.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Image-29-end */}

                        {/* Image-30-start */}
                        <div className="h-72 md:h-96 lg:h-screen overflow-hidden">
                            <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                                <div className="text-center text-gray-600 p-4">
                                    <p className="text-lg font-semibold">
                                        Image 30
                                    </p>
                                    <p className="text-sm">
                                        /gallery/clients/client1/image30.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image-30-end */}

                    {/* Image-31-start [full size] */}
                    <div className="h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[700px] p-2 md:p-3 lg:p-5 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 border-4 border-red-500 flex items-center justify-center">
                            <div className="text-center text-gray-600 p-4">
                                <p className="text-lg font-semibold">
                                    Image 31
                                </p>
                                <p className="text-sm">
                                    /gallery/clients/client1/image31.jpg
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image-31-end */}
                </div>
            </section>
            <Footer />
        </main>
    );
}
