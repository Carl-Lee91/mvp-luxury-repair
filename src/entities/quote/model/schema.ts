import { z } from "zod";

export const categorySchema = z.object({
  category: z.enum(["bag", "watch", "jewelry", "shoes", "other"], {
    required_error: "카테고리를 선택해주세요.",
  }),
});

export const photoSchema = z.object({
  photos: z
    .array(z.instanceof(File))
    .min(1, "최소 1장의 사진을 업로드해주세요.")
    .max(5, "최대 5장까지 업로드 가능합니다."),
});

export const detailSchema = z.object({
  description: z
    .string()
    .min(10, "최소 10자 이상 입력해주세요.")
    .max(500, "최대 500자까지 입력 가능합니다."),
  phoneNumber: z
    .string()
    .regex(/^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/, "올바른 전화번호 형식이 아닙니다."),
});

export const quoteFormSchema = categorySchema.merge(photoSchema).merge(detailSchema);

export type CategoryFormData = z.infer<typeof categorySchema>;
export type PhotoFormData = z.infer<typeof photoSchema>;
export type DetailFormData = z.infer<typeof detailSchema>;
export type QuoteFormData = z.infer<typeof quoteFormSchema>;
