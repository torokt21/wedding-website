import {
	Body,
	Container,
	Head,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";

interface RSVPEmailProps {
	name?: string;
	companions?: string[];
	email?: string;
	canAttend?: string;
	transportation?: string;
	allergies?: string;
	songRequests?: string;
}

const baseUrl = process.env.VERCEL_URL || "";

export const RSVPEmail = ({
	name,
	companions,
	email,
	canAttend,
	transportation,
	allergies,
	songRequests,
}: RSVPEmailProps) => {
	const previewText = `${name} RSVP választ küldött - ${canAttend === "igen" ? "Részt vesz" : "Nem vesz részt"}`;

	return (
		<Html>
			<Head />

			<Body style={main}>
				<Preview>{previewText}</Preview>
				<Container style={container}>
					<Section>
						<Img
							style={img}
							src={`${baseUrl}/img/dinnyeskuvo.png`}
							width="268"
							height="45"
							alt="Dinnyesküvő"
						/>
					</Section>
					<Section></Section>
					<Section style={{ paddingBottom: "20px" }}>
						<Row>
							<Text style={heading}>RSVP Válasz</Text>
						</Row>
						<Row>
							<Text style={paragraph}>
								<strong>Név:</strong> {name}
							</Text>
						</Row>
						<Row>
							<Text style={paragraph}>
								<strong>E-mail:</strong> {email}
							</Text>
						</Row>
						<Row>
							<Text style={paragraph}>
								<strong>Részt vesz az esküvőn:</strong>{" "}
								{canAttend === "igen" ? "Igen" : "Nem"}
							</Text>
						</Row>
						{transportation && (
							<Row>
								<Text style={paragraph}>
									<strong>Közlekedés:</strong> {transportation}
								</Text>
							</Row>
						)}
						{companions && companions.length > 0 && (
							<Row>
								<Text style={paragraph}>
									<strong>Kísérők:</strong>
									<br />
									{companions.map((companion, index) => (
										<span key={index}>
											• {companion}
											<br />
										</span>
									))}
								</Text>
							</Row>
						)}
						{allergies && (
							<Row>
								<Text style={paragraph}>
									<strong>Allergiák/Speciális étrend:</strong>
									<br />
									{allergies.split("\n").map((line, index) => (
										<span key={index}>
											{line}
											<br />
										</span>
									))}
								</Text>
							</Row>
						)}
						{songRequests && (
							<Row>
								<Text style={paragraph}>
									<strong>Zenei kívánságok:</strong>
									<br />
									{songRequests.split("\n").map((line, index) => (
										<span key={index}>
											{line}
											<br />
										</span>
									))}
								</Text>
							</Row>
						)}
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const img = {
	margin: "0 auto",
	marginBottom: "20px",
};

const heading = {
	fontSize: "24px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#484848",
};

const paragraph = {
	fontSize: "18px",
	lineHeight: "1.4",
	color: "#484848",
	marginBottom: "12px",
};
