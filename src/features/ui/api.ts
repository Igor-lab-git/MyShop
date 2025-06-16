import {IBanner, Product} from "../../types";

export  const fetchProducts = async () : Promise<Product[]>  => { 
    try {
        const data = await fetch("https://mpedfb326bd52688a7ae.free.beeceptor.com/products");
        return await data.json();
    } catch (error) {
        console.error("Could not fetch products:", error);
       throw error;
    }
  }

  export const fetchBannerImages = async (): Promise<IBanner[]> => {
    try {
        const response = await fetch("https://mpedfb326bd52688a7ae.free.beeceptor.com/banner");
        return await response.json();
    } catch (error) {
        console.error("Could not fetch banners:", error);
        throw error;
    }
  }

 