"use client"
import Link from "next/link"
export default function Footer() {
    return(
        <section>
            <div className="bg-green-800 h-[200] block md:flex md:flex-row items-center justify-between px-10 py-3 ">
                 <div className="flex flex-row gap-2 items-center text-center md:text-left ">
                    <h1 className="text-white text-3xl font-bold bg-green-600 rounded-4xl px-1 py-2 ml-10 md:ml-0">FO</h1>
                    <h1 className="p-2 font-bold text-white text-2xl italic ">Francis A.O</h1>
                </div>

                <div className="justify-center ">
                    <div className="md:flex md:flex-row md:gap-4 items-center "> 
                    <ul className="md:flex md:flex-row block gap-4 items-center text-center  ">
                        <li className="  font-medium  hover:text-green-400">
                            <Link href="#home">Home</Link>
                        </li>
                        <li className="  font-medium hover:text-green-400 "> 
                            <Link href="#about">About Us</Link> </li>
                        <li className=" font-medium hover:text-green-400  ">
                            <Link href="#portfolio">Portfolio</Link>
                        </li>
                        
                    </ul> 
                     <button className=" text-white bg-green-600 hover:bg-green-400  rounded-lg py-2 px-3 md:block hidden ">
                        <Link href="#contact">Contact Us</Link>
                    </button>
                    
                    </div>
                </div>

                <div>
                    <p className="text-gray-400 text-sm text-center">
                     © {new Date().getFullYear()} Francis A.O All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}