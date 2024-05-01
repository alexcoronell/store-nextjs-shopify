import { env } from "app/config/env";
import { shopifyUrl } from "./urls";

export const getProducts = async () => {
    try {
      const response = await fetch(shopifyUrl.products.all,
        {
          headers: new Headers({
            "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
          }),
        }
      );
      const { products } = await response.json();
      return products;
    } catch (e) {
      console.error(e);
    }
  };