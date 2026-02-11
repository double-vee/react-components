import { type SetURLSearchParams } from 'react-router';
import { SearchForm } from '../../components/common/search/SearchForm';
import { Button } from '../../components/common/button/Button';
import { Icon } from '../../components/common/icon/Icon';
import { resetIcon } from '../../components/common/icon/reset';
import styles from './ProductFilter.module.css';

interface ProductFilterProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchParams: SetURLSearchParams;
}

export const ProductFilter = ({
  query,
  setQuery,
  setSearchParams,
}: ProductFilterProps) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchParams(`?q=${query}`);
    setQuery('');
  }

  function handleReset() {
    setSearchParams('');
    setQuery('');
  }

  return (
    <div className={styles.productFilterWrapper}>
      <SearchForm
        label="Product filter"
        name="productFilterForm"
        placeholder="Filter products by title"
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        className={styles.productFilterSearch}
      />
      <Button
        label="Reset filter"
        className={styles.productFilterReset}
        onClick={handleReset}>
        <Icon path={resetIcon} />
      </Button>
    </div>
  );
};
