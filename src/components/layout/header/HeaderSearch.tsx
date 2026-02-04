import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { SearchForm } from '../../common/search/SearchForm';
import { type Product } from '../../../data/products';
import { filterProducts } from '../../../helpers/functions';
import styles from './HeaderSearch.module.css';

export const HeaderSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[] | []>([]);

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setQuery(input);
    setSuggestions(input ? filterProducts(input).slice(0, 6) : []);
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

  const suggestionList = suggestions.map((product) => (
    <li key={product.title} className={styles.headerSearchSuggestion}>
      <Link
        to={`/products/p/${product.title}`}
        onClick={handleSelectSuggestion}>
        {product.title}
      </Link>
    </li>
  ));

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
      {query && <SuggestionList list={suggestionList} />}
    </section>
  );
};

interface SuggestionListProps {
  list: React.JSX.Element[];
}

const SuggestionList = ({ list }: SuggestionListProps) => {
  return <ul className={styles.headerSearchSuggestionList}>{list}</ul>;
};
