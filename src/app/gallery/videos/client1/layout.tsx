import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Arjun & Priya Wedding Videos",
    description:
        "Explore the beautiful wedding video collection of Arjun & Priya captured by Colors Of Happiness. Professional wedding videography showcasing love, emotions, and precious moments.",
    keywords: [
        "Arjun Priya wedding videos",
        "wedding videography",
        "Colors Of Happiness",
        "wedding videos",
        "Indian wedding videos",
        "professional videographer",
    ],
    openGraph: {
        title: "Arjun & Priya Wedding Videos | Colors Of Happiness",
        description:
            "Beautiful wedding video collection of Arjun & Priya captured by Colors Of Happiness professional videographers.",
        images: [
            {
                url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                width: 1200,
                height: 800,
                alt: "Arjun & Priya Wedding Videography",
            },
        ],
        url: "https://colorsofhappiness.com/gallery/videos/client1",
    },
    twitter: {
        card: "summary_large_image",
        title: "Arjun & Priya Wedding Videos",
        description:
            "Beautiful wedding video collection captured by Colors Of Happiness.",
        images: ["https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"],
    },
    alternates: {
        canonical: "https://colorsofhappiness.com/gallery/videos/client1",
    },
};

export default function Client1VideoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
