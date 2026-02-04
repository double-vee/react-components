import { Link, useSearchParams } from 'react-router';
import { SectionWrapper } from '../../components/common/section-wrapper/SectionWrapper';
import { type Product } from '../../data/products';
import { filterProducts } from '../../helpers/functions';
import styles from './Search.module.css';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  let products: Product[] = [];

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
      <SectionWrapper className={styles.searchWrapper}>
        <h2>Search results:</h2>
        <ul>{productList}</ul>
      </SectionWrapper>
    </section>
  );
};
