import { useState } from 'react';
import { NavLink } from 'react-router';
import { SearchForm } from '../search/SearchForm';
import { SectionWrapper } from '../section-wrapper/SectionWrapper';
import { type Component } from '../../data/components';
import styles from './Header.module.css';

export const Header = () => {
  const [searchResults, setSearchResults] = useState<Component[] | []>([]);

  const results = searchResults.map((item) => (
    <li key={item.title}>{item.title}</li>
  ));

  return (
    <header className={styles.header}>
      <SectionWrapper className={styles.headerWrapper}>
        <nav className={styles.headerNav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="signup">Sign up</NavLink>
          <NavLink to="login">Log in</NavLink>
        </nav>
        <SearchForm
          label="Search"
          name="headerSearchForm"
          placeholder="Search"
          setSearchResults={setSearchResults}
        />
        <h2>Search results:</h2>
        <ul>{results}</ul>
      </SectionWrapper>
    </header>
  );
};
