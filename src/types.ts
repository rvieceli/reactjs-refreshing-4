export interface FoodDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export type FoodFormDTO = Omit<FoodDTO, "id" | "available">;
