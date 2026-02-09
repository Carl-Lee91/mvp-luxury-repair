"use client";

import { UseFormReturn } from "react-hook-form";
import { QuoteFormData } from "@/src/entities/quote";
import { REPAIR_CATEGORIES } from "@/src/entities/repair-category";
import { Label } from "@/src/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/shared/ui/radio-group";
import { Card, CardContent } from "@/src/shared/ui/card";

interface CategoryStepProps {
  form: UseFormReturn<QuoteFormData>;
}

export function CategoryStep({ form }: CategoryStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">어떤 물품을 수선하시나요?</h2>
        <p className="text-muted-foreground">카테고리를 선택해주세요</p>
      </div>

      <RadioGroup
        value={form.watch("category")}
        onValueChange={(value) => form.setValue("category", value as any)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {REPAIR_CATEGORIES.map((category) => {
          const Icon = category.icon;
          const isSelected = form.watch("category") === category.value;

          return (
            <Card
              key={category.value}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                isSelected ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => form.setValue("category", category.value)}
            >
              <CardContent className="flex items-start gap-4 p-6">
                <RadioGroupItem value={category.value} id={category.value} />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    <Label
                      htmlFor={category.value}
                      className="text-lg font-semibold cursor-pointer"
                    >
                      {category.label}
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </RadioGroup>

      {form.formState.errors.category && (
        <p className="text-sm text-destructive text-center">
          {form.formState.errors.category.message}
        </p>
      )}
    </div>
  );
}
