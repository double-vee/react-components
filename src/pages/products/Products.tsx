import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ProductFilter } from './ProductFilter';
import { SectionWrapper } from '../../components/common/section-wrapper/SectionWrapper';
import { useDebounceValue } from '../../hooks/useDebounceValue';
import { useFetchData } from '../../hooks/useFetchData';
import { filterProducts } from '../../helpers/functions';
import { type Product } from '../../types/types';
import { ENDPOINT } from '../../helpers/constants';
import styles from './Products.module.css';

export const ProductPage = () => {
  const [initialProducts] = useFetchData(ENDPOINT);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounceValue(query);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q');

  let filteredProducts: Product[] = initialProducts;
  const searchTerm = debouncedQuery ? debouncedQuery : queryParam;

  if (searchTerm) {
    filteredProducts = filterProducts(searchTerm, initialProducts);
  }

  const productList = filteredProducts.map((p) => (
    <li key={p.title}>
      <Link to={`/products/p/${p.title}`}>{p.title}</Link>
    </li>
  ));

  return (
    <section>
      <SectionWrapper className={styles.productsWrapper}>
        <ProductFilter
          query={query}
          setQuery={setQuery}
          setSearchParams={setSearchParams}
        />
        <h2>Products:</h2>
        {filteredProducts.length > 0 && <ul>{productList}</ul>}
        {!filteredProducts.length && !debouncedQuery && (
          <p>We couldn't find any books :[</p>
        )}
      </SectionWrapper>
    </section>
  );
};
