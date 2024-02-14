import Heading, { HeadingType } from "@/components/atoms/Heading";
import Hero from "@/components/molecules/Hero";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <main className="flex flex-col items-center justify-between p-24">
        <Hero imageSrc="/monstera.jpg" imageAltText="Dozens of large dark green monstera leaves" heroText="Plants! They're neat" />
      </main>
    </React.Fragment>
  );
}
