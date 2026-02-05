import { Link, useSearchParams } from 'react-router';
import { SectionWrapper } from '../../components/common/section-wrapper/SectionWrapper';
import { useFetchData } from '../../hooks/useFetchData';
import { type Product } from '../../types/types';
import { filterProducts } from '../../helpers/functions';
import { ENDPOINT } from '../../helpers/constants';
import styles from './Search.module.css';

export const SearchPage = () => {
  const [initialProducts] = useFetchData(ENDPOINT);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  let filteredProducts: Product[] = [];

  if (query) {
    filteredProducts = filterProducts(query, initialProducts);
  }

  const productList = filteredProducts.map((p) => (
    <li key={p.title}>
      <Link to={`/products/p/${p.title}`}>{p.title}</Link>
    </li>
  ));

  return (
    <section>
      <SectionWrapper className={styles.searchWrapper}>
        <h2>Search results:</h2>
        {filteredProducts.length > 0 && <ul>{productList}</ul>}
        {!filteredProducts.length && (
          <p>Seems that you've searched for... nothing. Try again!</p>
        )}
      </SectionWrapper>
    </section>
  );
};
