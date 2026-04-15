import Image from "next/image"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    id: 1,
    category: "E-commerce website",
    title: "Desert Delights Shop",
    description: "A landing page built for a dessert store, optimized for responsiveness and clean design.",
    image: "/image.png",
    link: "https://delightdeserts.netlify.app/"
  },
  {
    id: 2,
    category: "E-commerce website",
    title: "Classic Watches Store",
    description: "A website for a Classic Watch store integrated with a payment system using Stripe, carts and checkout features.",
    image: "/cwatches.png",
    link: "https://classic-watches.vercel.app/"
  },
  {
    id: 3,
    category: "Landing Page",
    title: "Dazzle Fashion Hub",
    description: "A well designed website for a fashion brand that allows easy understanding and easy access to the fashion brand.",
    image: "/dazzle.png",
    link: "https://dazzlefashion.netlify.app/"
  },
  {
    id: 4,
    category: "E-commerce website",
    title: "Trendlama Store",
    description: "A responsive fashion store e-commerce website built for easy understanding by users and premium functionality.",
    image: "/Trendlama.png",
    link: "https://commerce-nu-fawn.vercel.app/"
  },
  {
    id: 5,
    category: "Authentication Web App",
    title: "MarsTech Auth Demo",
    description: "An authentication website built using a serverless postgres database and Better-Auth for authentication with social links as well as saving users details.",
    image: "/auth.png",
    link: "https://authentication-with-neon-serverless.vercel.app/"
  }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 md:py-32 bg-white dark:bg-[#020617] border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4 border border-blue-100 dark:border-blue-800">
                        Portfolio
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Here are some of the selected projects that showcase my passion for front-end development and creating intuitive user experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-gray-50 dark:bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col h-full">
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <Image 
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">{project.category}</p>
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                                
                                <div className="mt-auto">
                                    <Link 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        View Project <FaExternalLinkAlt className="text-xs" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}