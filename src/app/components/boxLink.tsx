import Link from 'next/link';
import Image from 'next/image';
import type { JSX } from 'react';

export default function BoxLink({title, icon, description, href}: {title: string, icon?: string, description: string, href: string}) {
    let LinkElement: JSX.Element | null = null;

    // Use Link if href is local, otherwise use a regular anchor tag
    if (href.startsWith("/")) {
        LinkElement = (
            <Link href={href} prefetch={true} className="flex flex-row gap-4 items-center w-64 h-24 p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white dark:bg-gray-800 dark:text-white">
                {icon && <Image src={icon} alt={title} width={64} height={64} />}
                <div>
                    <h1 className="text-xl">{title}</h1>
                    {description}
                </div>
            </Link>
        )
    } else {
        LinkElement = (
            <a href={href} target="_blank" className="flex flex-row gap-4 items-center w-64 h-24 p-4 m-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white dark:bg-gray-800 dark:text-white">
                {icon && <Image src={icon} alt={title} width={64} height={64} />}
                <div>
                    <h1 className="text-xl">{title}</h1>
                    {description}
                </div>
            </a>
        )
    }
    return LinkElement;
}