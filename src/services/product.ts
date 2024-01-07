import { requestHandler } from "./../utils/requestHandler";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = requestHandler<undefined, Product[]>(() =>
  axios.get(`${BASE_URL}/products`)
);
