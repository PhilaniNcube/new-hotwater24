interface SectionHeadingProps {
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export default function SectionHeading({
  heading,
  headingTag = "h2",
  className = "text-3xl font-bold tracking-tighter sm:text-5xl text-slate-800",
}: SectionHeadingProps) {
  if (!heading) return null;

  switch (headingTag) {
    case "h1":
      return <h1 className={className}>{heading}</h1>;
    case "h2":
      return <h2 className={className}>{heading}</h2>;
    case "h3":
      return <h3 className={className}>{heading}</h3>;
    case "h4":
      return <h4 className={className}>{heading}</h4>;
    default:
      return <h2 className={className}>{heading}</h2>;
  }
}
