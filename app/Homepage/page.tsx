import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export default function HeroPage() {
    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-300">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4">
                <div className="w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6 border border-blue-100 dark:border-blue-800">
                            Available for new opportunities
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 tracking-tight">
                            Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Francis A.O</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
                            A frontend developer based in Nigeria building responsive,
                            high-performance web applications. I care about smooth interactions,
                            maintainable code, and interfaces that just work.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center md:justify-start">
                            <Link href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 flex justify-center items-center gap-2">
                                Let&apos;s Talk <FaArrowRight className="text-sm" />
                            </Link>
                            <Link href="#portfolio" className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-[#0f172a] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full transition-all border border-gray-200 dark:border-gray-700 flex justify-center items-center">
                                View My Work
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-3xl rotate-6 opacity-20 dark:opacity-40 animate-pulse"></div>
                            <Image
                                src="/Image.jpeg"
                                alt="Francis A.O - Frontend Developer"
                                loading="eager"
                                fill
                                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                                className="object-cover rounded-3xl shadow-2xl relative z-10 border border-gray-200 dark:border-white/10"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}