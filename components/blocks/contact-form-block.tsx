"use client";

import { ContactFormSection } from "@/sanity/types";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ContactFormBlockProps {
  data: ContactFormSection;
}

export default function ContactFormBlock({ data }: ContactFormBlockProps) {
  const { heading, subheading, submitButtonText = "Send Message" } = data;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Handle form submission logic here
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-8 space-y-4 text-center">
            {heading && (
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-800">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {subheading}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                className="w-full p-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your Name"
                required
              />
            </div>

            <div>
              <input
                className="w-full p-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                rows={6}
                className="w-full p-4 text-base text-gray-600 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-gray-700"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-4 text-base font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
            >
              {isSubmitting ? "Sending..." : submitButtonText}
            </Button>

            <p className="text-xs text-center text-gray-500">
              By filling in this form you give us consent to email you – but you
              can unsubscribe at any time
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
