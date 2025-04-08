"use client";
import React, { useEffect, useState, Suspense, type JSX } from "react";
import BoxPage from "./boxPage";
import BoxLink from "./boxLink";


interface Project{
    id: number;
    name: string;
    description: string;
    http_url_to_repo: string;
}

async function getProjects() {
    console.log("Fetching projects...");
    const projects = await fetch("https://git.lunarware.tech/api/v4/projects");
    console.log(projects.ok);
    const projectsData: Project[] = await projects.json() as Project[];
    
    
    return projectsData.map((project) => {
        return (
            <BoxLink
                key={project.id}
                title={project.name}
                description={project.description}
                href={project.http_url_to_repo}
            />
        )
    });
}

export default function Projects() {
    const [projects, setProjects] = useState<JSX.Element[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const projectElements = await getProjects();
                setProjects(projectElements);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError("Error loading projects");
            }
        }

        void fetchProjects();
    }, []);

    return (
        <BoxPage title="Projects">
            <Suspense fallback={<p className="text-black">Loading...</p>}>
                {error ? <p>{error}</p> : projects}
            </Suspense>
        </BoxPage>
    );
}