import React from "react";
import Link from "next/link";

interface QuoteButtonBlockProps {
  data: {
    _type: "quoteButtonSection";
    heading?: string;
    headingTag?: "h1" | "h2" | "h3" | "h4";
    subheading?: string;
    buttonText: string;
    backgroundColor?: string;
    textColor?: string;
  };
}

const QuoteButtonBlock: React.FC<QuoteButtonBlockProps> = ({ data }) => {
  const {
    heading,
    headingTag = "h2",
    subheading,
    buttonText = "Get Your Quote",
    backgroundColor = "orange-500",
    textColor = "white",
  } = data;

  // Create the heading element based on the headingTag
  const HeadingTag = headingTag as keyof React.JSX.IntrinsicElements;

  // Define background color classes
  const backgroundColorClasses = {
    white: "bg-white",
    "gray-50": "bg-gray-50",
    "gray-900": "bg-gray-900",
    "orange-500": "bg-orange-500",
    "blue-600": "bg-blue-600",
    "green-600": "bg-green-600",
    "red-600": "bg-red-600",
  };

  // Define text color classes
  const textColorClasses = {
    white: "text-white",
    black: "text-black",
    "gray-900": "text-gray-900",
    "gray-100": "text-gray-100",
  };

  const bgClass = backgroundColorClasses[backgroundColor as keyof typeof backgroundColorClasses] || "bg-orange-500";
  const textClass = textColorClasses[textColor as keyof typeof textColorClasses] || "text-white";

  return (
    <section className={`py-16 px-4 ${bgClass} ${textClass}`}>
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {heading && (
            <HeadingTag className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {heading}
            </HeadingTag>
          )}
          
          {subheading && (
            <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl opacity-90">
              {subheading}
            </p>
          )}
          
          <div className="">
            <Link
              href="/quote/start"
              className={`
                inline-flex items-center justify-center
                px-8 py-4 text-lg font-semibold
                rounded-full shadow-lg
                transition-all duration-300
                hover:shadow-xl hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-opacity-50
                ${textColor === "white" 
                  ? "bg-white text-gray-900 hover:bg-gray-100 focus:ring-white" 
                  : "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900"
                }
              `}
            >
              {buttonText}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteButtonBlock;