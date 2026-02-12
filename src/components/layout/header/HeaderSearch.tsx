import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { SearchForm } from '../../common/search/SearchForm';
import { SuggestionList } from './SuggestionList';
import {
  debounce,
  filterProducts,
  limitProducts,
} from '../../../helpers/functions';
import { ENDPOINT } from '../../../helpers/constants';
import { type Product } from '../../../types/types';
import styles from './HeaderSearch.module.css';

export const HeaderSearch = () => {
  const [initialProducts] = useFetchData(ENDPOINT);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[] | []>([]);
  const navigate = useNavigate();

  const setDebouncedSuggestions = debounce(
    (input: string, products: Product[]) => {
      const filtered = filterProducts(input, products);
      const sliced = limitProducts(filtered);

      setSuggestions(sliced);
    },
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setQuery(input);
    setDebouncedSuggestions(input, initialProducts);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search?q=${query}`);
    setQuery('');
    setSuggestions([]);
  }

  function handleSelectSuggestion() {
    setQuery('');
    setSuggestions([]);
  }

  return (
    <section className={styles.headerSearchSection}>
      <SearchForm
        label="Page search"
        name="pageSearchForm"
        placeholder="Search"
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {suggestions.length > 0 && (
        <SuggestionList
          suggestions={suggestions}
          handleSelectSuggestion={handleSelectSuggestion}
        />
      )}
    </section>
  );
};
