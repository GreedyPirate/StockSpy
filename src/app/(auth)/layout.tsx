import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-screen bg-gray-900 grid grid-rows-[8.5fr_1.5fr] gap-y-10 lg:grid-rows-none lg:grid-cols-[5fr_5fr] xl:grid-rows-none xl:grid-cols-[4fr_6fr]">
            <section className='px-10 lg:px-16 flex flex-col'>
                <Link href='/' className="auth-logo">
                    <img src='/assets/icons/logo.svg' alt="StockSpy" width={140} height={32}
                        className='h-8 w-auto cursor-pointer'
                    />
                </Link>
                {children}
            </section>
            <section className='bg-gray-800 lg:h-screen px-6 py-4 md:p-6 lg:py-12 lg:px-18 overflow-hidden'>
                <div className="lg:mt-4 lg:mb-16">
                    <blockquote className="break-all auth-blockquote">Signalist turned my watchlist into a winning list. The alerts are spot-on, and I feel more confident making moves in the market</blockquote>
                    <div className="flex justify-between items-center">
                        <div>
                            <cite className="auth-testimonial-author">- Jamie L., Day Trader</cite>
                            <p className="md:text-sm text-gray-500">Retail Investor</p>
                        </div>
                        <div className="flex gap-1">
                            {
                                Array(5).fill(1).map((_, index) =>
                                    <Image key={index} src='/assets/icons/star.svg' alt="Quote" width={20} height={20} className='h-5 w-auto' />
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:block ">
                    <Image src="/assets/images/dashboard.png" alt="Dashboard Preview" width={2800} height={2324} className="auth-dashboard-preview absolute top-0" />
                </div>
            </section>
        </main>
    )
}

export default Layout;