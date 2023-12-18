import React from 'react';
import PokemonCard from './components/PokemonCard';

const App = () => {
  // Déplacer le tableau pokemonList vers le composant App
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  // Transmettre un Pokémon à PokemonCard via une prop
  const pokemon = pokemonList[0]; // Choisissez le Pokémon que vous souhaitez transmettre

  return (
    <div>
      {/* Utilisation du composant PokemonCard avec la prop pokemon */}
      <PokemonCard pokemon={pokemon} />
    </div>
  );
};



export default App;
