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
            <nav className=" sticky shadow-black flex top-0 z-50 flex-row items-center justify-between bg-green-800 h-18">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    <div className="flex flex-row gap-2 items-center">
                    <h1 className="text-white text-3xl font-bold bg-green-600 rounded-4xl px-1 py-2">FO</h1>
                    <Link href="#home" className='font-bold text-2xl text-white' >
                            Francis A.O
                    </Link>
                </div>
                <div className="hidden md:flex space-x-6  gap-4"> 
                    <ul className="flex flex-row gap-4 items-center  ">
                        <li className=" font-medium  hover:text-green-400">
                            <Link href="#home">Home</Link>
                        </li>
                        <li className="  font-medium hover:text-green-400 "> 
                            <Link href="#about">About Us</Link> </li>
                        <li className=" font-medium hover:text-green-400  ">
                            <Link href="#portfolio">Portfolio</Link>
                        </li>
                        
                    </ul> 
                    <button className=" text-white bg-green-600 hover:bg-green-400  rounded-lg py-2 px-3">
                        <Link href="#contact">Contact Us</Link>
                    </button>
                </div>

                 <div className='flex items-center space-x-4 md:hidden'>
                            
                            <button onClick={() => setMobileOpen((prev) => !prev)}  className="md:hidden">
                                {mobileOpen ? <FaTimes className="h-6 w-6 text-white" /> : <FaBars className="h-6 w-6 text-white" />}
                            </button>
                </div>
                </div>

                

                {mobileOpen && (
                        <div className="md:hidden bg-white text-black shadow-md mt-45 ">
                            <ul className="flex flex-col space-y-2 p-4 ">
                                <li><Link href="#home" className="block hover:text-green-600" onClick={() => setMobileOpen(false)}>Home</Link></li>
                                <li><Link href="#about" className="block hover:text-green-600" onClick={() => setMobileOpen(false)}>About</Link></li>
                                <li><Link href="#portfolio" className="block hover:text-green-600" onClick={() => setMobileOpen(false)}>Portfolio</Link></li>
                            </ul>
                        </div>
                    )}
                    </nav>

            </div>    
            </>    
            
    );

}