"use server";

import { ContactEmail } from "./contactEmail";
import { render } from "@react-email/components";
import transporter from "../emailTransporter";

async function SendEmailAction(senderName: string, senderEmail: string, message: string) {
	// This function is used to send the email
	// It can be called from the form submission handler

	const emailHtml = await render(<ContactEmail senderName={senderName} message={message} />);

	await transporter.sendMail({
		from: process.env.FROM_EMAIL,
		to: process.env.CONTACT_EMAILS?.split(",") || [],
		subject: `${senderName} üzenetet küldött`,
		replyTo: senderEmail,
		html: emailHtml,
	});
}

export default SendEmailAction;
