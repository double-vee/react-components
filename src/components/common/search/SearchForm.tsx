import { useId } from 'react';
import { Button } from '../button/Button';
import { Icon } from '../icon/Icon';
import { searchIcon } from '../icon/search';
import { TextInput } from '../input/Input';
import styles from './SearchForm.module.css';

interface SearchFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  label: string;
  name: string;
  placeholder: string;
  query?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchForm = ({
  label,
  name,
  placeholder,
  query,
  handleChange,
  handleSubmit,
}: SearchFormProps) => {
  const id = useId();

  return (
    <search>
      <form
        id={`searchForm-${id}`}
        name={name}
        className={styles.searchForm}
        onSubmit={handleSubmit}>
        <TextInput
          id={`searchInput-${id}`}
          label={label}
          name="q"
          placeholder={placeholder}
          type="search"
          variant="complex"
          value={query}
          onChange={handleChange}>
          <Button label="Submit search term">
            <Icon path={searchIcon} />
          </Button>
        </TextInput>
      </form>
    </search>
  );
};
