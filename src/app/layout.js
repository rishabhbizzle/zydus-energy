import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata = {
  title: 'Zydus Energy Pvt Ltd',
  description: "Zydus Green Energy PVT LTD is a leading provider of renewable energy solutions, committed to driving the transition to a greener, more sustainable world.",
  metadataBase: new URL('https://zydusenergy.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: [
      {
        url: 'https://i0.wp.com/indianinfrastructure.com/wp-content/uploads/2022/11/II-24.jpg?fit=1855%2C1042&ssl=1',
        alt: 'Zydus Energy Pvt Ltd',
      },
      {
        url: 'https://i0.wp.com/indianinfrastructure.com/wp-content/uploads/2022/11/II-24.jpg?fit=1855%2C1042&ssl=1',
        alt: 'Zydus Energy Pvt Ltd',
      },
    ],
    type: 'website',
    locale: 'en_US',
    title: 'Zydus Energy Pvt Ltd',
    description: "Zydus Green Energy PVT LTD is a leading provider of renewable energy solutions, committed to driving the transition to a greener, more sustainable world.",
    site_name: 'Zydus Energy Pvt Ltd',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >{children}</body>
    </html>
  );
}
