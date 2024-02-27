/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Pmvsbppz3WE
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { antonio } from "@/fonts";
import sgMail from "@sendgrid/mail";
import { getGeyser } from "@/sanity/sanity-utils";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function RequestQuote({ package_name }: { package_name: string }) {

  console.log(package_name)

  const geyser = await getGeyser(package_name);

  const requestQuote = async (formData: FormData) => {
    "use server";

    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const email = formData.get("email");

    const msg = {
      to: "ncbphi001@gmail.com",
      from: "info@hotwater24.com",
      cc: `${email}`,
      subject: `New Quote Request for ${geyser.title} with flow rate ${geyser.maxFlowRate}`,
      text: `Please see a new request for a quote for ${geyser.title} with flow rate ${geyser.maxFlowRate} from ${name} with email ${email} and phone number ${phone}. Message: ${message}`,
      html: `<table cellpadding="0" cellspacing="0" width="400">
        <tr>
        <h1>Quote request for ${geyser.title} - ${geyser.maxFlowRate}</h1>
        </tr>
        <tr>
          <p>Name: ${name}</p>
        </tr>
        <tr>
          <p>Phone: ${phone}</p>
        </tr>
        <tr>
          <p>Email: ${email}</p>
        </tr>
        <tr>
          <p>Message: ${message}</p>
        </tr>
      </table>`
    };

    const sentMessage = await sgMail.send(msg);

    console.log(sentMessage);
  };

  return (
    <div className="mx-auto max-w-md space-y-6 py-16">
      <div className="space-y-2 text-center">
        <h1 className={cn("text-3xl font-bold", antonio.className)}>
          Request a Quote
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Please provide your contact information and we will be in touch.
        </p>
      </div>
      <form action={requestQuote} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            required
            name="phone"
            type="tel"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            className="min-h-[100px]"
            name="message"
            id="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <Button className="w-full rounded-full bg-brand" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
