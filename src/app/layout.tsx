import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default:
            "Colors Of Happiness - Professional Wedding Photography & Videography",
        template: "%s | Colors Of Happiness",
    },
    description:
        "Colors Of Happiness offers professional wedding photography and videography services. Capturing your special moments with artistic vision and emotional storytelling. Based in India, serving couples worldwide.",
    keywords: [
        "wedding photography",
        "wedding videography",
        "professional photographer",
        "wedding memories",
        "colors of happiness",
        "bridal photography",
        "wedding cinematography",
        "Indian wedding photographer",
    ],
    authors: [
        { name: "Colors Of Happiness", url: "https://colorsofhappiness.com" },
    ],
    creator: "Colors Of Happiness",
    publisher: "Robistaan TechLab Pvt Ltd",
    metadataBase: new URL("https://colorsofhappiness.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://colorsofhappiness.com",
        siteName: "Colors Of Happiness",
        title: "Colors Of Happiness - Professional Wedding Photography & Videography",
        description:
            "Professional wedding photography and videography services capturing your special moments with artistic vision and emotional storytelling.",
        images: [
            {
                url: "/hero/COH-logo.png",
                width: 1200,
                height: 630,
                alt: "Colors Of Happiness - Wedding Photography Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Colors Of Happiness - Professional Wedding Photography",
        description:
            "Professional wedding photography and videography services capturing your special moments.",
        images: ["/hero/COH-logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/hero/COH-logo.png" type="image/png" />
                <link rel="apple-touch-icon" href="/hero/COH-logo.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#561C24" />
                <meta name="msapplication-TileColor" content="#561C24" />
                <meta
                    name="msapplication-TileImage"
                    content="/hero/COH-logo.png"
                />
                {/* Preconnect to improve loading performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                {/* Analytics - Add your tracking ID here when ready */}
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script> */}
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}
