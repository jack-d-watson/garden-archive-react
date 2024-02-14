import { Inter } from "next/font/google";
import "@/app/globals.css"
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function BasePageTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="emerald">
      <head>
        <title>Garden Archive</title>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
