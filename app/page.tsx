import { Hero } from "@/components/sections/Hero";
import { WithoutRabrix } from "@/components/sections/WithoutRabrix";
import { WithRabrix } from "@/components/sections/WithRabrix";
import { Outcomes } from "@/components/sections/Outcomes";
import { Pricing } from "@/components/sections/Pricing";
import { WhoIsThisFor } from "@/components/sections/WhoIsThisFor";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WithoutRabrix />
      <WithRabrix />
      <Outcomes />
      <Pricing />
      <WhoIsThisFor />
      <FAQ />
      <FinalCTA />
    </>
  );
}
