import React, { useState } from "react";
import styled from "styled-components";

// <== this is a styled component that will be used in the Home component only and will be scoped to the Home component only ==>
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Ballon = styled.div`
  height: 100px;
  width: 100px;
  background-color: #5843e4;
  border-radius: 50%;
  transform: scale(${(props) => props.size});
`;

function Home() {
  const [size, setSize] = useState(1);
  return (
    <HomeContainer>
      <h1 onClick={() => setSize(size + 0.1)}>Page d'accueil 🏠</h1>
      <Ballon size={size} />
    </HomeContainer>
  );
}

export default Home;
