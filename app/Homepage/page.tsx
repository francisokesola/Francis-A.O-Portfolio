import { Link } from "lucide-react"
import Image from "next/image"

export default function HeroPage() {
    return (
        <section id="home">
        <div 
         style={{
            backgroundImage: "url('/bg-image.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
           }}   
        >
           
           <div className="w-full pt-5 pb-10 flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-30 gap-8 md:gap-0">
             
             <div className="text-white text-center md:text-left w-full md:w-lg">
                <h2 className="font-semibold text-2xl md:text-4xl text-green-400">
                  Hi, I am Francis A.O
                </h2>
                <p className=" text-white text-balance">
                  I am a frontend developer based in Nigeria with hands-on experience building responsive, 
                  high-performance web applications. I care about the details: smooth interactions, 
                  maintainable code, and interfaces that just work.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="bg-green-800 text-white py-2 px-4 hover:bg-green-600 border-0 rounded-lg mt-2 cursor-pointer">
                    <Link href="#contact">Get In Touch</Link>
                  </button>
                </div>
            </div>

            <div>
                <Image 
                src="/Image.jpeg"
                alt="Hero-Image"
                width={350}
                height={300}
                loading="eager"
                className="rounded-2xl  md:w-85 hidden md:block md:h-120"
                />
            </div>
           </div>
        </div>
        </section>
    )
}