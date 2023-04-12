import React, { useEffect, useState } from 'react';
import SearchPanel from '../../components/SearchPanel';
import CardList from '../../components/CardList/CardList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const searchValue = useAppSelector((state) => state.searchText.searchText);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchAndSetData(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAndSetData = (searchValue: string) => {
    fetch(`https://rickandmortyapi.com/api/character?name=${searchValue}`)
      .then((res) => res.json())
      .then((characters) => {
        dispatch({ type: 'SET_SEARCH_RESULTS', payload: characters.results });
        setIsLoaded(true);
      });
  };

  const changeIsLoaded = () => {
    setIsLoaded(false);
  };

  return (
    <section>
      <SearchPanel fetchAndSetData={fetchAndSetData} changeIsLoaded={changeIsLoaded} />
      {!isLoaded ? <div className="cardlist__block">Loading...</div> : <CardList />}
    </section>
  );
};

export default HomePage;
