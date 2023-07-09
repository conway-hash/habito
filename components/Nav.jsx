'use client';

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {

    const isUserLoggedIn = true;

    const pathname = usePathname();
    const isCurrentlyHome = pathname === '/';

    const [toggleDropdown, setToggleDropdown] = useState(false)

    return (
        <nav className="flex-between w-full mb-16 pt-3 px-5 fixed top-0 left-0">
            <Link href='/' className="flex gap-2 flex-center nav_logo_cont">
                <h1 className="nav_logo text-center mr-2.5">ō</h1>
                <p className="nav_p">Habitō</p>
            </Link>

            <div className="sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        {isCurrentlyHome ? (
                            <Link href='/dashboard' className="green_btn appear_top" >
                                Dashboard
                            </Link>
                        ) : (
                            <Link href='/dashboard' className="green_btn disappear_top" >
                                Dashboard
                            </Link>
                        )}

                        <button type="button" onClick={signOut} className="outline_btn">
                            Sign Out
                        </button>
                    </div>
                ) : (<>{
                    isCurrentlyHome ? (
                        <Link href='/sign-in' className="green_btn appear_top" >
                            Sign In
                        </Link>
                    ) : (
                        <Link href='/sign-in' className="green_btn disappear_top" >
                            Sign In
                        </Link>
                    )
                }</>)
                }
            </div>

            <div type="button" className="flex sm:hidden">
                <button className="cursor-pointer bg-gradient-to-r from-primary-green to-[green] drop-shadow-[0_0_5px_rgba(0,255,0,0.8)] rounded-sm w-8 h-8 hover:drop-shadow-[0_0_10px_rgba(0,255,0,1)] transition-all" onClick={() => setToggleDropdown((prev) => !prev)} ></button>

                <div className={toggleDropdown ? 'dropdown_active dropdown' : 'dropdown'}>

                    {isUserLoggedIn ? (
                        <>
                            {isCurrentlyHome ? (
                                <Link href='/dashboard' className="dropdown_link" onClick={() => setToggleDropdown(false)}>Dashboard</Link>

                            ) : (
                                <Link href='/' className="dropdown_link" onClick={() => setToggleDropdown(false)}>Home</Link>
                            )}

                            <button type="button" onClick={signOut} className="dropdown_link">
                                Sign Out
                            </button>
                        </>
                    ) : (
                        < Link href='/sign-in' className="dropdown_link" onClick={() => setToggleDropdown(false)}>Sign In</Link>
                    )}

                </div>

            </div>

        </nav >
    )
}

export default Nav