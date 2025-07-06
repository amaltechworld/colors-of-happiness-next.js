import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rohan & Kavya Wedding Gallery",
    description:
        "Explore the beautiful wedding gallery of Rohan & Kavya captured by Colors Of Happiness. Professional wedding photography showcasing love, emotions, and precious moments.",
    keywords: [
        "Rohan Kavya wedding",
        "wedding gallery",
        "Colors Of Happiness",
        "wedding photography",
        "Indian wedding",
        "professional photographer",
    ],
    openGraph: {
        title: "Rohan & Kavya Wedding Gallery | Colors Of Happiness",
        description:
            "Beautiful wedding gallery of Rohan & Kavya captured by Colors Of Happiness professional photographers.",
        images: [
            {
                url: "/gallery/clients/client4/image1.jpg",
                width: 1200,
                height: 800,
                alt: "Rohan & Kavya Wedding Photography",
            },
        ],
        url: "https://colorsofhappiness.com/gallery/clients/client4",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rohan & Kavya Wedding Gallery",
        description:
            "Beautiful wedding gallery captured by Colors Of Happiness.",
        images: ["/gallery/clients/client4/image1.jpg"],
    },
    alternates: {
        canonical: "https://colorsofhappiness.com/gallery/clients/client4",
    },
};

export default function Client4Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
