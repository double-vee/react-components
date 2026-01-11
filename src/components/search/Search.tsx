import { TextInput } from '../input/Input';
import styles from './Search.module.css';

export const Search = ({ ...props }) => {
  return (
    <form
      id="searchForm"
      name="searchForm"
      role="search"
      className={styles.searchForm}
      {...props}
    >
      <TextInput
        id="search"
        label="Search"
        name="q"
        placeholder="Search term example"
        type="search"
        variant="complex"
      >
        <button>Search</button>
      </TextInput>
    </form>
  );
};
