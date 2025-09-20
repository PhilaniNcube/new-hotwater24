import { VideoEmbedSection } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface VideoEmbedBlockProps {
  data: VideoEmbedSection;
}

export default function VideoEmbedBlock({ data }: VideoEmbedBlockProps) {
  const { heading, videoUrl, caption, placeholderImage } = data;

  // Extract video ID from YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
  };

  const embedUrl = videoUrl ? getYouTubeEmbedUrl(videoUrl) : null;

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {heading && (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-800">
              {heading}
            </h2>
          )}
        </div>
        <div className="max-w-4xl py-12 mx-auto">
          <div className="relative overflow-hidden shadow-lg aspect-video rounded-xl">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={heading || "Video"}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : placeholderImage ? (
              <Image
                src={urlFor(placeholderImage).url()}
                alt={heading || "Video placeholder"}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200">
                <p className="text-gray-500">Video not available</p>
              </div>
            )}
          </div>
          {caption && (
            <p className="mt-4 text-sm text-center text-gray-500">{caption}</p>
          )}
        </div>
      </div>
    </section>
  );
}
