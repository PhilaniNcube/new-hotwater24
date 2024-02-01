import Image from "next/image";
import Link from "next/link";

const GasGenius = () => {
  return (
    <Link
      href="https://wa.me/27793414075?text=I'm%20contacting%20you%20from%20your%20website%20hotwater24.co.za"
      target="_blank"
      className="cursor-pointer"
    >
      <Image
        src="/images/genius.webp"
        width={300}
        height={300}
        alt="Genius"
        className="fixed bottom-20 right-4 z-[50] w-[50px] md:w-[80px] lg:w-[120px] object-cover hover:-translate-y-1 transition-transform duration-150"
      />
    </Link>
  );
};
export default GasGenius;
