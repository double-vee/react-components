import { type Product } from '../types/types';

export function filterProducts(query: string, products: Product[]) {
  let filteredProducts: Product[] = [];

  if (query) {
    filteredProducts = products.filter((p) =>
      p.title.toLowerCase().match(query.toLowerCase().trim()),
    );
  }

  return filteredProducts;
}

export function limitProducts(products: Product[]) {
  return products.slice(0, 9);
}

export function debounce<T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number = 300,
) {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: T) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => cb(...args), delay);
  };
}

export async function fetchData(endpoint: string) {
  try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error('Something went wrong.');
    }

    return await res.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
}
