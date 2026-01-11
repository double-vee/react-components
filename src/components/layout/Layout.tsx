import { Outlet } from 'react-router';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layoutMain}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
