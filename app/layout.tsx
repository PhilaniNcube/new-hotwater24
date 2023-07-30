import Footer from './Footer'
import Navbar from './Navbar'
import './globals.css'


export const metadata = {
  title: 'Hotwater 24',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
