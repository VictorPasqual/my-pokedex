import React from 'react';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../types/pokedex';

interface PokemonListProps {
  pokemons: Pokemon[];
  onItemClick: (pokemon: Pokemon) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onItemClick }) => {

  return (
    <div>
      <ol className="pokemons">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} onPokemonClick={onItemClick} />
        ))}
      </ol>
    </div>
  );
};

export default PokemonList;
