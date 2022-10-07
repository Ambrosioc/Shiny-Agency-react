import React from "react";
import Card from "../../components/card/Card";
import freelanceProfiles from "./freelanceProfiles";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-templete-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻 </h1>
      <CardsContainer>
        {freelanceProfiles.map(
          (
            profile,
            index // <= this is a map function that will loop through the freelanceProfiles array
          ) => (
            <Card // <= this is a component
              key={`${profile.name}-${index}`} // <= this is a key for the component to be unique in the list of components
              label={profile.jobTitle} // <= this is a prop that will be passed to the component
              picture={profile.picture} // <= this is a prop that will be passed to the component
              title={profile.name} // <= this is a prop that will be passed to the component
            />
          )
        )}
      </CardsContainer>
    </div>
  );
}

export default Freelances;
