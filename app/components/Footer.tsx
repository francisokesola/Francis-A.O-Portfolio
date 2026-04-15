"use client"
import Link from "next/link"

export default function Footer() {
    return(
        <footer className="bg-white dark:bg-[#020617] border-t border-gray-200 dark:border-white/10">
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex flex-row gap-3 items-center">
                    <div className="text-white text-xl font-bold bg-blue-600 rounded-xl px-2 py-1 shadow-md shadow-blue-500/20 flex items-center justify-center">FO</div>
                    <span className="font-bold text-gray-900 dark:text-white text-xl tracking-tight">Francis A.O</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6"> 
                    <ul className="flex flex-wrap justify-center gap-6">
                        <li>
                            <Link href="#home" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
                        </li>
                        <li> 
                            <Link href="#about" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link> 
                        </li>
                        <li>
                            <Link href="#portfolio" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Portfolio</Link>
                        </li>
                    </ul> 
                    <button className="text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full py-2 px-6 transition-all hidden md:block">
                        <Link href="#contact">Contact Us</Link>
                    </button>
                </div>

                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Francis A.O. All rights reserved.
                </div>
            </div>
        </footer>
    )
}