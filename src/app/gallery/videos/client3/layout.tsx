import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Raj & Meera Wedding Videos",
    description:
        "Explore the beautiful wedding video collection of Raj & Meera captured by Colors Of Happiness. Professional wedding videography showcasing love, emotions, and precious moments.",
    keywords: [
        "Raj Meera wedding videos",
        "wedding videography",
        "Colors Of Happiness",
        "wedding videos",
        "Indian wedding videos",
        "professional videographer",
    ],
    openGraph: {
        title: "Raj & Meera Wedding Videos | Colors Of Happiness",
        description:
            "Beautiful wedding video collection of Raj & Meera captured by Colors Of Happiness professional videographers.",
        images: [
            {
                url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                width: 1200,
                height: 800,
                alt: "Raj & Meera Wedding Videography",
            },
        ],
        url: "https://colorsofhappiness.com/gallery/videos/client3",
    },
    twitter: {
        card: "summary_large_image",
        title: "Raj & Meera Wedding Videos",
        description:
            "Beautiful wedding video collection captured by Colors Of Happiness.",
        images: ["https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"],
    },
    alternates: {
        canonical: "https://colorsofhappiness.com/gallery/videos/client3",
    },
};

export default function Client3VideoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
