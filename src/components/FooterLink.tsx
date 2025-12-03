import Link from "next/link";

interface FooterLinkProps {
    href: string;
    label: string;
    text: string
}
export default function FooterLink({href, label, text}: FooterLinkProps) {
    return (
        <div className="w-full flex justify-center items-center mt-6 gap-x-2 text-sm text-gray-300">
            <p>{text}</p>
            <Link href={href} className="font-bold hover:text-yellow-500">{label}</Link>
        </div>
    );
}