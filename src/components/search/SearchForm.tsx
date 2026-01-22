import { useState } from 'react';
import { TextInput } from '../input/Input';
import { COMPONENTS, type Component } from '../../data/components';
import styles from './SearchForm.module.css';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Component[]>([]);

  const list = searchResults.map((item) => (
    <li key={item.title}>{item.title}</li>
  ));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (query.length > 0) {
      const formattedQuery = query.toLowerCase().trim();
      const filteredItems = COMPONENTS.filter((item) =>
        item.title.match(formattedQuery),
      );

      setSearchResults(filteredItems);
    }
  }

  return (
    <search>
      <form
        id="searchForm"
        name="searchForm"
        className={styles.searchForm}
        onSubmit={handleSubmit}>
        <TextInput
          id="search"
          label="Search"
          name="q"
          placeholder="Search term example"
          type="search"
          variant="complex"
          value={query}
          onChange={(e) => setQuery(e.target.value)}>
          <button>Search</button>
        </TextInput>
      </form>
      <h2>Search results:</h2>
      <ul>{list}</ul>
    </search>
  );
};
