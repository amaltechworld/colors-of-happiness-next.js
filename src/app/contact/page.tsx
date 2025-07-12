"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/Footer/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        details: "",
        location: "",
        dates: "",
        services: [] as string[],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            services: checked
                ? [...prev.services, value]
                : prev.services.filter((service) => service !== value),
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Here you would typically send the form data to your backend
            console.log("Form submitted:", formData);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setSubmitStatus("success");
            // Reset form after successful submission
            setFormData({
                name: "",
                email: "",
                phone: "",
                details: "",
                location: "",
                dates: "",
                services: [],
            });
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-white min-h-screen">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        name: "Contact Colors Of Happiness - Wedding Photography",
                        description:
                            "Get in touch with Colors Of Happiness for your wedding photography and videography needs. Book your dream wedding coverage today.",
                        provider: {
                            "@type": "Organization",
                            name: "Colors Of Happiness",
                            url: "https://colorsofhappiness.com",
                            telephone: "+919745713419",
                            email: "Hello@colorsofhappiness.com",
                        },
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
                        className="object-contain w-16 h-8 sm:w-20 sm:h-10 md:w-20 md:h-10"
                        style={{ width: "auto", height: "auto" }}
                        priority
                    />
                </Link>
            </div>

            {/* Main Form Section */}
            <section className="min-h-screen flex items-center justify-center px-4 py-20">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                            Let&apos;s Capture Your
                            <span className="block text-6xl md:text-7xl font-thin text-gray-600">
                                Love Story
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Tell us about your special day and let&apos;s create
                            something magical together
                        </p>
                    </div>

                    {/* Form Container - Takes 70% of screen */}
                    <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Row 1: Name and Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-900 bg-white"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Email{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-900 bg-white"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Wedding Location */}
                            <div>
                                <label
                                    htmlFor="location"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Wedding Location{" "}
                                    <span className="text-red-500">*</span>
                                </label>{" "}
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-900 bg-white"
                                    placeholder="City, State or Venue Name - Please provide detailed location information"
                                />
                            </div>

                            {/* Row 3: Phone and Date */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Phone{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-900 bg-white"
                                        placeholder="+00 00000 00000"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="dates"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Wedding Date{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="dates"
                                        name="dates"
                                        required
                                        value={formData.dates}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white placeholder-gray-400 [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-datetime-edit-text]:text-gray-400 [&::-webkit-datetime-edit-month-field]:text-gray-400 [&::-webkit-datetime-edit-day-field]:text-gray-400 [&::-webkit-datetime-edit-year-field]:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Services Section */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">
                                    What services are you looking for?
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        "Photography",
                                        "Films",
                                        "Both Photography and Films",
                                    ].map((service) => (
                                        <label
                                            key={service}
                                            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200"
                                        >
                                            <input
                                                type="checkbox"
                                                name="services"
                                                value={service}
                                                checked={formData.services.includes(
                                                    service
                                                )}
                                                onChange={handleCheckboxChange}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <span className="ml-3 text-sm text-gray-700">
                                                {service}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Details Section */}
                            <div>
                                <label
                                    htmlFor="details"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Tell us more about your wedding{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="details"
                                    name="details"
                                    required
                                    rows={6}
                                    value={formData.details}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400 text-gray-900 bg-white"
                                    placeholder="Share details about your wedding - event flow, venues, special moments you want captured, your vision, or any specific requirements..."
                                />
                            </div>

                            {/* Status Messages */}
                            {submitStatus === "success" && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                                    ✅ Thank you! Your message has been sent
                                    successfully. We&apos;ll get back to you
                                    soon!
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                                    ❌ Something went wrong. Please try again or
                                    contact us directly.
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 shadow-lg"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                            Sending...
                                        </div>
                                    ) : (
                                        "Send Message & Book Consultation"
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Contact Info */}
                        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-600 mb-2">
                                Prefer to contact us directly?
                            </p>
                            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
                                <a
                                    href="tel:+919745713419"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    📞 +91 97457 13419
                                </a>
                                <a
                                    href="mailto:Hello@colorsofhappiness.com"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    ✉️ Hello@colorsofhappiness.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
