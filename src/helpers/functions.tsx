import { PRODUCTS, type Product } from '../data/products';

export function filterProducts(query: string) {
  let filteredProducts: Product[] = PRODUCTS;

  if (query) {
    filteredProducts = filteredProducts.filter((p) =>
      p.title.toLowerCase().match(query.toLowerCase().trim()),
    );
  }

  return filteredProducts;
}
