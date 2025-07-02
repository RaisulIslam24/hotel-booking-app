import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '@/lib/AntdRegistry';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Aurassi Hotel - Ant Design",
  description: "Spacious, modern rooms with panoramic views of the Mediterranean Sea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}