import React from "react";

export default function Characters(props) {
  
  // extrae de los props el objeto characters y el callback para resetear
  // para volver a inicio
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    setCharacters(null);
  };

  //console.log(characters);

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>
        Regresar a Inicio
      </span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive">Vivo</span>
                  </>
                ) : (
                  <>
                    <span className="dead">Muerto</span>
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        Regresar a Inicio
      </span>
    </div>
  );
}
