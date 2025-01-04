const ContactForm = () => (
    <section
        id="contact"
        className="py-16 bg-gradient-to-r from-black via-blue-800 to-blue-300 text-white relative"
    >
        <h2 className="text-3xl font-bold mb-6 text-center z-10">Contact Me</h2>
        <form className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md z-10">
            <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded bg-gray-700 text-white"
                    placeholder="Your Name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded bg-gray-700 text-white"
                    placeholder="Your Email"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block font-bold mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    className="w-full p-2 border rounded bg-gray-700 text-white"
                    placeholder="Your Message"
                    rows={5}
                ></textarea>
            </div>
            <button
                type="submit"
                className="border-2 border-neonGreen text-white py-3 px-8 rounded-lg text-xl font-bold transition duration-300 relative overflow-hidden"
            >
                Send Message
            </button>
        </form>
    </section>
);

export default ContactForm;
