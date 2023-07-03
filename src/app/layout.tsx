import { Inter } from "next/font/google";
import "./globals.css";
import { InputProvider } from "../context/InputContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Tracker",
  description: "A simple crypto tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <InputProvider>
        <body className={inter.className}>{children}</body>
      </InputProvider>
    </html>
  );
}
