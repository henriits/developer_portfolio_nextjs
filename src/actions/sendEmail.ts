"use server";

import ContactFormEmail from "@/components/email/ContactFormEmail";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: process.env.NEXT_PUBLIC_EMAIL as string,
        subject: "New Message from Portfolio",
        replyTo: senderEmail,
        react: React.createElement(ContactFormEmail, {
            message: message,
            senderEmail: senderEmail,
        }),
        // this is the same as <ContactFormEmail message={message} senderEmail={senderEmail} />
        // but this way we dont have to turn sendEmail.ts into a tsx file
    });
}
