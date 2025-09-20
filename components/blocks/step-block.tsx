import { StepSection } from "@/sanity/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";

// Type for step data as transformed by our GROQ query
type StepItemWithIconUrl = {
  _key: string;
  _type: "stepItem";
  icon?: string; // URL string from GROQ transformation
  title?: string;
  description?: string;
};

// Type for our component props with the transformed data
type StepSectionWithIconUrls = Omit<StepSection, "steps"> & {
  steps?: StepItemWithIconUrl[];
};

interface StepBlockProps {
  data: StepSectionWithIconUrls;
}

// Component to render the step icon
function StepIcon({
  icon,
  title,
  index,
}: {
  icon?: string | null;
  title?: string;
  index: number;
}) {
  if (icon) {
    return (
      <div className="flex items-center justify-center w-16 h-16 mx-auto overflow-hidden bg-red-400 rounded-full shadow-md">
        <Image
          src={icon}
          alt={title || `Step ${index + 1} icon`}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    );
  }

  // Fallback to numbered circle if no icon
  return (
    <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-blue-600 rounded-full">
      <span className="text-xl font-bold">{index + 1}</span>
    </div>
  );
}

export default function StepBlock({ data }: StepBlockProps) {
  const { heading, steps, headingTag } = data;

  if (!steps || steps.length === 0) return null;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeading heading={heading} headingTag={headingTag} />
        </div>
        <div className="max-w-6xl py-12 mx-auto">
          <div className="space-y-6">
            {/* First row - 3 steps */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {steps.slice(0, 3).map((step, index) => (
                <Card
                  key={step._key || index}
                  className="p-6 transition-all duration-300 border-0 cursor-pointer hover:shadow-md group"
                >
                  <CardContent className="p-0">
                    <div className="grid gap-4">
                      {" "}
                      <StepIcon
                        icon={step.icon}
                        title={step.title}
                        index={index}
                      />
                      <div className="space-y-2">
                        {step.title && (
                          <h3 className="text-xl font-bold text-slate-800">
                            {step.title}
                          </h3>
                        )}
                        {step.description && (
                          <p className="text-lg text-gray-500 transition-all duration-300 group-hover:font-medium">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Second row - 2 steps centered */}
            {steps.length > 3 && (
              <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2">
                {steps.slice(3, 5).map((step, index) => (
                  <Card
                    key={step._key || index + 3}
                    className="p-6 transition-all duration-300 border-0 cursor-pointer hover:shadow-md group"
                  >
                    <CardContent className="p-0">
                      <div className="grid gap-4">
                        {" "}
                        <StepIcon
                          icon={step.icon}
                          title={step.title}
                          index={index + 3}
                        />
                        <div className="space-y-2">
                          {step.title && (
                            <h3 className="text-xl font-bold text-slate-800">
                              {step.title}
                            </h3>
                          )}
                          {step.description && (
                            <p className="text-lg text-gray-500 transition-all duration-300 group-hover:font-medium">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            {/* Additional steps if more than 5 */}
            {steps.length > 5 && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {steps.slice(5).map((step, index) => (
                  <Card
                    key={step._key || index + 5}
                    className="p-6 text-center transition-all duration-300 cursor-pointer hover:shadow-md group"
                  >
                    <CardContent className="p-0">
                      <div className="grid gap-4">
                        {" "}
                        <StepIcon
                          icon={step.icon}
                          title={step.title}
                          index={index + 5}
                        />
                        <div className="space-y-2">
                          {step.title && (
                            <h3 className="text-xl font-bold text-slate-800">
                              {step.title}
                            </h3>
                          )}
                          {step.description && (
                            <p className="text-lg text-gray-500 transition-all duration-300 group-hover:font-medium">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
