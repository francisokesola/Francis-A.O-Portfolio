import Image from "next/image"
import { FaLinkedin, FaGithub, FaEnvelopeOpen, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

export default function AboutPage() {
    return (
        <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Column */}
                    <div className="w-full lg:w-5/12 relative">
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-4 translate-y-4 opacity-20 dark:opacity-40"></div>
                            <Image
                                alt="Francis A.O"
                                src="/Image.jpeg"
                                loading="eager"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover rounded-2xl shadow-xl z-0"
                            />
                        </div>

                        {/* Social Links Badge */}
                        <div className="absolute -bottom-6 left-12  md:left-1/2 md:-translate-x-1/2 lg:left-27 lg:translate-x-0 bg-white dark:bg-[#020617] rounded-xl shadow-lg border border-gray-100 dark:border-white/10 p-4 z-10 w-fit">
                            <ul className="flex flex-row gap-4 items-center justify-center">
                                <li>
                                    <Link href="https://www.linkedin.com/in/okesola-francis" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-600 transition-colors" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://github.com/francisokesola" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-2xl text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:francisokesola@gmail.com">
                                        <FaEnvelopeOpen className="text-2xl text-gray-400 hover:text-red-500 transition-colors" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://wa.me/2348167797350" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp className="text-2xl text-gray-400 hover:text-green-500 transition-colors" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4 border border-blue-100 dark:border-blue-800">
                            About Me
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Website Developer</span>
                        </h2>

                        <div className="text-gray-600 dark:text-gray-300 space-y-4 text-base md:text-lg leading-relaxed mb-8">
                            <p>
                                I&apos;m a frontend-focused fullstack developer who helps bring ideas to life by building fast, modern, and user-friendly websites using React, Next.js, TypeScript, and Tailwind CSS. I focus on creating clean designs and smooth experiences that not only look great but also work reliably across devices.
                            </p>
                            <p className="hidden md:block">
                                I&apos;ve worked on projects like ecommerce platforms, authentication systems, blogs, and landing pages, giving me a strong understanding of what it takes to build real, functional products from start to finish.
                            </p>
                            <p className="hidden md:block">
                                Whether you need a polished landing page, a full ecommerce site, or improvements to an existing product, I aim to deliver solutions that are efficient, scalable, and tailored to your needs.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                            <Link href="#portfolio" className="w-full sm:w-auto text-center px-8 py-3.5 bg-white dark:bg-[#020617] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full transition-all border border-gray-200 dark:border-gray-700 shadow-sm">
                                My Projects
                            </Link>
                            <a href="/Okesola_Francis_Ayomide-CV fullstack.pdf" download="Francis-Okesola-Cv" className="w-full sm:w-auto text-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}