import React from 'react';

// Ajoute un paramètre props à la fonction PokemonCard
const PokemonCard = (props) => {
  // Utilise console.log(props) pour afficher l'objet props dans la console
  console.log(props);

  // Étape 3: Rendre le composant dynamique
  const { pokemon } = props; // Utilise la prop pour obtenir le Pokémon

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
