import { useId } from 'react';
import { Button } from '../button/Button';
import { Icon } from '../icon/Icon';
import { searchIcon } from '../icon/search';
import { TextInput } from '../input/Input';
import styles from './SearchForm.module.css';

interface SearchFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  label: string;
  name: string;
  placeholder: string;
  query?: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
  handleKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const SearchForm = ({
  className,
  label,
  name,
  placeholder,
  query,
  handleChange,
  handleSubmit,
  handleKeyDown,
}: SearchFormProps) => {
  const id = useId();

  return (
    <search className={className}>
      <form
        id={`searchForm-${id}`}
        name={name}
        className={styles.searchForm}
        onSubmit={handleSubmit}
      >
        <TextInput
          id={`searchInput-${id}`}
          label={label}
          name="q"
          placeholder={placeholder}
          type="search"
          variant="complex"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        >
          <Button label="Submit search term">
            <Icon path={searchIcon} />
          </Button>
        </TextInput>
      </form>
    </search>
  );
};
