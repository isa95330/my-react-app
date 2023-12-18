// PokemonCard.jsx

import React from 'react';

const PokemonCard = () => {
  // Étape 2: Ajouter des données Pokémon
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

  // Étape 3: Rendre le composant dynamique
  const pokemon = pokemonList[0]; // Changer l'index pour sélectionner un autre Pokémon

  // Étape 4: Affichage de l'image
  const imageElement = pokemon.imgSrc ? (
    <img src={pokemon.imgSrc} alt={pokemon.name} />
  ) : (
    <p>???</p>
  );

  // Affichage du composant PokemonCard
  return (
    <figure>
      {imageElement}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

export default PokemonCard;
