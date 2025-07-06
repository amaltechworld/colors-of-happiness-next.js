import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rohan & Kavya Wedding Videos",
    description:
        "Explore the beautiful wedding video collection of Rohan & Kavya captured by Colors Of Happiness. Professional wedding videography showcasing love, emotions, and precious moments.",
    keywords: [
        "Rohan Kavya wedding videos",
        "wedding videography",
        "Colors Of Happiness",
        "wedding videos",
        "Indian wedding videos",
        "professional videographer",
    ],
    openGraph: {
        title: "Rohan & Kavya Wedding Videos | Colors Of Happiness",
        description:
            "Beautiful wedding video collection of Rohan & Kavya captured by Colors Of Happiness professional videographers.",
        images: [
            {
                url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                width: 1200,
                height: 800,
                alt: "Rohan & Kavya Wedding Videography",
            },
        ],
        url: "https://colorsofhappiness.com/gallery/videos/client4",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rohan & Kavya Wedding Videos",
        description:
            "Beautiful wedding video collection captured by Colors Of Happiness.",
        images: ["https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"],
    },
    alternates: {
        canonical: "https://colorsofhappiness.com/gallery/videos/client4",
    },
};

export default function Client4VideoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
