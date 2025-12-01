'use client'
import {NAV_ITEMS} from "@/lib/Constants";
import Link from 'next/link';
import {usePathname} from "next/navigation";

const NavItem = () => {
    const path = usePathname()

    const isActive = (href: string) => {
        if (href === '/') return path === '/'
        return path.startsWith(href)
    }
    return (
        <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
            {
                NAV_ITEMS.map(({href, label}) => (
                    <li key={label}>
                        <Link className={`hover:text-yellow-500 transition-colors ${isActive(href) ?'text-gray-100' : ''}`} href={href}>{label}</Link>
                    </li>
                ))
            }
        </ul>
    )
}
export default NavItem
