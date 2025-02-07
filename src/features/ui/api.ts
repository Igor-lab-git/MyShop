import { Product } from "../../types";

export  const fetchProducts = async () : Promise<Product[]>  => { 
    try {
        const data = await fetch("https://mocki.io/v1/87596b30-1efb-4f97-a87c-f5843ef3b6b9");
        return await data.json();
    } catch (error) {
        console.error("Could not fetch products:", error);
       throw error;
    }
  }