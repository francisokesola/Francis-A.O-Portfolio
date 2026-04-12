import Image from "next/image"
import { FaLinkedin, FaGithub, FaEnvelopeOpen, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"


export default function AboutPage() {
    return (
        <section id="about" >
            <div className=" md:mx-30 mx-10 md:py-20 py-10 flex flex-row justify-between ">
            <div className="">
                <Image 
                    alt="Image"
                    src="/Image.jpeg" 
                    width={350}
                    height={450}
                    loading="eager"
                    className="rounded-2xl z-0 absolute w-75 h-87.5 md:w-87.5 md:h-112.5"
                    />

                <div className="bg-black  w-[180] rounded-xl z-10 absolute mt-80 md:mt-105 md:ml-20 ml-15  ">
                    <ul className="flex flex-row gap-4 items-center justify-center py-6 px-2">
                        <li>
                           <Link href="https://www.linkedin.com/in/okesola-francis"><FaLinkedin className="text-green-600 hover:text-green-400 transition-colors"/></Link> 
                        </li>
                        <li>
                            <Link href="https://github.com/francisokesola"><FaGithub className="text-green-600 hover:text-green-400 transition-colors"/></Link>
                        </li>
                        <li>
                            <Link href="mailto:francisokesola@gmail.com"><FaEnvelopeOpen className="text-green-600 hover:text-green-400 transition-colors"/></Link>
                        </li>
                        <li>
                            <Link href="wa.me/2348167797350"><FaWhatsapp className="text-green-600 hover:text-green-400 transition-colors"/></Link>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="w-2xl md:w-xl mt-110 md:mt-10 md:text-left text-center items-center align-center  ">
                <h1 className="text-green-700 font-bold text2xl md:text-4xl">I am a professional Website Developer</h1>
                <p className="text-balance md:text-lg text-sm">I&apos;m a frontend developer who helps bring ideas to life by building fast, modern, and user-friendly websites using React, Next.js, TypeScript, and Tailwind CSS. I focus on creating clean designs and smooth experiences that not only look great but also work reliably across devices.</p>
                <p className="text-balance pt-2 md:block hidden">I&apos;ve worked on projects like ecommerce platforms, authentication systems, blogs, and landing pages, giving me a strong understanding of what it takes to build real, functional products from start to finish.</p>
                <p className="text-balance pt-2 md:block hidden">Whether you need a polished landing page, a full ecommerce site, or improvements to an existing product, I aim to deliver solutions that are efficient, scalable, and tailored to your needs.</p>
                
                <div className=" flex flex-row gap-3 mt-3 justify-center md:justify-start">
                    <button className="bg-white rounded-lg text-black md:text-xl text-sm py-2 px-3 border-2 hover:scale-110"><Link href="#portfolio">My Projects</Link></button>
                    <a href="/Okesola_Francis_Ayomide-CV fullstack.pdf" download="Francis-Okesola-Cv">
                        <button className="bg-green-400 text-white py-2 px-3 rounded-lg hover:scale-110 md:text-xl text-sm hover:bg-green-300">Download Cv</button>
                    </a>
                </div>
            </div>
        </div>
        </section>
    )
}