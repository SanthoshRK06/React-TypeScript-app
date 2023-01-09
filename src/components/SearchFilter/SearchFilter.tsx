import { Dispatch, SetStateAction, FC } from "react";

interface SearchBoxProps {
  setSearch: Dispatch<SetStateAction<string>>;
}
const SearchFilter: FC<SearchBoxProps> = (props) => {
  const { setSearch } = props;
  return (
    <input
      onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
      type="search"
      className="block p-4 pl-5 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="Search"
    />
  );
};

export default SearchFilter;
