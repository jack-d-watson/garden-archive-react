import type { Metadata } from "next";
import BasePageTemplate from "@/components/pageTemplates/BasePageTemplate";

export const metadata: Metadata = {
  title: "Garden Archive",
  description: "An encyclopedia of plants good for Colorado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BasePageTemplate>{children}</BasePageTemplate>;
}
