import { Search } from '../search/Search';
import { SectionWrapper } from '../section-wrapper/SectionWrapper';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <SectionWrapper className={styles.headerWrapper}>
        <nav className={styles.headerNav}>
          <a href="#">Nav link example</a>
          <a href="#">Nav link example</a>
        </nav>
        <Search />
      </SectionWrapper>
    </header>
  );
};
