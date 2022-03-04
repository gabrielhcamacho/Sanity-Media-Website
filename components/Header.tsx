import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='flex items-center justify-between p-5 max-w-7xl mx-auto'>
            <div className='flex items-center space-x-10 font-mono'>
                <Link href='/'>
                    <h1 className='w-45 object-contain cursor-pointer text-2xl'>
                        GabrielC Blog</h1>
                </Link>

                <div className="hidden md:inline-flex items-center space-x-5">
                    <h3 className='cursor-pointer'>About</h3>
                    <h3 className='cursor-pointer'>Contact</h3>
                    <h3 className='text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer'>Follow</h3>
                </div>
            </div>

            <div className='flex items-center space-x-5 text-green-600'>
                <h3>Sign In</h3>
                <h3 className='border px-4 py-1 rounded-full border-green-600'>Get Started</h3>
            </div>
        </header>
    )
}

export default Header