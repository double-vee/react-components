import { SearchForm } from '../../components/common/search/SearchForm';

interface ProductFilterProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const ProductFilter = ({ query, setQuery }: ProductFilterProps) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQuery('');
  }

  return (
    <>
      <SearchForm
        label="Product filter"
        name="productFilterForm"
        placeholder="Filter products by title"
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
