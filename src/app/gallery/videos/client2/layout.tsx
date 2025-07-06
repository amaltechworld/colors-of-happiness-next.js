import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vikram & Anjali Wedding Videos",
    description:
        "Explore the beautiful wedding video collection of Vikram & Anjali captured by Colors Of Happiness. Professional wedding videography showcasing love, emotions, and precious moments.",
    keywords: [
        "Vikram Anjali wedding videos",
        "wedding videography",
        "Colors Of Happiness",
        "wedding videos",
        "Indian wedding videos",
        "professional videographer",
    ],
    openGraph: {
        title: "Vikram & Anjali Wedding Videos | Colors Of Happiness",
        description:
            "Beautiful wedding video collection of Vikram & Anjali captured by Colors Of Happiness professional videographers.",
        images: [
            {
                url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                width: 1200,
                height: 800,
                alt: "Vikram & Anjali Wedding Videography",
            },
        ],
        url: "https://colorsofhappiness.com/gallery/videos/client2",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vikram & Anjali Wedding Videos",
        description:
            "Beautiful wedding video collection captured by Colors Of Happiness.",
        images: ["https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"],
    },
    alternates: {
        canonical: "https://colorsofhappiness.com/gallery/videos/client2",
    },
};

export default function Client2VideoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
