import React from 'react';
import { Pokemon } from '../types/pokedex';

interface PokemonCardProps {
  pokemon: Pokemon;
  onPokemonClick: (pokemon: Pokemon) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onPokemonClick }) => {

  const fallbackImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const pokemonImage = `/assets/img/pokemons/poke_${pokemon.id}.gif`;

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;
    target.src = fallbackImage;
  };

  return (
    <li className={`pokemon ${pokemon.type}`} onClick={() => onPokemonClick(pokemon)}>
      <div className="pokeinfo">
        <span className="name" style={{ fontWeight: 'bold' }}>
          {pokemon.name}
        </span>
        <span className="number">#{pokemon.number}</span>
        <ol className="types">
          {pokemon.types.map((type, index) => (
            <li className="type" key={index}>
              {type}
            </li>
          ))}
        </ol>
      </div>
      <div className="pokeimg">
          <img src={pokemonImage ?  pokemonImage : fallbackImage} alt="" onError={handleImageError} />
      </div>
    </li>
  );
};

export default PokemonCard;

