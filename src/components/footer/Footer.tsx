import { SectionWrapper } from '../section-wrapper/SectionWrapper';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SectionWrapper className={styles.footerWrapper}>
        <nav className={styles.footerNav}>
          <a href="#">Footer link</a>
          <a href="#">Footer link</a>
          <a href="#">Footer link</a>
        </nav>
      </SectionWrapper>
    </footer>
  );
};
