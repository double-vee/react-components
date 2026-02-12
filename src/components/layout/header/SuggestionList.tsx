import { Suggestion } from './Suggestion';
import { type Product } from '../../../types/types';
import styles from './Suggestions.module.css';

interface SuggestionListProps {
  handleSelectSuggestion: () => void;
  suggestions: Product[] | [];
}

export const SuggestionList = ({
  handleSelectSuggestion,
  suggestions,
}: SuggestionListProps) => {
  const list = suggestions.map(({ title }) => (
    <Suggestion
      key={title}
      title={title}
      handleSelectSuggestion={handleSelectSuggestion}
    />
  ));

  return <ul className={styles.suggestionList}>{list}</ul>;
};
