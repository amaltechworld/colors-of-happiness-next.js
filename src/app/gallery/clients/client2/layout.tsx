import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Arjun & Meera Wedding Gallery",
    description:
        "Explore the beautiful wedding gallery of Arjun & Meera captured by Colors Of Happiness. Professional wedding photography showcasing love, emotions, and precious moments.",
    keywords: [
        "Arjun Meera wedding",
        "wedding gallery",
        "Colors Of Happiness",
        "wedding photography",
        "Indian wedding",
        "professional photographer",
    ],
    openGraph: {
        title: "Arjun & Meera Wedding Gallery | Colors Of Happiness",
        description:
            "Beautiful wedding gallery of Arjun & Meera captured by Colors Of Happiness professional photographers.",
        images: [
            {
                url: "/gallery/clients/client2/image1.jpg",
                width: 1200,
                height: 800,
                alt: "Arjun & Meera Wedding Photography",
            },
        ],
        url: "https://colorsofhappiness.com/gallery/clients/client2",
    },
    twitter: {
        card: "summary_large_image",
        title: "Arjun & Meera Wedding Gallery",
        description:
            "Beautiful wedding gallery captured by Colors Of Happiness.",
        images: ["/gallery/clients/client2/image1.jpg"],
    },
    alternates: {
        canonical: "https://colorsofhappiness.com/gallery/clients/client2",
    },
};

export default function Client2Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
