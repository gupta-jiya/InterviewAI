import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InterviewMentor AI",
  description: "InterviewMentor AI provides personalized interview preparation using advanced AI technology, helping you practice and perfect your answers to land your dream job.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("LAYOUT: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
