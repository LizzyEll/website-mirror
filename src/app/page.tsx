import BoxLink from "@/app/components/boxLink";
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
