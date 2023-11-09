import Image from "next/image";

const GasGenius = () => {
  return <Image src="/images/genius.png" width={2481} height={2481} alt="Genius" className="fixed bottom-20 right-4 z-[50] w-[50px] md:w-[80px] lg:w-[120px] object-cover hover:-translate-y-1 transition-transform duration-150" />;
};
export default GasGenius;
