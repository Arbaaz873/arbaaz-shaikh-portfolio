import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arbaaz Shaikh — Senior Vulnerability Management Engineer",
  description:
    "Cybersecurity engineer specializing in enterprise vulnerability management, cloud security, and zero-day response. 76% faster critical remediation across 30,000+ hybrid assets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
