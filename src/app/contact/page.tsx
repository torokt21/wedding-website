"use client";

import Container from "../ui/container";
import { Cormorant } from "next/font/google";
import SendEmailAction from "./sendEmailAction";
import { useState } from "react";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			// Here you would typically send the form data to your backend
			// For now, we'll simulate a successful submission
			await new Promise((resolve) => setTimeout(resolve, 1000));

			await SendEmailAction(formData.name, formData.email, formData.message);

			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Form submission error:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Container className="py-16">
			<div className="max-w-4xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h1
						className={`${cormorant.className} text-4xl md:text-5xl lg:text-6xl text-primary-900 mb-4`}>
						Kapcsolat
					</h1>
					<p className="text-lg text-primary-800 max-w-2xl mx-auto">
						Van kérdésed az esküvővel kapcsolatban? Írj nekünk, és igyekszünk mielőbb
						válaszolni!
					</p>
				</div>

				{/* Contact Form */}
				<div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-primary-200">
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Name Field */}
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-primary-900 mb-2">
								Név *
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-200 bg-primary-50 hover:bg-white focus:bg-white"
								placeholder="Add meg a neved..."
							/>
						</div>

						{/* Email Field */}
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-primary-900 mb-2">
								E-mail cím *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-200 bg-primary-50 hover:bg-white focus:bg-white"
								placeholder="pelda@email.hu"
							/>
						</div>

						{/* Message Field */}
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-primary-900 mb-2">
								Üzenet *
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows={6}
								className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-200 bg-primary-50 hover:bg-white focus:bg-white resize-vertical"
								placeholder="Írd ide az üzeneted..."
							/>
						</div>

						{/* Submit Button */}
						<div className="pt-4">
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full md:w-auto inline-block rounded-full bg-transparent text-primary-900 px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-800 hover:bg-primary-800 hover:text-background disabled:opacity-50 disabled:cursor-not-allowed font-medium">
								{isSubmitting ? "Küldés..." : "Üzenet küldése"}
							</button>
						</div>

						{/* Status Messages */}
						{submitStatus === "success" && (
							<div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
								Köszönjük az üzeneted! Hamarosan válaszolunk.
							</div>
						)}

						{submitStatus === "error" && (
							<div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg text-red-800">
								Hiba történt az üzenet küldése során. Kérjük, próbáld újra később.
							</div>
						)}
					</form>
				</div>

				{/* Additional Contact Info */}
				<div className="mt-12 text-center">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
						<div className="p-6 bg-primary-100 rounded-xl border border-primary-200">
							<h3 className={`${cormorant.className} text-2xl text-primary-900 mb-2`}>
								Enikő
							</h3>
							<p className="text-primary-800">Menyasszony</p>
							<p className="text-sm text-primary-700 mt-2">
								Minden szervezéssel kapcsolatos kérdés
							</p>
						</div>
						<div className="p-6 bg-primary-100 rounded-xl border border-primary-200">
							<h3 className={`${cormorant.className} text-2xl text-primary-900 mb-2`}>
								Tamás
							</h3>
							<p className="text-primary-800">Vőlegény</p>
							<p className="text-sm text-primary-700 mt-2">
								Technikai és egyéb kérdések
							</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
