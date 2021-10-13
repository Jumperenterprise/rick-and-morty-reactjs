import React, { useEffect, useState } from "react";
import "./App.css";
import "./nprogress.css";
import CharacterName from "./components/character-name";
import CharacterImage from "./components/character-img";
import CharacterDescription from "./components/character-description";
import CharacterPlaceholder from "./components/character-placeholder";
import Layout from "./layout";
import api from "./api";
import Next from "./next";
import CharacterContext from './character-context';


function App() {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(1));
      // const character = await api.getCharacter(1)
    }
    getCharacter();
  }, []);
  return (
    <CharacterContext.Provider value={{
      character,
      setCharacter
  }}>
      {/*<Character/>*/}
      <CharacterPlaceholder name={character.name} />
      <Layout
        next={<Next/>}
        name={<CharacterName name={character.name}/>}
        image={<CharacterImage image={character.image} name={character.name} />}
        description={<CharacterDescription
          gender={character.gender}
          species={character.species}
          status={character.status}
        />}
      />
    </CharacterContext.Provider>
  );
}

export default App;
