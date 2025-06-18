import {IBanner, Product} from "../../types";

export  const fetchProducts = async () : Promise<Product[]>  => { 
    try {
        const data = await fetch("https://mocki.io/v1/36d4f429-74ce-4536-bce4-303a5c5d86ef");
        return await data.json();
    } catch (error) {
        console.error("Could not fetch products:", error);
       throw error;
    }
  }

  export const fetchBannerImages = async (): Promise<IBanner[]> => {
    try {
        const response = await fetch("https://mocki.io/v1/9748ceba-21d0-4e4b-a772-42e9362f69e9");
        return await response.json();
    } catch (error) {
        console.error("Could not fetch banners:", error);
        throw error;
    }
  }

 