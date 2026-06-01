import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "OnePager",
  description: "Покупайте и сдавайте в аренду 3D-принтеры вместе с CULTFORM. Пассивный доход 6% в месяц.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
