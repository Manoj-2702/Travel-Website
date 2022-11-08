import React from "react";
import profile from "../assests/india.jpg";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  padding: 3em;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
  border: 2px solid #000;
  border-radius: 50%;
`;

const StyledH1 = styled.h1`
  line-heright: 1.5;
  letter-spacing: 1.5;
  font-family: "Arial";
`;

const StyledH3 = styled.h3`
  line-heright: 1.5;
  letter-spacing: 1.15;
  font-family: "Gilroy";
  font-size: 20px;
`;

const GlassCard = (props) => {
  return (
    <Container>
      <button onClick={() => {props.setPopup(false);}}> X </button>
      <StyledImg src={profile} />
      <StyledH1>Taj Mahal</StyledH1>
      <StyledH3>
        One among the 7 wonders of the world.
        <br />
      </StyledH3>
      <button onClick={() => {props.setPopup(false);}}> Cancel </button>
    </Container>
  );
};

export default GlassCard;
