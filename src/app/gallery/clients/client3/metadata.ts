import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aakash & Priya Wedding Gallery",
    description:
        "Explore the beautiful wedding gallery of Aakash & Priya captured by Colors Of Happiness. Professional wedding photography showcasing love, emotions, and precious moments.",
    keywords: [
        "Aakash Priya wedding",
        "wedding gallery",
        "Colors Of Happiness",
        "wedding photography",
        "Indian wedding",
        "professional photographer",
    ],
    openGraph: {
        title: "Aakash & Priya Wedding Gallery | Colors Of Happiness",
        description:
            "Beautiful wedding gallery of Aakash & Priya captured by Colors Of Happiness professional photographers.",
        images: [
            {
                url: "/gallery/clients/client3/image1.jpg",
                width: 1200,
                height: 800,
                alt: "Aakash & Priya Wedding Photography",
            },
        ],
        url: "https://colorsofhappiness.com/gallery/clients/client3",
    },
    twitter: {
        card: "summary_large_image",
        title: "Aakash & Priya Wedding Gallery",
        description:
            "Beautiful wedding gallery captured by Colors Of Happiness.",
        images: ["/gallery/clients/client3/image1.jpg"],
    },
    alternates: {
        canonical: "https://colorsofhappiness.com/gallery/clients/client3",
    },
};
