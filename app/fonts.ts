import { Roboto, Bebas_Neue } from "next/font/google";

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
