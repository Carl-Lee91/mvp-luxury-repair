"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="w-6 h-6" />
          <span className="text-xl font-bold">Luxury Repair</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            홈
          </Link>
          <Link href="#quote" className="text-sm font-medium hover:underline">
            견적 신청
          </Link>
        </div>
      </div>
    </nav>
  );
}
