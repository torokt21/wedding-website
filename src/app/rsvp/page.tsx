"use client";

import SendRSVPEmailAction, { RSVPFormData } from "./sendRSVPEmailAction";

import Container from "../ui/container";
import { Cormorant } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

export default function RsvpPage() {
	const [formData, setFormData] = useState<RSVPFormData>({
		name: "",
		companions: [],
		email: "",
		canAttend: "",
		transportation: "",
		allergies: "",
		songRequests: "",
	});
	const [newCompanion, setNewCompanion] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			const next = {
				...prev,
				[name]: value,
			};

			// If the guest indicates they cannot attend, clear all non-required fields
			if (name === "canAttend" && value === "nem") {
				next.transportation = "";
				next.allergies = "";
				next.songRequests = "";
			}

			return next;
		});
	};

	const addCompanion = () => {
		if (newCompanion.trim() !== "") {
			setFormData((prev) => ({
				...prev,
				companions: [...prev.companions, newCompanion.trim()],
			}));
			setNewCompanion("");
		}
	};

	const removeCompanion = (index: number) => {
		setFormData((prev) => ({
			...prev,
			companions: prev.companions.filter((_, i) => i !== index),
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			await SendRSVPEmailAction(formData);

			setSubmitStatus("success");
			setFormData({
				name: "",
				companions: [],
				email: "",
				canAttend: "",
				transportation: "",
				allergies: "",
				songRequests: "",
			});
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
						Visszajelzés
					</h1>
					<p className="text-lg text-primary-800 max-w-2xl mx-auto">
						Kérjük, töltsd ki az alábbi űrlapot, hogy tudjuk, számíthatunk-e rád az
						esküvőnkön! Minden információ segít nekünk a tökéletes nap megszervezésében.
					</p>
				</div>

				{/* RSVP Form */}
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

						{/* Companions Section */}
						<label className="block text-sm font-medium text-primary-900 mb-2">
							Kísérők
						</label>
						<p className="text-sm text-primary-600 mb-3">
							Ha több ember nevében válaszolsz, kérjük add meg a nevüket!
						</p>

						{/* Companions List */}
						{formData.companions.length > 0 && (
							<div className="space-y-2 mb-4">
								{formData.companions.map((companion, index) => (
									<div
										key={index}
										className="flex items-center justify-between bg-primary-100 p-3 rounded-lg border border-primary-200">
										<span className="text-primary-900">{companion}</span>
										<button
											type="button"
											onClick={() => removeCompanion(index)}
											className="text-red-600 hover:text-red-800 font-medium text-sm">
											Törlés
										</button>
									</div>
								))}
							</div>
						)}

						{/* Add Companion */}
						<div className="flex gap-2 flex-wrap">
							<input
								type="text"
								value={newCompanion}
								onChange={(e) => setNewCompanion(e.target.value)}
								className="flex-1 px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-200 bg-primary-50 hover:bg-white focus:bg-white"
								placeholder="Kísérő neve..."
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										addCompanion();
									}
								}}
							/>
							<button
								type="button"
								onClick={addCompanion}
								className="px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition-colors duration-200 font-medium w-100 md:w-auto">
								Hozzáad
							</button>
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

						{/* Attendance Field */}
						<div>
							<label
								htmlFor="canAttend"
								className="block text-sm font-medium text-primary-900 mb-2">
								Részt tudsz venni az esküvőn? *
							</label>
							<select
								id="canAttend"
								name="canAttend"
								value={formData.canAttend}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-200 bg-primary-50 hover:bg-white focus:bg-white">
								<option value="">Válassz...</option>
								<option value="igen">Igen, ott leszek!</option>
								<option value="nem">Nem tudok ott lenni</option>
							</select>
						</div>

						{/* Transportation Field */}
						{formData.canAttend !== "nem" && (
							<div>
								<label
									htmlFor="transportation"
									className="block text-sm font-medium text-primary-900 mb-2">
									Hogyan tervezel eljutni a helyszínre?
								</label>
								<select
									id="transportation"
									name="transportation"
									value={formData.transportation}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-200 bg-primary-50 hover:bg-white focus:bg-white">
									<option value="">Válassz...</option>
									<option value="sajat-auto">Autóval/taxival érkezem</option>
									<option value="tomegkozlekedes">
										Tömegközlekedéssel érkezem
									</option>
								</select>
								<p className="text-sm text-primary-600 mt-2">
									💡 <strong>Fontos:</strong> Ha tömegközlekedéssel érkezel, akkor
									valaki a buszmegállótól autóval elvisz a helyszínre. További
									információkat majd e-mailben küldünk.
								</p>
							</div>
						)}

						{/* Allergies Field */}
						{formData.canAttend !== "nem" && (
							<div>
								<label
									htmlFor="allergies"
									className="block text-sm font-medium text-primary-900 mb-2">
									Allergiák vagy speciális étrend
								</label>
								<textarea
									id="allergies"
									name="allergies"
									value={formData.allergies}
									onChange={handleChange}
									rows={4}
									className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-200 bg-primary-50 hover:bg-white focus:bg-white resize-vertical"
									placeholder="Van allergiád vagy követsz valamilyen speciális étrendet? (pl. vegetáriánus, vegán, gluténmentes, stb.) Amennyiben egy kísérőnek van ilyen igénye, kérjük, azt is itt tüntesd fel."
								/>
							</div>
						)}

						{/* Song Requests Field */}
						{formData.canAttend !== "nem" && (
							<div>
								<label
									htmlFor="songRequests"
									className="block text-sm font-medium text-primary-900 mb-2">
									Zenei kívánságok
								</label>
								<textarea
									id="songRequests"
									name="songRequests"
									value={formData.songRequests}
									onChange={handleChange}
									rows={4}
									className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-200 bg-primary-50 hover:bg-white focus:bg-white resize-vertical"
									placeholder="Van olyan zene, amit szívesen hallgatnál az esküvőn? Írd ide a kedvenc számaídat vagy előadóidat!"
								/>
							</div>
						)}

						{/* Submit Button */}
						<div className="pt-4">
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full md:w-auto inline-block rounded-full bg-transparent text-primary-900 px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-800 hover:bg-primary-800 hover:text-background disabled:opacity-50 disabled:cursor-not-allowed font-medium">
								{isSubmitting ? "Küldés..." : "Visszajelzés küldése"}
							</button>
						</div>

						{/* Status Messages */}
						{submitStatus === "success" && (
							<div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
								Köszönjük a válaszodat!{" "}
								{formData.canAttend === "igen"
									? "Alig várjuk, hogy találkozzunk veled az esküvőn!"
									: "Sajnáljuk, hogy nem tudsz eljönni, de megértjük."}
							</div>
						)}

						{submitStatus === "error" && (
							<div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg text-red-800">
								Hiba történt az visszajelzés küldése során. Kérjük, próbáld újra
								később.
							</div>
						)}
					</form>
				</div>

				{/* Additional Information */}
				<div className="mt-12 text-center">
					<div className="p-6 bg-primary-100 rounded-xl border border-primary-200">
						<h3 className={`${cormorant.className} text-2xl text-primary-900 mb-2`}>
							Fontos információk
						</h3>
						<p className="text-primary-800 mb-2">
							Kérjük, hogy a visszajelzést <strong>minél hamarabb</strong> küldd el,
							de legkésőbb <strong>30 nappal az esküvő előtt</strong>!
						</p>
						<p className="text-primary-800">
							Ha bármilyen kérdésed van, ne habozz kapcsolatba lépni velünk a{" "}
							<Link href="/kapcsolat">kapcsolat oldalon</Link> keresztül!
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
}
