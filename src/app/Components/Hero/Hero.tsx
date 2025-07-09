import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            className="w-full h-screen flex items-center justify-center bg-white relative"
            id="hero"
        >
            {/* Logo at Top Left */}
            <div className="absolute top-4 left-4 z-30">
                <Image
                    src="/hero/COH-logo.png" // Replace with your logo image path
                    alt="Logo"
                    width={80}
                    height={40}
                    className="object-contain"
                />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
                {/* Left: Image */}
                <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
                    <div className="relative w-[340px] h-[480px] md:w-[600px] lg:w-[700px] md:h-[100vh]">
                        <Image
                            src="/hero/hero-couple.jpg"
                            alt="Couple"
                            fill
                            className="object-contain md:object-bottom"
                            priority
                        />
                    </div>
                </div>
                {/* Right: Content */}
                <div className="md:w-1/2 w-full flex flex-col items-center md:items-center text-center ">
                    <h1 className="text-2xl  lg:text-4xl text-gray-700 font-light tracking-widest mb-6 whitespace-nowrap">
                        COLORS OF HAPPINESS
                    </h1>
                    <p className="text-gray-500 text-base lg:text-lg mb-8 max-w-3xl">
                        At Colors of Happiness, we believe every love story is
                        unique. Our wedding photography and films capture the
                        essence of your special day, turning precious moments
                        into lasting memories. Let us preserve the colors of
                        your love, joy, and celebration, beautifully and
                        authentically.
                    </p>
                    <a
                        href="#contact"
                        className="mb-8 inline-block bg-black text-white px-8 py-3 rounded-full font-semibold transition hover:bg-gray-800"
                    >
                        BOOK NOW
                    </a>
                    <div className="flex gap-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <span className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 text-xl text-gray-700 transition inline-flex items-center justify-center cusrsor-pointer">
                                <FaFacebookF />
                            </span>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <span className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 text-xl text-gray-700 transition inline-flex items-center justify-center cusrsor-pointer">
                                <FaInstagram />
                            </span>
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <span className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 text-xl text-gray-700 transition inline-flex items-center justify-center cusrsor-pointer">
                                <FaYoutube />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
