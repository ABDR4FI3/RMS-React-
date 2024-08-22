// services/categoryService.ts
import axios from "axios";
import { Category } from "../types/Category";

const BASE_URL = "https://rms-service-g7uz.onrender.com/category/all";

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await axios.get<{ categories: Category[] }>(BASE_URL);
  return response.data.categories;
};
