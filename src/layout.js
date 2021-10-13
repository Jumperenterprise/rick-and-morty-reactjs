import React from "react";
import styled from "styled-components";
import Social from "./components/social";

const LayoutStyled = styled.div`
  .character-name-area {
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    grid-area: character-name;
    /* padding-inline-start: 1em; */
  }
  .character-description-area {
    grid-area: character-description;
  }
  .character-image-area {
    grid-area: avatar;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-next-area {
    grid-area: arrow;
    display: flex;
  }
  .social-area {
    grid-area: social;
    /* border: 1px solid red; */
  }
  @media screen and (max-width: 1024px) {
    .character-name-area {
      margin-top: 1em;
      justify-content: center;
    }
    .social-area {
      text-align: center;
      margin-top: 2em;
    }
  }
`;

function Layout({ name, image, description, next }) {
  return (
    <LayoutStyled>
      <div className="placeholder-container"></div>
      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img className="logo" src="./images/logo@2x.png" width="280" alt="" />
        <div className="social-area">
          <Social />
        </div>
        <div className="navigation name">
          <a href="#">Name</a>
        </div>
        <div className="character-name-area">{name}</div>
        <div className="character-image-area">{image}</div>
        <div
          id="character-image-container"
          className="character-image-container"
        ></div>
        <div className="navigation about">
          <a href="#">About</a>
        </div>
        <div className="character-description-area">{description}</div>
        <span className="asset bottom">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>

        <div></div>
        <div className="learn-more">
          <span>learn more</span>
        </div>
        <div className="grid-next-area">{next}</div>
      </div>
    </LayoutStyled>
  );
}

export default Layout;
