import { requestHandler } from "../utils/requestHandler";
import axios from "axios";
import { ProductType } from "../types/product";

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = requestHandler<undefined, ProductType[]>(() =>
  axios.get(`${BASE_URL}/products`)
);
