'use client';

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {

    const isUserLoggedIn = true;

    const pathname = usePathname();
    const isCurrentlyHome = pathname === '/';

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

        </nav>
    )
}

export default Nav