import { useState } from 'react';
import { Link } from 'react-router';
import { SearchForm } from '../../components/search/SearchForm';
import { SectionWrapper } from '../../components/section-wrapper/SectionWrapper';
import { COMPONENTS, type Component } from '../../data/components';
import styles from './Components.module.css';

export const CategoryPage = () => {
  const [searchResults, setSearchResults] = useState<Component[]>(COMPONENTS);

  const componentList = searchResults.map((c) => (
    <Link key={c.title} to={`/components/component/${c.title}`}>
      <li>{c.title}</li>
    </Link>
  ));

  return (
    <section>
      <SectionWrapper className={styles.componentsWrapper}>
        <SearchForm
          label="Search"
          name="mainSearchForm"
          placeholder="Search"
          setSearchResults={setSearchResults}
        />
        <h2>Components:</h2>
        <ul>{componentList}</ul>
      </SectionWrapper>
    </section>
  );
};
