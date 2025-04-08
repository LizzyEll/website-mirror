import BoxLink from "@/app/components/boxLink";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio",
    authors: [{ name: "LizzyEll" }],
    keywords: ["Home", "Portfolio", "Git", "Gitlab", "GitHub", "LizzyEll", "LizzyEll00", "Lunarware", "Lunarware.xyz", "Lunarware.tech"],
    description: "My home page",
    openGraph: {
        title: "Portfolio",
        description: "My home page",
        url: "https://lunarware.tech/",
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

export default function HomePage() {
  return (
      <div className="flex flex-wrap justify-center">
        <BoxLink 
        title="About Me" 
        description="Learn a little bit about me" 
        icon="/images/avatar.webp"
        href="/about"
        ></BoxLink>

        <BoxLink 
        title="Projects" 
        description="View my projects" 
        icon="/images/gitlab.svg"
        href="/projects"
        ></BoxLink>
        
        <BoxLink 
        title="Links" 
        description="Discover my digital footprint" 
        icon="/images/link.svg"
        href="/links"
        ></BoxLink>
      </div>
  );
}
