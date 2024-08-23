function getPokemonData(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Process the data here
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Usage
 console.log(getPokemonData('pikachu'));
