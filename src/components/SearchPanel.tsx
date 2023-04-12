import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import '../styles/SearchPanel.css';

interface SearchPanelProps {
  fetchAndSetData: (searchValue: string) => void;
  changeIsLoaded: () => void;
}

const SearchPanel = ({ fetchAndSetData, changeIsLoaded }: SearchPanelProps) => {
  const searchValue = useAppSelector((state) => state.searchText.searchText);
  const dispatch = useAppDispatch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      changeIsLoaded();
      fetchAndSetData(searchValue);
    }
  };

  const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH_TEXT', payload: e.target.value });
  };

  return (
    <section className="block">
      <div className="search__block">
        <img className="search__block-icon" src="img/search.svg" />
        <input
          name="inputvalue"
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={onSearchValueChange}
          onKeyPress={handleKeyDown}
        />
      </div>
    </section>
  );
};

export default SearchPanel;
