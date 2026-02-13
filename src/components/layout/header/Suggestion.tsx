import { Link } from 'react-router';
import { clsx as cn } from 'clsx';
import styles from './Suggestions.module.css';

interface SuggestionProps {
  resetHeaderSearch: () => void;
  index: number;
  selectedSuggestionIndex: number | null;
  title: string;
}

export const Suggestion = ({
  resetHeaderSearch,
  index,
  selectedSuggestionIndex,
  title,
}: SuggestionProps) => {
  return (
    <li
      className={cn(
        styles.suggestion,
        index === selectedSuggestionIndex && styles.selected,
      )}
    >
      <Link
        to={`/products/p/${title}`}
        onClick={resetHeaderSearch}
        className={styles.suggestionLink}
      >
        {title}
      </Link>
    </li>
  );
};
