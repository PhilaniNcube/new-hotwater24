/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uFR3NMUdsrp
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="mt-4">
      <h2 className="text-2xl font-bold text-center mb-3 dark:text-white">
        Our Happy Customers
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 container">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold mt-4">Phillip Erasmus</h3>

          <blockquote className="mt-2 italic text-zinc-500 dark:text-zinc-400">
            "Can surely recommend you! On time and quality installation. Follow
            up and keeping to commitments. Not something you see and hear about
            in these days. Thanks again."
          </blockquote>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold mt-4">Nish Govender</h3>

          <blockquote className="mt-2 italic text-zinc-500 dark:text-zinc-400">
            "Ronald from Hotwater24 offers exceptional front-end service. The
            advice offered to a first-time gas user is meticulous and
            informative."
          </blockquote>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold mt-4">Zama Mbatha</h3>

          <blockquote className="mt-2 italic text-zinc-500 dark:text-zinc-400">
            "Job well done to the Hotwater24 team, from beginning to end, they
            were very professional. I LOVE the fact that they were there
            throughout the process to give advice and help with the right
            products for our household. KUDOS to you guys."
          </blockquote>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold mt-4">Tersia Block</h3>

          <blockquote className="mt-2 italic text-zinc-500 dark:text-zinc-400">
            "Excellent service installation. From the first engagement with
            Ronald to the site visit and installation. Shane and Lamont were
            also very knowledgeable and professional. I am a very satisfied
            customer."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
