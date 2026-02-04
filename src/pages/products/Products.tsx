import { useState } from 'react';
import { Link } from 'react-router';
import { PRODUCTS, type Product } from '../../data/products';
import { ProductFilter } from './ProductFilter';
import { SectionWrapper } from '../../components/common/section-wrapper/SectionWrapper';
import { filterProducts } from '../../helpers/functions';
import styles from './Products.module.css';

export const ProductPage = () => {
  const [query, setQuery] = useState('');

  let products: Product[] = PRODUCTS;

  if (query) {
    products = filterProducts(query);
  }

  const productList = products.map((p) => (
    <li key={p.title}>
      <Link to={`/products/p/${p.title}`}>{p.title}</Link>
    </li>
  ));

  return (
    <section>
      <SectionWrapper className={styles.productsWrapper}>
        <ProductFilter query={query} setQuery={setQuery} />
        <h2>Products:</h2>
        <ul>{productList}</ul>
      </SectionWrapper>
    </section>
  );
};
