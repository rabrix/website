import { Hero } from "@/components/sections/Hero";
import { WithoutRabrix } from "@/components/sections/WithoutRabrix";
import { Realization } from "@/components/sections/Realization";
import { WithRabrix } from "@/components/sections/WithRabrix";
import { Offer } from "@/components/sections/Offer";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WithoutRabrix />
      <Realization />
      <WithRabrix />
      <FAQ />
      <Offer />
      <FinalCTA />
    </>
  );
}
