import type { Metadata } from "next";
import "./globals.css";


// For Next Auth Provider
import { NextAuthProvider } from "@/NextAuthProvider";

// For UPLOAD THING
import "@uploadthing/react/styles.css";


export const metadata: Metadata = {
  title: {
    template: "%s - Easy Watches",
    default: "Easy Watches",
  },
  description: "Where Every Second Feels Luxury",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
