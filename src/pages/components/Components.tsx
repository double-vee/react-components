import { Link } from 'react-router';

import { COMPONENTS } from '../../data/components';
import styles from './Components.module.css';

export const CategoryPage = () => {
  const url = '/components/component/';

  const componentList = COMPONENTS.map((c) => (
    <Link key={c.title} to={`${url}${c.title}`}>
      <li>{c.title}</li>
    </Link>
  ));

  return (
    <section>
      <h2>Components:</h2>
      <ul>{componentList}</ul>
    </section>
  );
};
