import React from 'react';
import '../styles/SearchPanel.css';

interface SearchPanelProps {
  searchValue: string;
  onSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchPanel = ({ searchValue, onSearchValueChange }: SearchPanelProps) => {
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
        />
      </div>
    </section>
  );
};

export default SearchPanel;
