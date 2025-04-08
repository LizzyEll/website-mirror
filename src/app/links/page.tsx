import BoxPage from "../components/boxPage";
import BoxLink from "../components/boxLink";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Links",
    authors: [{ name: "LizzyEll" }],
    keywords: ["Links", "Git", "Gitlab", "GitHub", "LizzyEll", "LizzyEll00", "Lunarware", "Lunarware.xyz", "Lunarware.tech"],
    description: "My links",
    openGraph: {
        title: "Links",
        description: "My links",
        url: "https://lunarware.tech/links",
        siteName: "Portfolio",
        images: [
            {
                url: "https://lunarware.xyz/images/link.svg",
                width: 800,
                height: 600,
                alt: "Avatar of LizzyEll",
                type: "image/svg+xml",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    icons: [{ rel: "icon", url: "/images/link.svg" }],
};

export default function LinksPage() {
    const linkInfo = [
        {
            title: "Gitlab",
            description: "My Gitlab.",
            icon: "/images/gitlab.svg",
            href: "https://git.lunarware.tech/LizzyEll"
        },
        {
            title: "GitHub",
            description: "My GitHub.",
            icon: "/images/github.svg",
            href: "https://github.com/LizzyEll"
        },
        {
            title: "Discord",
            description: "My Discord server.",
            icon: "/images/discord.svg",
            href: "https://discord.gg/M2s7b9YjDG"
        }
    ]

    const links = linkInfo.map((link) => {
        return (
            <BoxLink
                key={link.title}
                title={link.title}
                description={link.description}
                icon={link.icon}
                href={link.href}
            />
        )
    });
    
    return (
        <BoxPage title="Links">
            {links}
        </BoxPage>
    )
}