import { useParams } from 'react-router';

import styles from './Component.module.css';

export const ComponentPage = () => {
  const { componentId } = useParams();

  const title = componentId
    ? componentId[0].toUpperCase() + componentId.slice(1)
    : undefined;

  return (
    <article>
      <h2>{title}</h2>
    </article>
  );
};
