import { Suggestion } from './Suggestion';
import { type Product } from '../../../types/types';
import styles from './Suggestions.module.css';

interface SuggestionListProps {
  resetHeaderSearch: () => void;
  suggestions: Product[] | [];
  selectedSuggestionIndex: number | null;
}

export const SuggestionList = ({
  resetHeaderSearch,
  suggestions,
  selectedSuggestionIndex,
}: SuggestionListProps) => {
  const list = suggestions.map(({ title }, i) => (
    <Suggestion
      key={title}
      index={i}
      selectedSuggestionIndex={selectedSuggestionIndex}
      title={title}
      resetHeaderSearch={resetHeaderSearch}
    />
  ));

  return <ul className={styles.suggestionList}>{list}</ul>;
};
