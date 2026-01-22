import { NavLink } from 'react-router';
import { SearchForm } from '../search/SearchForm';
import { SectionWrapper } from '../section-wrapper/SectionWrapper';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <SectionWrapper className={styles.headerWrapper}>
        <nav className={styles.headerNav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="signup">Sign up</NavLink>
          <NavLink to="login">Log in</NavLink>
        </nav>
        <SearchForm />
      </SectionWrapper>
    </header>
  );
};
