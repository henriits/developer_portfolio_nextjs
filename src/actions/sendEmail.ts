"use server";

import ContactFormEmail from "@/components/email/ContactFormEmail";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.NEXT_PUBLIC_EMAIL as string,
            subject: "New Message from Portfolio",
            replyTo: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
        return { success: true };
    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error.message };
        } else {
            return { success: false, error: "An unknown error occurred" };
        }
    }
}
