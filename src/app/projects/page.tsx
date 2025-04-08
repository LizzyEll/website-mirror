import Projects from '../components/projects';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    authors: [{ name: "LizzyEll" }],
    keywords: ["Projects", "Git", "Gitlab", "GitHub", "LizzyEll", "LizzyEll00", "Lunarware", "Lunarware.xyz", "Lunarware.tech"],
    description: "My projects",
    openGraph: {
        title: "Projects",
        description: "My projects",
        url: "https://lunarware.tech/projects",
        siteName: "Portfolio",
        images: [
            {
                url: "https://lunarware.xyz/images/gitlab.svg",
                width: 800,
                height: 600,
                alt: "Avatar of LizzyEll",
                type: "image/svg+xml",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    icons: [{ rel: "icon", url: "/images/gitlab.svg" }],
};

export default function ProjectsPage() {
    return <Projects />;
}