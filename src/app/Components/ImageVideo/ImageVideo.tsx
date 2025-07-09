

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImageVideo = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center px-0 bg-white">
            <div className="flex flex-col md:flex-row w-full h-[80vh] mx-0 px-0">
                {/* Left: Image Gallery */}
                <Link
                    href="/gallery"
                    className="group relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden"
                >
                    <Image
                        src="/imageVideo/image.jpg"
                        alt="Image Gallery"
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/20 transition duration-500" />
                    {/* Text & Underline */}
                    <div className="absolute left-0 bottom-0 p-8 flex flex-col items-start">
                        <span className="text-white text-2xl font-semibold mb-2 tracking-widest">
                            IMAGES
                        </span>
                        <span className="text-white text-lg font-light relative">
                            VISIT THE GALLERY
                            <span className="block h-[2px] bg-white mt-1 w-0 group-hover:w-full transition-all duration-500 origin-left"></span>
                        </span>
                    </div>
                </Link>
                {/* Right: Video Gallery */}
                <Link
                    href="/gallery/videos"
                    className="group relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden"
                >
                    <Image
                        src="/imageVideo/video.jpg"
                        alt="Video Gallery"
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition duration-500" />
                    {/* Text & Underline */}
                    <div className="absolute right-0 bottom-0 p-8 flex flex-col items-end">
                        <span className="text-white text-2xl font-semibold mb-2 tracking-widest">
                            VIDEOS
                        </span>
                        <span className="text-white text-lg font-light relative">
                            VISIT THE GALLERY
                            <span className="block h-[2px] bg-white mt-1 w-0 group-hover:w-full transition-all duration-500 origin-left"></span>
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default ImageVideo;
