"use client";

import { UseFormReturn } from "react-hook-form";
import { QuoteFormData } from "@/src/entities/quote";
import { Label } from "@/src/shared/ui/label";
import { Textarea } from "@/src/shared/ui/textarea";
import { Input } from "@/src/shared/ui/input";
import { trackEvent, GA_EVENTS } from "@/src/shared/lib/analytics";

interface DetailStepProps {
  form: UseFormReturn<QuoteFormData>;
}

export function DetailStep({ form }: DetailStepProps) {
  const handleSubmitClick = () => {
    trackEvent(GA_EVENTS.QUOTE_STEP3_COMPLETED, {
      descriptionLength: form.getValues("description").length,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">상세 정보를 입력해주세요</h2>
        <p className="text-muted-foreground">수선이 필요한 부분을 자세히 설명해주세요</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="description">수선 내용</Label>
          <Textarea
            id="description"
            placeholder="예: 가방 손잡이 부분이 벗겨져서 수선이 필요합니다."
            className="min-h-[120px]"
            {...form.register("description")}
          />
          {form.formState.errors.description && (
            <p className="text-sm text-destructive">
              {form.formState.errors.description.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">연락처</Label>
          <Input
            id="phoneNumber"
            type="tel"
            placeholder="010-1234-5678"
            {...form.register("phoneNumber")}
          />
          {form.formState.errors.phoneNumber && (
            <p className="text-sm text-destructive">
              {form.formState.errors.phoneNumber.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
