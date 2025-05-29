import Image from "next/image";
import { cn } from "@/lib/utils";

// Type for the overlay settings
interface OverlaySettings {
  enabled: boolean;
  opacity?: number;
  color?: string;
}

// Type for full-width image section data coming from GROQ queries
interface FullWidthImageBlockData {
  _type: "fullWidthImageSection";
  image?: string | null;
  alt?: string | null;
  caption?: string | null;
  height?: "small" | "medium" | "large" | "viewport" | null;
  overlay?: OverlaySettings | null;
}

interface FullWidthImageBlockProps {
  data: FullWidthImageBlockData;
}

const FullWidthImageBlock: React.FC<FullWidthImageBlockProps> = ({ data }) => {
  const { image, alt, caption, height = "medium", overlay } = data;

  if (!image) {
    return null; // Don't render if no image is provided
  }

  // Define height classes
  const heightClasses = {
    small: "h-[300px]",
    medium: "h-[500px]",
    large: "h-[700px]",
    viewport: "h-screen",
  };

  // Define overlay classes
  const getOverlayClasses = () => {
    if (!overlay?.enabled) return "";

    const opacity = overlay.opacity || 50;
    const color = overlay.color || "black";

    const colorClasses = {
      black: "bg-black",
      white: "bg-white",
      "gray-900": "bg-gray-900",
      brand: "bg-red-600", // Assuming brand color is red-600 based on other components
    };

    return cn(
      "absolute inset-0 z-10",
      colorClasses[color as keyof typeof colorClasses] || "bg-black",
      `opacity-${Math.round(opacity / 10) * 10}` // Round to nearest 10 for Tailwind classes
    );
  };

  return (
    <section className="relative w-full">
      {/* Image Container */}
      <div
        className={cn(
          "relative w-full overflow-hidden",
          heightClasses[height!] || "h-[500px]"
        )}
      >
        <Image
          src={image}
          alt={alt || "Full width image"}
          fill
          className="object-cover"
          priority={height === "viewport"} // Prioritize viewport images for LCP
          sizes="100vw"
        />

        {/* Overlay */}
        {overlay?.enabled && <div className={getOverlayClasses()} />}
      </div>

      {/* Caption */}
      {caption && (
        <div className="container px-4 py-4 mx-auto">
          <p className="text-sm italic text-center text-gray-600 md:text-base">
            {caption}
          </p>
        </div>
      )}
    </section>
  );
};

export default FullWidthImageBlock;
