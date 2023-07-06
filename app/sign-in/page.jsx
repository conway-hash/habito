'use client';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Image from 'next/image';

const SignIn = () => {
    return (
        <section className="w-full h-screen min-h-[400px] sm:min-h-[600px] flex-center flex-col">
            <div className="sign_in_cont w-full max-w-[600px] px-5 py-10 sm:px-10">
                <h1 className="sign_in_text">Sign In</h1>
                <div className="flex gap-4">
                    <button type="button" onClick={signIn} className="green_btn flex-1">
                        <Image src='/assets/icons/google.svg' height={25} width={25} alt='google' />
                    </button>
                    <button type="button" onClick={signIn} className="green_btn flex-1">
                        <Image src='/assets/icons/apple.svg' height={25} width={25} alt='apple' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SignIn