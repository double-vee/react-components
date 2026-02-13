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
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<
    number | null
  >(null);
  const navigate = useNavigate();

  const setDebouncedSuggestions = debounce(
    (input: string, products: Product[]) => {
      const filtered = filterProducts(input, products);
      const sliced = limitProducts(filtered);

      setSuggestions(sliced);
      setSelectedSuggestionIndex(null);
    },
  );

  function resetHeaderSearch() {
    setQuery('');
    setSuggestions([]);
    setSelectedSuggestionIndex(null);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setQuery(input);
    setDebouncedSuggestions(input, initialProducts);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search?q=${query}`);
    resetHeaderSearch();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!suggestions || suggestions.length === 0) {
      return;
    }

    // Arrows:

    if (e.key === 'ArrowDown') {
      const nextIndex =
        selectedSuggestionIndex === null ||
        selectedSuggestionIndex === suggestions.length - 1
          ? 0
          : selectedSuggestionIndex + 1;

      const { title } = suggestions[nextIndex];

      setSelectedSuggestionIndex(nextIndex);
      setQuery(title);
    }

    if (e.key === 'ArrowUp') {
      const prevIndex = !selectedSuggestionIndex
        ? suggestions.length - 1
        : selectedSuggestionIndex - 1;

      const { title } = suggestions[prevIndex];

      setSelectedSuggestionIndex(prevIndex);
      setQuery(title);
    }

    // Esc:

    if (e.key === 'Esc') {
      resetHeaderSearch();
    }
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
        handleKeyDown={handleKeyDown}
      />
      {suggestions.length > 0 && (
        <SuggestionList
          suggestions={suggestions}
          selectedSuggestionIndex={selectedSuggestionIndex}
          resetHeaderSearch={resetHeaderSearch}
        />
      )}
    </section>
  );
};
