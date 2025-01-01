const ContactForm = () => (
    <section id="contact" className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <form className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded"
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
                    className="w-full p-2 border rounded"
                    placeholder="Your Email"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block font-bold mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    className="w-full p-2 border rounded"
                    placeholder="Your Message"
                    rows={5}
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-gray-700 text-white p-3 rounded-lg w-full"
            >
                Send Message
            </button>
        </form>
    </section>
);

export default ContactForm;
