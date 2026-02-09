import { Briefcase, Watch, Gem, ShoppingBag, HelpCircle } from "lucide-react";

export type RepairCategory = "bag" | "watch" | "jewelry" | "shoes" | "other";

export interface CategoryOption {
  value: RepairCategory;
  label: string;
  icon: typeof Briefcase;
  description: string;
}

export const REPAIR_CATEGORIES: CategoryOption[] = [
  {
    value: "bag",
    label: "가방",
    icon: ShoppingBag,
    description: "명품 가방 수선 및 복원",
  },
  {
    value: "watch",
    label: "시계",
    icon: Watch,
    description: "고급 시계 수리 및 관리",
  },
  {
    value: "jewelry",
    label: "주얼리",
    icon: Gem,
    description: "주얼리 수선 및 리폼",
  },
  {
    value: "shoes",
    label: "신발",
    icon: Briefcase,
    description: "럭셔리 슈즈 복원",
  },
  {
    value: "other",
    label: "기타",
    icon: HelpCircle,
    description: "기타 명품 수선",
  },
];
