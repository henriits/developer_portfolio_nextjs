"use client";
import { sendEmail } from "@/actions/sendEmail";
import CustomButton from "../ui/CustomButton";
import { useState, useEffect } from "react";

const SendEmailForm = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage("");
        setError("");

        const formData = new FormData(event.target as HTMLFormElement);
        const response = await sendEmail(formData);

        if (response.success) {
            setMessage("Email has been sent successfully!");
            (event.target as HTMLFormElement).reset();
        } else {
            setError(`There was an error sending the email: ${response.error}`);
        }

        setTimeout(() => {
            setMessage("");
            setError("");
        }, 3000);
    };
    return (
        <>
            {isClient ? (
                <form
                    className="bg-neutral-900 rounded-lg p-8 w-full mx-auto"
                    onSubmit={handleSubmit}
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

                    <div className="flex items-center space-x-4">
                        <CustomButton
                            text="Send Message"
                            type="submit"
                            data-testid="submit-button"
                        />
                        {message && <p className="text-green-500">{message}</p>}
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </form>
            ) : null}
        </>
    );
};
export default SendEmailForm;
