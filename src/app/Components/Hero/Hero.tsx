import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
    return (
        <section
            className="w-full h-screen md:h-auto lg:h-screen flex items-center justify-center bg-white relative"
            id="hero"
        >
            {/* Logo at Top Left */}
            <div className="absolute top-4 left-4 z-30">
                <Image
                    src="/hero/COH-logo.png"
                    alt="Colors Of Happiness Wedding Photography Logo"
                    width={80}
                    height={40}
                    className="object-contain w-14 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10"
                    priority
                />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 pt-16 md:pt-0">
                {/* Left: Image */}
                <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
                    <div className="relative w-[340px] h-[420px] md:w-[450px] md:h-[550px] lg:w-[700px] lg:h-[100vh]">
                        <Image
                            src="/hero/hero-couple.jpg"
                            alt="Couple"
                            fill
                            sizes="(max-width: 768px) 340px, (max-width: 1024px) 450px, 700px"
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
                    <Link
                        href="/contact"
                        className="mb-8 inline-block bg-black text-white px-8 py-3 rounded-full font-semibold transition hover:bg-gray-800"
                    >
                        BOOK NOW
                    </Link>
                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/share/15BUBsv3BG/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <span className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 text-xl text-gray-700 transition inline-flex items-center justify-center cursor-pointer">
                                <FaFacebookF />
                            </span>
                        </a>
                        <a
                            href="https://www.instagram.com/colorsofhappiness_coh/?igsh=MXZndjc0dTg2YzUwYQ%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <span className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 text-xl text-gray-700 transition inline-flex items-center justify-center cursor-pointer">
                                <FaInstagram />
                            </span>
                        </a>
                        <a
                            href="https://www.youtube.com/@colorsofhappiness_coh"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <span className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 text-xl text-gray-700 transition inline-flex items-center justify-center cursor-pointer">
                                <FaYoutube />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* WhatsApp Button - Bottom Right */}
            <div className="absolute bottom-6 right-6 z-30">
                <a
                    href="https://wa.me/919745713419"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                >
                    <FaWhatsapp className="text-2xl" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
