import React from 'react';
import { Pokemon } from '../types/pokedex';

interface Props {
  pokemon: Pokemon;
  onClose: () => void;
}

const PokemonPopup: React.FC<Props> = ({ pokemon, onClose }) => {
  const fallbackImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const pokemonImage = `/assets/img/pokemons/poke_${pokemon.id}.gif`;

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;
    target.src = fallbackImage;
  };

  return (
    <div className="popup-overlay">
      <div className={`popup-content ${pokemon.type}`}>
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="pokemon-info">
         
          <div className="pokemon-details">
            <p><strong>Number:</strong> #{pokemon.number}</p>
            <p><strong>Type:</strong> {pokemon.type}</p>
            <p><strong>Types:</strong></p>
            <ul className="types-pop">
              {pokemon.types.map((type, index) => (
                <li className="type-pop" key={index}>{type}</li>
              ))}
            </ul>
            <p><strong>Height:</strong> {pokemon.height} m</p>
            <p><strong>Weight:</strong> {pokemon.weight} kg</p>
            <p><strong>Shiny Forms:</strong></p>
            <div className="shiny-forms">
              <img className="shiny-img" src={pokemon.sprites?.front_shiny} alt="Shiny Front" />
              <img className="shiny-img" src={pokemon.sprites?.back_shiny} alt="Shiny Back" />
            </div>
          </div>
        </div>
        <h2 className="pokemon-name">{pokemon.name.toUpperCase()}</h2>
        <div className="pokeimg-pop">
            <img src={pokemonImage ?  pokemonImage : fallbackImage} alt="" onError={handleImageError} />
        </div>
      </div>
    </div>
  );
};

export default PokemonPopup;
