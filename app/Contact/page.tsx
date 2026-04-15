"use client";

import { useState } from "react";
import Link from "next/link"
import { FaMap, FaEnvelope, FaPhone } from "react-icons/fa6"

export default function Contact(){
      const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        "https://api.linkpane.com/v2/mailer/42770276/form/francis-contact-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full bg-white dark:bg-[#020617] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-[16px] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors";

  const labelClass = "block text-sm text-gray-700 dark:text-gray-300 font-medium mb-1.5";

    return (
        <section id="contact" className="bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
            {/* CTA Banner section */}
            <div className="relative py-20 px-6 md:py-24 bg-blue-600 dark:bg-blue-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700/50 to-indigo-600/50 mix-blend-multiply"></div>
                
                <div className="container mx-auto max-w-4xl relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Do you have a Project Idea?</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-100 mb-6">Let&apos;s discuss your Project!</h2>
                    <p className="text-blue-50 max-w-2xl text-lg mb-8 leading-relaxed">
                        I&apos;m always open to discussing new projects and creative ideas. Let&apos;s connect and build something amazing together.
                    </p>
                    <Link href="https://linkpane.com/francisokesola" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 hover:bg-gray-50 font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 inline-block">
                        Let&apos;s work together
                    </Link>
                </div>
            </div>

            {/* Main Contact Section */}
            <div className="container mx-auto px-6 py-20 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column: Info */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6 border border-blue-100 dark:border-blue-800 w-max">
                            Get in touch
                        </div>
                        <h2 className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">Let&apos;s discuss your idea</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 leading-relaxed">
                            I&apos;m available for freelance work. Drop me a line if you have a project you think I&apos;d be a good fit for.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <FaMap className="text-2xl"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                                    <p className="text-gray-600 dark:text-gray-400">FCT, Nigeria</p>
                                </div>
                            </div>
                            
                             <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <FaEnvelope className="text-2xl"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                                    <a href="mailto:francisokesola@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">francisokesola@gmail.com</a>
                                </div>
                            </div>
                            
                             <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <FaPhone className="text-2xl"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
                                    <a href="tel:+2349168094827" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+234 916 809 4827</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-white dark:bg-[#020617] border border-gray-200 dark:border-white/10 rounded-3xl shadow-xl shadow-blue-500/5 p-8 md:p-10">
                            
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send a Message</h2>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    Fill in the form below and I will get back to you shortly.
                                </p>
                            </div>

                            {submitted ? (
                                <div className="text-center py-16 space-y-4">
                                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <div className="text-4xl text-green-500">✅</div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                                    <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                                        Thanks for reaching out. I have received your message and will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 space-y-0 text-left">
                                        <div>
                                            <label className={labelClass}>First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="John"
                                                required
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Doe"
                                                required
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    <div className="text-left">
                                        <label className={labelClass}>Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="text-left">
                                        <label className={labelClass}>Phone Number</label>
                                        <input
                                            name="phoneNumber"
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            required
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="text-left">
                                        <label className={labelClass}>Message</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            required
                                            placeholder="Tell me about your project..."
                                            className={`${inputClass} resize-none`}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 flex justify-center items-center"
                                    >
                                        {isSubmitting ? "Sending Message..." : "Send Message"}
                                    </button>
                                </form>
                            )} 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}