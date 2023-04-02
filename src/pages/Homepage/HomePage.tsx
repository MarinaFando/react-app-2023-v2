import React, { useEffect, useState } from 'react';
import SearchPanel from '../../components/SearchPanel';
import { Sneaker } from '../../App';
import CardList from '../../components/CardList/CardList';

interface HomePageProps {
  items: Sneaker[];
}
interface HomePageState {
  searchValue: string;
}

const HomePage = ({items}: HomePageProps) => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '')

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValue);
    }
  }, [searchValue])

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

    return (
      <section>
        <SearchPanel
          searchValue={searchValue}
          onSearchValueChange={onSearchValueChange}
        />
        <CardList items={items} searchValue={searchValue} />
      </section>
    );
}

export default HomePage;
