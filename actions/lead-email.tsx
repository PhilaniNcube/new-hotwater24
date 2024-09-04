import { max } from "date-fns";
import type * as React from "react";

interface EmailTemplateProps {
	firstName: string;
	lastName: string;
	email: string;
	streetAddress: string;
	city: string;
	telephoneNumber: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  streetAddress,
  city,
  telephoneNumber,
}) => (
  <div>
    <img
      src="http://cdn.mcauto-images-production.sendgrid.net/622b9324edf69236/b96619d1-872f-4b3f-ba0d-0908a77a2320/600x225.jpg"
      alt="banner"
    />
    <div style={container}>
      <h1 style={heading}>Hi {firstName}!</h1>
      <p>
        <strong>
          Thank you for completing our questionnaire. Based on the information
          provided, we will soon send you a comprehensive (costing) proposal
          regarding the installation for a gas water heating solution for your
          property.
        </strong>
      </p>
    </div>
  </div>
);


const container = {
  paddingLeft: "20px",
  marginTop: "20px",
  fontSize: "16px",
  maxWidth: "600px",
}

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
}
