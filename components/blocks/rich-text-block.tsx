import { RichTextSection } from "@/sanity/types";
import { PortableText } from "@portabletext/react";

interface RichTextBlockProps {
  data: RichTextSection;
}

export default function RichTextBlock({ data }: RichTextBlockProps) {
  const { heading, content } = data;

  if (!content) return null;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          {heading && (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-800">
                {heading}
              </h2>
            </div>
          )}
          <div className="prose prose-slate prose-lg max-w-none">
            <PortableText
              value={content}
              components={{
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold mb-6 text-slate-800">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold mb-4 text-slate-800">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold mb-3 text-slate-800">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl font-bold mb-2 text-slate-800">
                      {children}
                    </h4>
                  ),
                  normal: ({ children }) => (
                    <p className="mb-4 text-gray-700">{children}</p>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-600 my-6">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="text-gray-700">{children}</li>
                  ),
                  number: ({ children }) => (
                    <li className="text-gray-700">{children}</li>
                  ),
                },
                marks: {
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      className="text-red-600 hover:text-red-800 underline"
                      target={
                        value.href.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        value.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold">{children}</strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
