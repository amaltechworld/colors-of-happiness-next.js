"use client";

import { useState } from "react";
import Image from "next/image";

const topImages = [
    { src: "/photos/photo-img1.jpg", alt: "Quates-wedding-img-top-1" },
    { src: "/photos/photo-img2.jpg", alt: "Quates-wedding-img-top-2" },
    { src: "/photos/photo-img3.jpg", alt: "Quates-wedding-img-top-3" },
    { src: "/photos/photo-img4.jpg", alt: "Quates-wedding-img-top-4" },
];

const bottomImages = [
    { src: "/photos/photo-img5.jpg", alt: "Quates-wedding-img-bottom-1" },
    { src: "/photos/photo-img6.jpg", alt: "Quates-wedding-img-bottom-2" },
    { src: "/photos/photo-img7.jpg", alt: "Quates-wedding-img-bottom-3" },
    { src: "/photos/photo-img8.jpg", alt: "Quates-wedding-img-bottom-4" },
];

const Photos = () => {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    const handleImageInteraction = (imageSrc: string) => {
        setActiveImage((prev) => (prev === imageSrc ? null : imageSrc));
    };

    const handleTouchEnd = (e: React.TouchEvent, imageSrc: string) => {
        e.preventDefault(); // Prevent default touch behavior
        e.stopPropagation(); // Stop event bubbling
        handleImageInteraction(imageSrc);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault(); // Prevent default touch behavior like scrolling
    };

    return (
        <section className="bg-white h-auto lg:h-screen lg:snap-start flex flex-col justify-between">
            {/* Top Images */}
            <div className="grid grid-cols-4 gap-4 p-1">
                {topImages.map((img) => (
                    <div
                        key={img.src}
                        className="relative aspect-[4/3] w-full overflow-hidden rounded-lg cursor-pointer select-none touch-manipulation"
                        onClick={() => handleImageInteraction(img.src)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={(e) => handleTouchEnd(e, img.src)}
                        style={{
                            WebkitTouchCallout: "none",
                            WebkitUserSelect: "none",
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                            className={`object-cover object-center rounded-lg transition-all duration-500 ease-in-out ${
                                activeImage === img.src
                                    ? "filter-none"
                                    : "filter grayscale md:hover:filter-none"
                            }`}
                        />
                    </div>
                ))}
            </div>

            {/* Blockquote */}
            <blockquote className="sm:text-2xl md:text-3xl py-4 m-0 italic font-light text-center text-[#561C24]">
                <p className="split-1 leading-normal">
                    Colors are the sparks <br />
                    that <br />
                    ignite creativity
                </p>
            </blockquote>

            {/* Bottom Images */}
            <div className="grid grid-cols-4 gap-4 p-1">
                {bottomImages.map((img) => (
                    <div
                        key={img.src}
                        className="relative aspect-[4/3] w-full overflow-hidden rounded-lg cursor-pointer select-none touch-manipulation"
                        onClick={() => handleImageInteraction(img.src)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={(e) => handleTouchEnd(e, img.src)}
                        style={{
                            WebkitTouchCallout: "none",
                            WebkitUserSelect: "none",
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                            className={`object-cover object-center rounded-lg transition-all duration-500 ease-in-out ${
                                activeImage === img.src
                                    ? "filter-none"
                                    : "filter grayscale md:hover:filter-none"
                            }`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Photos;
