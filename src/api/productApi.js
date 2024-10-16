import axios from "axios";

const API_URL = "https://bol.com/api/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(API_URL, product, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const updateProduct = async (productId, updatedProduct) => {
  // TODO
};

export const deleteProduct = async (productId) => {
  // TODO
};
