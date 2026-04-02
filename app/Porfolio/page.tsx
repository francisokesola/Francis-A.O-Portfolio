import Image from "next/image"
import Link from "next/link"
import { FaArrowCircleDown } from "react-icons/fa"

export default function Portfolio (){
    return (
        <section id="portfolio" className="px-10  border-t-amber-50 border-t-2 py-5">

            <h1 className="md:text-5xl md:font-bold font-semibold text-2xl text-center my-5">My Portfolio</h1>
            <p className="text-center md:text-center mb-5 ">These are some of the Projects I have <br /> featured in.</p>
        <div className="grid md:grid-cols-3 grid-cols-1 md:px-20 gap-4 items-center ">
            <div className=" w-[300] h-[280] md:h-[400] rounded-lg bg-white  ">
                 <Image 
                                src="/image.png"
                                alt="Desert-delights"
                                width= {350}
                                height={300}
                                loading="eager"
                                className="rounded-xl md:w-75 w-75 h-25 md:h-37.5 "
                                />

                 <div className="text-black px-2 py-2 text-center">
                    <p className="text-gray-500 text-sm">E-commerce website</p>
                    <h2 className="font-bold text-xl">Desert Delights Shop</h2>
                    <p>A landing page built for a desert store, optimized for responsiveness and clean design</p>
                    <button className="bg-green-500 py-2 px-3 border-0 rounded-lg mt-2 ">
                        <Link href="https://delightdeserts.netlify.app/" className="flex flex-row items-center gap-3">View <FaArrowCircleDown className="text-white"/></Link>
                    </button>
                 </div>
            </div>
            <div className=" md:h-[400] w-[300] h-[280]  rounded-lg bg-white ">
                 <Image 
                                src="/cwatches.png"
                                alt="Classic-watches"
                                width= {350}
                                height={300}
                                className="rounded-xl  md:w-75 w-75 h-25 md:h-37.5 "
                                />

                 <div className="text-black px-2 py-2 text-center">
                    <p className="text-gray-500 text-sm">E-commerce website</p>
                    <h2 className="font-bold text-xl">Classic Watches Store</h2>
                    <p>A website for a classic watches store integrated with a payment system using Stripe, carts and checkout features</p>
                    <button className="bg-green-500 py-2 px-3 border-0 rounded-lg mt-2">
                        <Link href="https://classic-watches.vercel.app/" className="flex flex-row items-center gap-3" >View <FaArrowCircleDown className="text-white"/></Link>
                    </button>
                 </div>
            </div>
            <div className=" md:h-[400] w-[300] h-[280] rounded-lg bg-white  ">
                 <Image 
                                src="/dazzle.png"
                                alt="dazzle-fashion"
                                width= {350}
                                height={300}
                                className="rounded-xl  md:w-75 w-75 h-25 md:h-37.5 "
                                />

                 <div className="text-black px-2 py-2 text-center">
                    <p className="text-gray-500 text-sm">A landing-page website</p>
                    <h2 className="font-bold text-xl">Dazzle Fashion Hub</h2>
                    <p>A well designed website for a fashion brand that allows easy understanding and easy acces to the fashion brand</p>
                    <button className="bg-green-500 py-2 px-3 border-0 rounded-lg mt-2">
                        <Link href="https://dazzlefashion.netlify.app/" className="flex flex-row items-center gap-3">View <FaArrowCircleDown className="text-white"/></Link>
                    </button>
                 </div>
            </div>
            <div className="md: md:h-[400] w-[300] h-[280]  rounded-lg bg-white ">
                 <Image 
                                src="/Trendlama.png"
                                alt="Trendlama"
                                width= {350}
                                height={300}
                                className="rounded-xl  md:w-75 w-75 h-25 md:h-37.5 "
                                />

                 <div className="text-black px-2 py-2 text-center">
                    <p className="text-gray-500 text-sm">E-commerce website</p>
                    <h2 className="font-bold text-xl">Trendlama Store</h2>
                    <p>A responsive fashion store ecommerce website built for easy understandig by users and premium functionality</p>
                    <button className="bg-green-500 py-2 px-3 border-0 rounded-lg mt-2">
                        <Link href="https://commerce-nu-fawn.vercel.app/" className="flex flex-row items-center gap-3">View <FaArrowCircleDown className="text-white"/></Link>
                    </button>
                 </div>
            </div>
            <div className=" md:h-[400] w-[300] h-[350]  rounded-lg bg-white ">
                 <Image 
                                src="/auth.png"
                                alt="Authentication"
                                width= {350}
                                height={300}
                                className="rounded-xl  md:w-75 w-75 h-25 md:h-37.5 "
                                />

                 <div className="text-black px-2 py-2 text-center">
                    <p className="text-gray-500 text-sm">Authentication website</p>
                    <h2 className="font-bold text-xl">MarsTech Auth Demo</h2>
                    <p>An authentication website build using a serverless postgres database and Better-Auth for authentication with social links as well as saving users details in database for easy sign in</p>
                    <button className="bg-green-500 py-2 px-3 border-0 rounded-lg mt-2">
                        <Link href="https://authentication-with-neon-serverless.vercel.app/" className="flex flex-row items-center gap-3">View <FaArrowCircleDown className="text-white"/></Link>
                    </button>
                 </div>
            </div>
        </div>
        </section>
    )
}