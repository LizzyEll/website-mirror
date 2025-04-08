import React from "react";
import BoxLink from "./boxLink";

export default function BoxPage({title, children}: {title: string, children: React.ReactNode}) {
    return (
        <div className="flex flex-col items-center justify-between max-h-128 max-w-220 gap-8">
            <h1 className="text-4xl font-bold text-center">{title}</h1>
            <div className="flex flex-wrap justify-center overflow-y-auto">
                {children}
            </div>
            <BoxLink
            title="Back to Home"
            description="Go back to the home page"
            icon="/images/home.svg"
            href="/"
            >
            </BoxLink>
        </div>
    );
}