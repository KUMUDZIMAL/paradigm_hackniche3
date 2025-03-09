import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/MyComponents/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BlockLottery - Decentralized Lottery with Verifiable Fairness",
  description:
    "A trustless lottery system built on blockchain technology that guarantees transparency, fairness, and instant payouts without intermediaries.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

