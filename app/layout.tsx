
import type { Metadata } from "next";
import "./globals.css";
import ContentProtection from "@/components/ContentProtection";

export const metadata: Metadata = {
  title: "Dr. K. Veluswamy | Biography",
  description:
    "The life journey of Dr. K. Veluswamy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><ContentProtection>{children}</ContentProtection></body>
    </html>
  );
}
