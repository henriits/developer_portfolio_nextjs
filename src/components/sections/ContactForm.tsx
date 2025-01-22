import { sendEmail } from "@/actions/sendEmail";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import CustomButton from "../ui/CustomButton";

const ContactForm = () => {
    return (
        <section
            id="contact"
            className="py-16 px-6"
            data-testid="contact-section"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-evenly lg:items-start">
                {/* Left Side - Contact Info */}
                <div
                    className="lg:w-[30%] flex flex-col items-center lg:items-start lg:pt-6"
                    data-testid="contact-info"
                >
                    <h2
                        className="main-font text-5xl font-bold lg:mt-0"
                        data-testid="contact-title"
                    >
                        Contact <span className="text-[#13DF14]">Me</span>
                    </h2>

                    {/* Contact Details */}
                    <div className="space-y-6 mt-8 w-full max-w-md mx-auto lg:mx-0">
                        <div
                            className="flex items-center gap-4"
                            data-testid="email-container"
                        >
                            <HiMail className="text-2xl text-[#13DF14]" />
                            <div>
                                <h3 className="text-xl font-semibold">Mail</h3>
                                <p className="text-gray-400">
                                    {process.env.NEXT_PUBLIC_EMAIL}
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex items-center gap-4"
                            data-testid="location-container"
                        >
                            <HiLocationMarker className="text-2xl text-[#13DF14]" />
                            <div>
                                <h3 className="text-xl font-semibold">
                                    Location
                                </h3>
                                <p className="text-gray-400">
                                    {process.env.NEXT_PUBLIC_LOCATION}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div
                        className="flex gap-6 mt-8 justify-center lg:justify-start"
                        data-testid="social-links"
                    >
                        <a
                            href={process.env.NEXT_PUBLIC_GITHUB_URL || "/"}
                            className="text-gray-400 hover:text-[#13DF14] hover:scale-110 transition-all"
                        >
                            <i className="ci ci-github-light ci-2x"></i>
                        </a>
                        <a
                            href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "/"}
                            className="text-gray-400 hover:text-[#13DF14] hover:scale-110 transition-all"
                        >
                            <i className="ci ci-linkedin ci-2x"></i>
                        </a>
                        <a
                            href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "/"}
                            className="text-gray-400 hover:text-[#13DF14] hover:scale-110 transition-all"
                        >
                            <i className="ci ci-instagram ci-2x"></i>
                        </a>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div
                    className="lg:w-[45%] mt-8 lg:mt-0"
                    data-testid="contact-form-container"
                >
                    <form
                        className="bg-neutral-900 rounded-lg p-8 w-full mx-auto"
                        action={sendEmail}
                        data-testid="contact-form"
                    >
                        <div className="mb-4 text-black">
                            <input
                                data-testid="email-input"
                                name="senderEmail"
                                type="email"
                                className="w-full p-3 border-2 rounded-md  focus:border-[#13DF14] focus:ring-2 focus:ring-[#13DF14] transition-all"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-4 text-black">
                            <textarea
                                data-testid="message-input"
                                name="message"
                                className="w-full p-3 border-2 rounded-md focus:border-[#13DF14] focus:ring-2 focus:ring-[#13DF14] transition-all"
                                placeholder="Your Message"
                                rows={5}
                                required
                            ></textarea>
                        </div>

                        <CustomButton
                            text="Send Message"
                            type="submit"
                            data-testid="submit-button"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
