import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import UserContextProvider from "@/contexts/userContextProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saboroo",
  description: "Arte em cada colher, frescor em cada mordida!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} text-sm text-white bg-white  min-h-screen `}
      >
        <UserContextProvider>
          <Navbar />

          {children}
        </UserContextProvider>
        <Footer />
      </body>
    </html>
  );
}
