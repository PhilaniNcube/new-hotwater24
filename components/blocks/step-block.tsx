import { StepSection } from "@/sanity/types";
import { Card, CardContent } from "@/components/ui/card";

interface StepBlockProps {
  data: StepSection;
}

// Component to render either an icon or text/number

export default function StepBlock({ data }: StepBlockProps) {
  const { heading, steps } = data;

  if (!steps || steps.length === 0) return null;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {heading && (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-800">
              {heading}
            </h2>
          )}
        </div>{" "}
        <div className="max-w-6xl py-12 mx-auto">
          <div className="space-y-6">
            {" "}
            {/* First row - 3 steps */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {steps.slice(0, 3).map((step, index) => (
                <Card
                  key={step._key || index}
                  className="p-6 transition-all duration-300 border-0 cursor-pointer hover:shadow-md group"
                >
                  <CardContent className="p-0">
                    <div className="grid gap-4">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-red-600 rounded-full"></div>
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
            </div>{" "}
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
                        <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-red-600 rounded-full"></div>
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
            )}{" "}
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
                        <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-red-600 rounded-full"></div>
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
