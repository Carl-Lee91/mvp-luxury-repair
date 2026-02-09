export type RepairCategory = "bag" | "watch" | "jewelry" | "shoes" | "other";

export interface QuoteFormData {
  category: RepairCategory;
  photos: File[];
  description: string;
  phoneNumber: string;
}
