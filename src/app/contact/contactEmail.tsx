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

interface ContactEmailProps {
	senderName?: string;
	message?: string;
}

const baseUrl = process.env.VERCEL_URL || "";

export const ContactEmail = ({ senderName, message }: ContactEmailProps) => {
	const previewText = `${senderName} üzenetet küldött: ${message}`;
	const formattedMessage = message?.split("\n").map(function (item, i) {
		return (
			<span key={i}>
				{item}
				<br />
			</span>
		);
	});

	return (
		<Html>
			<Head />

			<Body style={main}>
				<Preview>{previewText}</Preview>
				<Container style={container}>
					<Section>
						<Img
							style={img}
							src={`${baseUrl}/img/dinnyeskuvo.svg`}
							width="96"
							height="30"
							alt="Dinnyesküvő"
						/>
					</Section>
					<Section></Section>
					<Section style={{ paddingBottom: "20px" }}>
						<Row>
							<Text style={heading}>{senderName} üzenete:</Text>
							<Text style={review}>{formattedMessage}</Text>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default ContactEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const img = {
	margin: "0 auto",
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
	width: "580px",
	maxWidth: "100%",
};

const heading = {
	fontSize: "32px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#484848",
};

const paragraph = {
	fontSize: "18px",
	lineHeight: "1.4",
	color: "#484848",
};

const review = {
	...paragraph,
	padding: "24px",
	backgroundColor: "#f2f3f3",
	borderRadius: "4px",
};
