import { Link } from 'react-router';
import styles from './Suggestions.module.css';

interface SuggestionProps {
  handleSelectSuggestion: () => void;
  title: string;
}

export const Suggestion = ({
  handleSelectSuggestion,
  title,
}: SuggestionProps) => {
  return (
    <li className={styles.suggestion}>
      <Link
        to={`/products/p/${title}`}
        onClick={handleSelectSuggestion}
        className={styles.suggestionLink}>
        {title}
      </Link>
    </li>
  );
};
