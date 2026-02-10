"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useQuoteForm, CategoryStep, PhotoUploadStep, DetailStep } from "@/src/features/create-quote";
import { Card, CardContent, CardHeader } from "@/src/shared/ui/card";
import { Button } from "@/src/shared/ui/button";
import { Badge } from "@/src/shared/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function QuoteFormWidget() {
  const { form, currentStep, nextStep, prevStep, onSubmit } = useQuoteForm();

  const canProceed = () => {
    if (currentStep === 1) {
      return !!form.watch("category");
    }
    if (currentStep === 2) {
      const photos = form.watch("photos");
      return photos && photos.length > 0 && photos.length <= 5;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      form.trigger("category").then((isValid) => {
        if (isValid) nextStep();
      });
    } else if (currentStep === 2) {
      form.trigger("photos").then((isValid) => {
        console.log("Step 2 Validation Result:", isValid);
        if (!isValid) {
          console.log("Step 2 Validation Errors:", form.formState.errors);
        }
        if (isValid) nextStep();
      });
    }
  };

  return (
    <section id="quote" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3].map((step) => (
                  <Badge
                    key={step}
                    variant={currentStep >= step ? "default" : "outline"}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    {step}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {currentStep}/3 단계
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep === 1 && <CategoryStep form={form} />}
                  {currentStep === 2 && <PhotoUploadStep form={form} />}
                  {currentStep === 3 && <DetailStep form={form} />}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  이전
                </Button>

                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceed()}
                  >
                    다음
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    onClick={onSubmit}
                    disabled={!form.formState.isValid}
                  >
                    견적 신청하기
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
