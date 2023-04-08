import React, { useEffect, useState } from 'react';
import SearchPanel from '../../components/SearchPanel';
import { Character } from '../../caracterModel';
import CardList from '../../components/CardList/CardList';

const HomePage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchAndSetData();
  }, []);

  const fetchAndSetData = (searchValue = '') => {
    fetch(`https://rickandmortyapi.com/api/character?name=${searchValue}`)
      .then((res) => res.json())
      .then((characters) => {
        setCharacters(characters.results);
        setIsLoaded(true);
      });
  };

  const changeIsLoaded = () => {
    setIsLoaded(false);
  };

  return (
    <section>
      <SearchPanel fetchAndSetData={fetchAndSetData} changeIsLoaded={changeIsLoaded} />
      {!isLoaded ? (
        <div className="cardlist__block">Loading...</div>
      ) : (
        <CardList characters={characters} />
      )}
    </section>
  );
};

export default HomePage;
