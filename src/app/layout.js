import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zams Platform",
  description: "Zams Platform UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}