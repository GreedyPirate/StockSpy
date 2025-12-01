import Link from "next/link";
import Image from "next/image";
import NavItem from "@/components/NavItem";
import UserDropDown from "@/components/UserDropDown";

const Header = () => {
    return (
        <header className='sticky top-0 header'>
            <div className='container header-wrapper'>
                <Link href='/'>
                    <Image src='/assets/icons/logo.svg' className='h-8 w-auto cursor-pointer' alt='Logo' width={140} height={32}/>
                </Link>
                <nav className='hidden sm:block'>
                    <NavItem></NavItem>
                </nav>
                <UserDropDown/>
            </div>
        </header>
    )
}
export default Header
