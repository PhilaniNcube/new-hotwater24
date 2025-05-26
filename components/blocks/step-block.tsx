import { StepSection } from "@/sanity/types";

interface StepBlockProps {
  data: StepSection;
}

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
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step._key || index} className="grid gap-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white">
                {step.numberOrIcon && (
                  <span className="text-xl font-bold">{step.numberOrIcon}</span>
                )}
              </div>
              <div className="space-y-2">
                {step.title && (
                  <h3 className="text-xl font-bold text-slate-800">
                    {step.title}
                  </h3>
                )}
                {step.description && (
                  <p className="text-gray-500 text-sm">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
