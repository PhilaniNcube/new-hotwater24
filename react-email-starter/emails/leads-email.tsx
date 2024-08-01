// @ts-nocheck
import {
	Body,
	Button,
	Container,
	Column,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
	Tailwind,
  type TailwindConfig,
} from "@react-email/components";
import * as React from "react";



const config = {
  theme: {
    fontSize: {
      xs: ["12px", { lineHeight: "16px" }],
      sm: ["14px", { lineHeight: "20px" }],
      base: ["16px", { lineHeight: "24px" }],
      lg: ["18px", { lineHeight: "28px" }],
      xl: ["20px", { lineHeight: "28px" }],
      "2xl": ["24px", { lineHeight: "32px" }],
      "3xl": ["30px", { lineHeight: "36px" }],
      "4xl": ["36px", { lineHeight: "36px" }],
      "5xl": ["48px", { lineHeight: "1" }],
      "6xl": ["60px", { lineHeight: "1" }],
      "7xl": ["72px", { lineHeight: "1" }],
      "8xl": ["96px", { lineHeight: "1" }],
      "9xl": ["144px", { lineHeight: "1" }],
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "2px",
      1: "4px",
      1.5: "6px",
      2: "8px",
      2.5: "10px",
      3: "12px",
      3.5: "14px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      14: "56px",
      16: "64px",
      20: "80px",
      24: "96px",
      28: "112px",
      32: "128px",
      36: "144px",
      40: "160px",
      44: "176px",
      48: "192px",
      52: "208px",
      56: "224px",
      60: "240px",
      64: "256px",
      72: "288px",
      80: "320px",
      96: "384px",
    },
  },
} satisfies TailwindConfig;

const LeadsEmail = ( {

    houseType,
    ownership,
    gasSupply,
    gasStove,
    gasWaterHeating,
    gasHeating,
    otherGasUse,
    locateOutside,
    gasGeyser,
    electricGeyser,
    solarGeyser,
    otherGeyser,
    standardShower,
    rainShower,
    bathtub,
    kitchenSink,
    bathroomSink,
    dishwasher,
    washingmachine,
    flowRate,
    offGrid,
    firstName,
    lastName,
    email,
    streetAddress,
    city,
    telephoneNumber,
    suburb,
    postalCode,
    completeSolution,
    product_id,
    installation,
    geyserPrice,
    monthlySavings,
    yearlySavings,
    geyserSize,
    installationCost,
    plumbingCost,
  }) => {
  return (
			<Html>
				<Head />
				<Preview>AWS Email Verification</Preview>
				<Body style={main}>
					<Container style={container}>
						<Section style={coverSection}>
							<Section style={imageSection}>
								<Img src="/static/banner.jpg" alt="Banner" />
							</Section>
							<Section style={upperSection}>
								<Text style={mainText}>
									Thank you for completing the questionnaire. Please find below
									a short summary of the information you have provided. Based on
									this information, we will soon send you an initial (costing)
									proposal.
								</Text>
								<Section>
									<Text style={text}>
										<strong>Name:</strong> {firstName} {lastName} <br />
										<strong>Address:</strong> {city} <br />
										<strong>Tel Number:</strong> {telephoneNumber} <br />
										<strong>Email:</strong> {email} <br />
									</Text>
								</Section>
								<Section
									style={{ textAlign: "center", backgroundColor: "#e2e8f0" }}
									className="bg-slate-200"
								>
									<Heading style={h1}>Property Details</Heading>
								</Section>
								<Section>
									<Row style={text}>
										<Column style={{ textAlign: "center" }}>
											<Text>House Type</Text>
										</Column>
										<Column style={{ textAlign: "center" }}>
											<Text>{houseType} House Type</Text>
										</Column>
									</Row>
									<Row style={text}>
										<Column style={{ textAlign: "center" }}>
											<Text>Property Ownership</Text>
										</Column>
										<Column style={{ textAlign: "center" }}>
											<Text>{houseType} Property Ownership</Text>
										</Column>
									</Row>
									<Row style={text}>
										<Column style={{ textAlign: "center" }}>
											<Text>Current Gas Supply</Text>
										</Column>
										<Column style={{ textAlign: "center" }}>
											<Text>{houseType} Current Gas Supply</Text>
										</Column>
									</Row>
								</Section>
								<Section
									style={{ textAlign: "center", backgroundColor: "#e2e8f0" }}
									className="bg-slate-200"
								>
									<Heading style={h1}>Intended Gas Useage</Heading>
								</Section>
								<Section style={{ textAlign: "center" }}>
									<Column style={text}>
										<Text>Cooking</Text>
										<Text>{gasStove ? "Yes" : "No"}</Text>
									</Column>
									<Column style={text}>
										{" "}
										<Text>Electric Geyser</Text>
										<Text>{electricGeyser ? "Yes" : "No"}</Text>
									</Column>
									<Column style={text}>
										<Text>Solar Geyser</Text>
										<Text>{solarGeyser ? "Yes" : "No"}</Text>
									</Column>
									<Column style={text}>
										<Text>Other</Text>
										<Text>{otherGasUse ? "Yes" : "No"}</Text>
									</Column>
								</Section>
							</Section>
							<Hr />
						</Section>
					</Container>
				</Body>
			</Html>
		);
};
export default LeadsEmail;


const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
};

const imageSection = {
  backgroundColor: "#252f3d",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const lowerSection = { padding: "25px 35px" };

const footerText = {
  ...text,
  fontSize: "12px",
  padding: "0 20px",
};

const verifyText = {
  ...text,
  margin: 0,
  fontWeight: "bold",
  textAlign: "center" as const,
};

const codeText = {
  ...text,
  fontWeight: "bold",
  fontSize: "36px",
  margin: "10px 0",
  textAlign: "center" as const,
};

const validityText = {
  ...text,
  margin: "0px",
  textAlign: "center" as const,
};

const verificationSection = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const mainText = { ...text, marginBottom: "14px", fontWeight: "bold" };

const cautionText = { ...text, margin: "0px" };
