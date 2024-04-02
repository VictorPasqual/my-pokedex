import React, { useState, useEffect } from 'react';
import SelectGeneration from '../components/SelectGeneration';
import PokemonList from '../components/PokemonList';
import LoadMoreButton from '../components/LoadMoreButton';
import PokemonPopup from '../components/PokemonPopup';
import { Pokemon } from '../types/pokedex';
import logo from '../../public/assets/img/pokemon-logo.png';
import Image from 'next/image';
import SelectType from '../components/SelectType';

interface PokemonAPI {
  getPokemonDetail: (pokemon: any) => Promise<Pokemon>;
  getPokemons: (offset: number, limit: number) => Promise<Pokemon[]>;
}

const processNumber = (number: number): string => {
  if (number >= 0 && number <= 9) {
    return `00${number}`;
  } else if (number >= 10 && number <= 99) {
    return `0${number}`;
  } else {
    return number.toString();
  }
};

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [countRecords, setCountRecords] = useState(0);
  const [selectGen, setSelectGen] = useState('gen_1');
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('');
  const limit = 10;
  const maxRecords: { [key: string]: number } = {
    gen_1: 151,
    gen_2: 100,
    gen_3: 135,
    gen_4: 107,
    gen_5: 156,
    gen_6: 72,
    gen_7: 88,
    gen_8: 89,
    gen_9: 89,
  };
  const generations: { [key: string]: number } = {
    gen_1: 0,
    gen_2: 151,
    gen_3: 251,
    gen_4: 386,
    gen_5: 493,
    gen_6: 649,
    gen_7: 721,
    gen_8: 809,
    gen_9: 898,
  };

  useEffect(() => {
    loadPokemonItems(offset, limit);
  }, [offset, selectGen, selectedType]);

  const pokeApi: PokemonAPI = {
    getPokemonDetail: (pokemon: any) => {
      return fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          const { id, name, types, height, weight, sprites } = data;
          const pokemonDetail: Pokemon = {
            id,
            number: processNumber(id),
            name,
            type: types[0].type.name,
            types: types.map((typeSlot: any) => typeSlot.type.name),
            height,
            weight,
            sprites,
          };
          return pokemonDetail;
        });
    },
    getPokemons: (offset: number = 0, limit: number = 10) => {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
      return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => Promise.all(pokemons.map(pokeApi.getPokemonDetail)))
        .catch((error) => console.error(error));
    },
  };

  const loadPokemonItems = (offset: number, limit: number) => {
    setIsLoading(true);
    const genStart = generations[selectGen];
    const genEnd = generations[selectGen] + maxRecords[selectGen];
    
    if (selectedType === "") {
        pokeApi.getPokemons(offset, limit)
        .then((pokemons: Pokemon[]) => {
          setPokemons((prevPokemons) => [...prevPokemons, ...pokemons]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching pokemons:', error);
          setIsLoading(false);
        });
    } else {
      const pokemonPromises: Promise<Pokemon[]>[] = [];
      for (let i = genStart; i < genEnd; i += limit) {
        pokemonPromises.push(pokeApi.getPokemons(i, limit));
      }
  
      Promise.all(pokemonPromises)
        .then((results: Pokemon[][]) => {
          const allPokemons = results.flat();
          const filteredPokemons = selectedType ? allPokemons.filter(pokemon => pokemon.types.includes(selectedType)) : allPokemons;
          setPokemons(filteredPokemons);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching pokemons:', error);
          setIsLoading(false);
        });
    }
  };

  const handleLoadMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    setCountRecords(countRecords + limit);
  };

  const handleSelectGenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGen = event.target.value;
    setSelectGen(selectedGen);
    setPokemons([]);
    setCountRecords(0);
    setOffset(generations[selectedGen]);
    setHasMore(true);
  };

  const handleSelectTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);
    setPokemons([]);
    setCountRecords(0);
    setOffset(0);
    setHasMore(true);
  };

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="container" style={{ backgroundColor: '#ee1515', minHeight: '100vh', textAlign: 'center' }}>
      <Image src={logo} alt="Pokedex Logo" className="logo-img" />   
      <div className="main-content">
        <div className="filters-container">
          <SelectGeneration onSelectChange={handleSelectGenChange} />
          <SelectType onSelectChange={handleSelectTypeChange} />
        </div>
        <PokemonList pokemons={pokemons} onItemClick={handlePokemonClick} />
        <LoadMoreButton onClick={handleLoadMore} isLoading={isLoading} hasMore={hasMore}/>
        {isPopupOpen && selectedPokemon && (
          <PokemonPopup pokemon={selectedPokemon} onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
};

export default App;
