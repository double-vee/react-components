import { useId, useState } from 'react';
import { Button } from '../button/Button';
import { Icon } from '../icon/Icon';
import { searchIcon } from '../icon/search';
import { TextInput } from '../input/Input';
import { COMPONENTS, type Component } from '../../data/components';
import styles from './SearchForm.module.css';

interface SearchFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  label: string;
  name: string;
  placeholder: string;
  setSearchResults: React.Dispatch<React.SetStateAction<Component[] | []>>;
}

export const SearchForm = ({
  label,
  name,
  placeholder,
  setSearchResults,
}: SearchFormProps) => {
  const [query, setQuery] = useState('');
  const id = useId();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (query.length > 0) {
      const formattedQuery = query.toLowerCase().trim();
      const filteredItems = COMPONENTS.filter((item) =>
        item.title.match(formattedQuery),
      );

      setSearchResults(filteredItems);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

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
