import BoxPage from "../components/boxPage";
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Me",
    authors: [{ name: "LizzyEll" }],
    keywords: ["About", "About me", "LizzyEll", "LizzyEll00", "Lunarware", "Lunarware.xyz", "Lunarware.tech"],
    description: "About me",
    openGraph: {
        title: "About Me",
        description: "About me",
        url: "https://lunarware.tech/about",
        siteName: "Portfolio",
        images: [
            {
                url: "https://lunarware.xyz/images/avatar.webp",
                width: 800,
                height: 600,
                alt: "Avatar of LizzyEll",
                type: "image/webp",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    icons: [{ rel: "icon", url: "/images/avatar.webp" }],
};

export default function AboutPage() {
    return (
        <BoxPage
        title="About Me"
        ><div className="flex flex-col items-center justify-center">
            <Image src="/images/avatar.webp" alt="Avatar of LizzyEll" width={128} height={128} className="w-32 h-32 mb-4" />
            <p className="text-lg text-center">Hello! Im LizzyEll, a passionate developer with a love for creating innovative solutions. Welcome to my portfolio!</p>
            <p className="text-lg text-center">I am a full-stack developer with experience in various technologies. I love to learn and explore new things.</p>
            <p className="text-lg text-center">In my free time, I enjoy reading, gaming, and spending time with my family and friends.</p>
            <p className="text-lg text-center">Feel free to reach out to me through my social media links!</p>
        </div>
        
        </BoxPage>
    )
}