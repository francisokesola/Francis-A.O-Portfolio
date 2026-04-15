"use client"

import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa"
import { useEffect, useRef } from "react";
import React from "react";

export default function Navbar () {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    useEffect(() => {
        const handleOutside = (e: MouseEvent | TouchEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMobileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutside);
        document.addEventListener('touchstart', handleOutside);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('touchstart', handleOutside);
        };
    }, []);
    return (
            <>
            <div ref={navRef}>
            <nav className="sticky top-0 z-50 flex flex-row items-center justify-between h-[72px] bg-white/80 dark:bg-[#020617]/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    <div className="flex flex-row gap-3 items-center">
                    <div className="text-white text-xl font-bold bg-blue-600 rounded-xl px-2 py-1 shadow-md shadow-blue-500/20 flex items-center justify-center">FO</div>
                    <Link href="#home" className='font-bold text-xl text-gray-900 dark:text-white tracking-tight hover:opacity-80 transition-opacity' >
                            Francis A.O
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8"> 
                    <ul className="flex flex-row gap-8 items-center  ">
                        <li className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Link href="#home">Home</Link>
                        </li>
                        <li className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"> 
                            <Link href="#about">About Us</Link> </li>
                        <li className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Link href="#portfolio">Portfolio</Link>
                        </li>
                        
                    </ul> 
                    <button className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 rounded-full py-2.5 px-6 transition-all hover:scale-105 active:scale-95">
                        <Link href="#contact">Contact Us</Link>
                    </button>
                </div>

                 <div className='flex items-center space-x-4 md:hidden'>
                            
                            <button onClick={() => setMobileOpen((prev) => !prev)}  className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                                {mobileOpen ? <FaTimes className="h-5 w-5 text-gray-900 dark:text-white" /> : <FaBars className="h-5 w-5 text-gray-900 dark:text-white" />}
                            </button>
                </div>
                </div>

                

                {mobileOpen && (
                        <div className="md:hidden absolute top-[72px] left-0 w-full bg-white dark:bg-[#020617] border-b border-gray-200 dark:border-white/10 shadow-lg text-gray-900 dark:text-white">
                            <ul className="flex flex-col p-4">
                                <li><Link href="#home" className="block py-3 px-4 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors font-medium" onClick={() => setMobileOpen(false)}>Home</Link></li>
                                <li><Link href="#about" className="block py-3 px-4 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors font-medium" onClick={() => setMobileOpen(false)}>About</Link></li>
                                <li><Link href="#portfolio" className="block py-3 px-4 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors font-medium" onClick={() => setMobileOpen(false)}>Portfolio</Link></li>
                                <li><Link href="#contact" className="block py-3 px-4 mt-2 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors" onClick={() => setMobileOpen(false)}>Contact Us</Link></li>
                            </ul>
                        </div>
                    )}
                    </nav>

            </div>    
            </>    
            
    );

}