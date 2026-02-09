"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { quoteFormSchema, type QuoteFormData } from "@/src/entities/quote";
import { trackEvent, GA_EVENTS } from "@/src/shared/lib/analytics";

export function useQuoteForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      category: undefined,
      photos: [],
      description: "",
      phoneNumber: "",
    },
    mode: "onChange",
  });

  const nextStep = () => {
    if (currentStep === 1) {
      trackEvent(GA_EVENTS.QUOTE_STEP1_COMPLETED, {
        category: form.getValues("category"),
      });
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data: QuoteFormData) => {
    console.log("견적 신청 데이터:", data);
    trackEvent(GA_EVENTS.QUOTE_SUBMITTED, {
      category: data.category,
      photoCount: data.photos.length,
    });
    router.push("/success");
  };

  return {
    form,
    currentStep,
    nextStep,
    prevStep,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
