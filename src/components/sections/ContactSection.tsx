import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";
import SendEmailForm from "../contact/SendEmailForm";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-16 px-6"
            data-testid="contact-section"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-evenly lg:items-start">
                {/* Left Side - Contact Info */}
                <ContactInfo />
                {/* Right Side - Contact Form */}
                <div
                    className="lg:w-[45%] mt-8 lg:mt-0"
                    data-testid="contact-form-container"
                >
                    <SendEmailForm />
                </div>
            </div>
        </section>
    );
};
export default ContactSection;
