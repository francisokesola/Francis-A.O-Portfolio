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
    "w-full bg-[#0f0f11] border border-[#2a2a30] rounded-lg px-4 py-4 text-[16px] text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition";

  const labelClass = "block text-xs text-gray-400 font-medium mb-1.5";

    return (
        <section id="contact">
            <div>
                <div className="md:h-[300] h-[350]  bg-green-900 text-center text-white pt-[50] px-2   md:pt-[75]">
                    <h1 className="md:text-4xl text-3xl font-extrabold ">Do you have a Project Idea?</h1>
                    <h2 className="md:text-3xl text-2xl font-bold">Let&apos;s discuss your Project!</h2>
                    <p>
                        I&apos;m always open to discussing new projects and creative ideas. <br /> Let&apos;s connect and build something amazing together.
                    </p>
                    <button className="bg-green-700 hover:bg-green-400 hover:shadow-black mt-2 py-2 px-3 rounded-lg"><Link href="https://linkpane.com/francisokesola">
                    Let&apos;s work together
                    </Link></button>

                </div>
                <div className="md:mx-20 mx-10 my-10 flex flex-col-reverse md:flex md:flex-row items-center md:justify-between">
                    <div className="">
                        <h2 className="font-bold text-2xl mb-3 text-center md:text-left">Let&apos;s discuss your idea</h2>
                        <p className="text-center md:text-left">I&apos;m available for freelance work. Drop me a line if <br className="hidden md:block" /> you have a project you think I&apos;d be a good fit for.</p>

                        <div className="">
                            <div className="flex flex-row items-center  gap-7 my-10">
                                <FaMap className="border-green-400 text-green-400 text-3xl"/>
                                <p>Address: <br /> FCT, Nigeria</p>
                            </div>
                             <div className="flex flex-row items-center gap-7 mb-10">
                                <FaEnvelope className="border-green-400 text-green-400 text-3xl"/>
                                <p>Email: <br /> francisokesola@gmail.com</p>
                            </div>
                             <div className="flex flex-row items-center gap-7">
                                <FaPhone className="border-green-400 text-green-400 text-3xl"/>
                                <p>Call Us: <br /> +2349168094827</p>
                            </div>
                        </div>

                       
                    </div>
                    <div>
                        <div className="min-h-screen flex items-center justify-center bg-[#0f0f11] text-white md:px-4 py-10">
                            <div className=" bg-[#18181c] border border-[#2a2a30] rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 sm:overflow-hidden ">

                            
                                <div className="mb-7">
                                <h1 className="text-xl lg:text-2xl font-semibold">Contact Us</h1>
                                <p className="text-sm text-gray-400 mt-1">
                                    Fill in the form below and we will get back to you shortly.
                                </p>
                                </div>

                    {submitted ? (
                    <div className="text-center py-10 space-y-3">
                        <div className="text-4xl">✅</div>
                        <p className="text-lg font-semibold">Message Sent!</p>
                        <p className="text-sm text-gray-400">
                        Thanks for reaching out. We will get back to you shortly.
                        </p>
                        <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition"
                        >
                        Send another message
                        </button>
                    </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    
                        <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 min-[480px]:gap-4">
                        <div>
                            <label className={labelClass}>First Name</label>
                            <input
                            type="text"
                            name="firstName"
                            placeholder="Jane"
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

                        <div>
                        <label className={labelClass}>Email Address</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="jane@example.com"
                            required
                            className={inputClass}
                        />
                        </div>

                        <div>
                        <label className={labelClass}>Phone Number</label>
                        <input
                            name="phoneNumber"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            required
                            className={inputClass}
                        />
                        </div>

                        <div>
                        <label className={labelClass}>Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            placeholder="Enter your comments..."
                            className={`${inputClass} resize-none`}
                        />
                        </div>

                        <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 sm:py-3 rounded-lg bg-green-500 hover:bg-green-300 active:bg-green-600 transition disabled:opacity-50 flex justify-center items-center gap-2 text-sm font-medium"
                        >
                        {isSubmitting ? (
                            <>
                            
                            Sending...
                            </>
                        ) : (
                            "Submit"
                        )}
                        </button>

                    </form>
                    )} </div>
                                </div>
                            </div>
                        </div>

            </div>
        </section>
    );
}