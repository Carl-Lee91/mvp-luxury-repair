"use client";

import { HeroSection } from "@/src/widgets/HeroSection";
import { TrustSection } from "@/src/widgets/TrustSection";
import { QuoteFormWidget } from "@/src/widgets/QuoteFormWidget";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <QuoteFormWidget />
    </main>
  );
}
