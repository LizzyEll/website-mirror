import BoxLink from "@/app/components/boxLink";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <h1 className="text-4xl font-bold text-center">LizzyEll</h1>
      <div className="flex flex-wrap justify-center">
        <BoxLink 
        title="About Me" 
        description="Learn a little bit about me" 
        icon="/images/avatar.webp"
        href="/projects"
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
        href="/projects"
        ></BoxLink>
      </div>
      <h2 className="text-2xl font-bold text-center">Portfolio</h2>
    </main>
  );
}
