// services/supplierService.ts
import axios from "axios";
import { Supplier } from "../types/Supplier";

const API_URL = "https://rms-service-g7uz.onrender.com";

export const fetchSuppliers = async (): Promise<Supplier[]> => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get<{ suppliers: Supplier[] }>(
      `${API_URL}/suppliers/all?token=${token}`
    );
    return response.data.suppliers;
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    throw error;
  }
};
