"use client";

import { Shield, Award, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/ui/card";

export function TrustSection() {
  const features = [
    {
      icon: Shield,
      title: "플랫폼 책임 보증",
      description:
        "모든 수선 작업은 플랫폼이 책임지며, 만족하지 못하실 경우 100% 환불해드립니다.",
    },
    {
      icon: Award,
      title: "보험 처리",
      description:
        "만일의 사고에 대비한 보험 가입으로 고객님의 소중한 제품을 안전하게 보호합니다.",
    },
    {
      icon: Clock,
      title: "빠른 견적",
      description:
        "24시간 이내 전문가의 정확한 견적을 받아보실 수 있습니다.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            안심하고 맡기세요
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            고객님의 명품을 안전하게 책임지는 3가지 약속
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
