import { useParams } from 'react-router';

import styles from './Product.module.css';

export const ProductDetailsPage = () => {
  const { productId } = useParams();

  const title = productId
    ? productId[0].toUpperCase() + productId.slice(1)
    : undefined;

  return (
    <article>
      <h2>{title}</h2>
    </article>
  );
};
