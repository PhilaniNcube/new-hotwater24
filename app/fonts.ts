import { Roboto, Bebas_Neue, Antonio, Lato } from "next/font/google";

export const roboto = Roboto({
  display: 'swap',
  weight: ["400", "500", "700", "900"],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-roboto'
})

export const bebas = Bebas_Neue({
  display: 'swap',
  weight: ["400"],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-bebas'
})


export const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight:["300" ,"400", "700" ] ,
});

export const antonio = Antonio({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-antonio",
  weight: ["700"],
});
