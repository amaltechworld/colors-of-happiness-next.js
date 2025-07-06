"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface YouTubeVideoProps {
    videoId: string;
    title: string;
    className?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
    videoId,
    title,
    className = "",
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (!isClicked) {
            // Reset iframe to thumbnail state
            if (iframeRef.current) {
                iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`;
            }
        }
    };

    const handleClick = () => {
        setIsClicked(true);
        if (iframeRef.current) {
            iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`;
        }
    };

    return (
        <div
            className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="aspect-video relative">
                {!isHovered && !isClicked ? (
                    // Show thumbnail when not hovered
                    <div className="w-full h-full relative">
                        <Image
                            src={thumbnailUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-600 rounded-full p-4 opacity-80 hover:opacity-100 transition-opacity">
                                <svg
                                    className="w-8 h-8 text-white ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M8 5v10l7-5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Show iframe when hovered or clicked
                    <iframe
                        ref={iframeRef}
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=${
                            isHovered || isClicked ? 1 : 0
                        }&mute=${isClicked ? 0 : 1}&controls=${
                            isClicked ? 1 : 0
                        }&showinfo=0&rel=0&modestbranding=1`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                )}
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-lg font-medium">{title}</h3>
            </div>
        </div>
    );
};

export default YouTubeVideo;
