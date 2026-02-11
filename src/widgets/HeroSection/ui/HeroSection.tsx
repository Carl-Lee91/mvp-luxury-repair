"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/src/shared/ui/button";

export function HeroSection() {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              명품 제품의
              <br />
              <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
                완벽한 복원
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
              전문가의 손길로 소중한 명품을 새것처럼 되돌려드립니다
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToQuote}
              className="bg-white text-black hover:bg-neutral-100 text-lg px-8 py-6 h-16"
            >
              무료 견적 받기
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="space-y-1">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-neutral-400">만족도</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold">5,000+</div>
              <div className="text-sm text-neutral-400">수선 건수</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold">24h</div>
              <div className="text-sm text-neutral-400">견적 제공</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
