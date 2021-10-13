import React from "react";
import styled from "styled-components";

const SocialStyled = styled.div`
    @media screen and (max-width: 1024px) {
        a {
            margin-left: 2em;
        }
        a:first-child {
            margin-left: 0;
        };
    }`

function Social() {
  return (
    <SocialStyled>
      <a href="https://www.instagram.com/jumper_enterprise">
        <img src="./images/instagram.svg" alt="" />
      </a>
      <a href="https://www.facebook.com/jumper_enterprise-102344978090796">
        <img src="./images/facebook.svg" alt="" />
      </a>
      <a href="https://twitter.com/jumper_Develop">
        <img src="./images/twitter.svg" alt="" />
      </a>
    </SocialStyled>
  );
}

export default Social;
