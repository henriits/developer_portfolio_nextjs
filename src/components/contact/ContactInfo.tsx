import { fontClasses } from "@/utils/fonts";
import { HiMail, HiLocationMarker } from "react-icons/hi";
const ContactInfo = () => {
    return (
        <div
            className="lg:w-[30%] flex flex-col items-center lg:items-start lg:pt-6"
            data-testid="contact-info"
        >
            <h2
                className={`text-5xl lg:mt-0 ${fontClasses.main}`}
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
                        <h3 className="text-xl font-semibold">Location</h3>
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
    );
};
export default ContactInfo;
