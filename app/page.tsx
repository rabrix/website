import { Hero } from "@/components/sections/Hero";
import { MicroTrustStrip } from "@/components/sections/MicroTrustStrip";
import dynamic from "next/dynamic";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { Realization } from "@/components/sections/Realization";

// Lazy load below-fold sections for better initial load performance
const WithoutRabrix = dynamic(
  () => import("@/components/sections/WithoutRabrix").then((mod) => ({ default: mod.WithoutRabrix })),
  {
    loading: () => <SectionSkeleton height="h-[600px] md:h-[700px]" />,
  }
);

const WithRabrix = dynamic(
  () => import("@/components/sections/WithRabrix").then((mod) => ({ default: mod.WithRabrix })),
  {
    loading: () => <SectionSkeleton height="h-[600px] md:h-[700px]" />,
  }
);

const Outcomes = dynamic(
  () => import("@/components/sections/Outcomes").then((mod) => ({ default: mod.Outcomes })),
  {
    loading: () => <SectionSkeleton height="h-[300px] md:h-[400px]" />,
  }
);

const Comparison = dynamic(
  () => import("@/components/sections/Comparison").then((mod) => ({ default: mod.Comparison })),
  {
    loading: () => <SectionSkeleton height="h-[500px] md:h-[600px]" />,
  }
);

const HowItWorks = dynamic(
  () => import("@/components/sections/HowItWorks").then((mod) => ({ default: mod.HowItWorks })),
  {
    loading: () => <SectionSkeleton height="h-[400px] md:h-[500px]" />,
  }
);

const Offer = dynamic(
  () => import("@/components/sections/Offer").then((mod) => ({ default: mod.Offer })),
  {
    loading: () => <SectionSkeleton height="h-[400px] md:h-[500px]" />,
  }
);

const SocialProof = dynamic(
  () => import("@/components/sections/SocialProof").then((mod) => ({ default: mod.SocialProof })),
  {
    loading: () => <SectionSkeleton height="h-[300px] md:h-[400px]" />,
  }
);

const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((mod) => ({ default: mod.FAQ })),
  {
    loading: () => <SectionSkeleton height="h-[400px] md:h-[500px]" />,
  }
);

const FinalCTA = dynamic(
  () => import("@/components/sections/FinalCTA").then((mod) => ({ default: mod.FinalCTA })),
  {
    loading: () => <SectionSkeleton height="h-[300px] md:h-[400px]" />,
  }
);

// Skeleton loader component for better UX during lazy loading
function SectionSkeleton({ height }: { height: string }) {
  return (
    <div className={`${height} w-full bg-gray-50/30 animate-pulse`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="w-full space-y-4">
          <div className="h-8 bg-gray-200/50 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200/30 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      {/* <MicroTrustStrip /> */}
      <WithoutRabrix />
      <WithRabrix />
      <Realization />
      <Outcomes />
      <Comparison />
      {/* <HowItWorks /> */}
      <Offer />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <StickyCTA />
    </>
  );
}
