"use server";

import { RSVPEmail } from "./rsvpEmail";
import { render } from "@react-email/components";
import transporter from "../emailTransporter";

export interface RSVPFormData {
	name: string;
	companions: string[];
	email: string;
	canAttend: string;
	transportation: string;
	allergies: string;
	songRequests: string;
}

async function SendRSVPEmailAction(formData: RSVPFormData) {
	// This function is used to send the RSVP email
	// It can be called from the form submission handler

	const emailHtml = await render(
		<RSVPEmail 
			name={formData.name}
			companions={formData.companions}
			email={formData.email}
			canAttend={formData.canAttend}
			transportation={formData.transportation}
			allergies={formData.allergies}
			songRequests={formData.songRequests}
		/>
	);	await transporter.sendMail({
		from: process.env.FROM_EMAIL,
		to: process.env.CONTACT_EMAILS?.split(",") || [],
		subject: `RSVP - ${formData.name} ${formData.canAttend === "igen" ? "részt vesz" : "nem vesz részt"}`,
		replyTo: formData.email,
		html: emailHtml,
	});
}

export default SendRSVPEmailAction;
