import React from "react";
import styled from "styled-components";

const CharacterImageStyled = styled.div`
  img {max-width: 100%;
  /* width: auto; */
  border-radius: 50%;
  }
`;

function CharacterImage({ image, name }) {
  return (
    <CharacterImageStyled>
      <img src={image} alt={name}/>
    </CharacterImageStyled>
  );
}

export default CharacterImage;
