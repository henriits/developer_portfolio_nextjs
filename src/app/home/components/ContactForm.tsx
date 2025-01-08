import { useState, useEffect } from "react";

const ContactForm = () => {
    // this is needed to avoid hydration mismatch error
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Render nothing on the server
    }
    return (
        <section id="contact" className="py-16   px-6 ">
            <h2 className="text-3xl font-bold mb-6 text-center z-10">
                Contact <span className="text-[#13DF14]">Me</span>
            </h2>
            <form className="max-w-3xl mx-auto p-8  bg-neutral-900 ">
                <div className="mb-4">
                    <input
                        type="text"
                        id="name"
                        className="w-full p-3 border-2 border-neutral-600 rounded-md focus:border-[#13DF14] focus:ring-2 focus:ring-[#13DF14] transition-all"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 border-2 border-neutral-600 rounded-md focus:border-[#13DF14] focus:ring-2 focus:ring-[#13DF14] transition-all"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        id="message"
                        className="w-full p-3 border-2 border-neutral-600 rounded-md focus:border-[#13DF14] focus:ring-2 focus:ring-[#13DF14] transition-all"
                        placeholder="Your Message"
                        rows={5}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="border-2 bg-neutral-950 text-white py-3 px-8 rounded-lg text-xl font-bold transition duration-300 hover:text-[#13DF14] hover:scale-105"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
