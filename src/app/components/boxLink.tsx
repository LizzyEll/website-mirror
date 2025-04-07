import Link from 'next/link';
import Image from 'next/image';

export default function BoxLink({title, icon, description, href}: {title: string, icon?: string, description: string, href: string}) {
    return (
        <Link href={href} className="flex flex-row gap-4 items-center w-72 h-32 p-4 m-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white dark:bg-gray-800 dark:text-white">
            {icon && <Image src={icon} alt={title} width={64} height={64} />}
            <div>
                <h1 className="text-xl">{title}</h1>
                {description}
            </div>
        </Link>
    )
}