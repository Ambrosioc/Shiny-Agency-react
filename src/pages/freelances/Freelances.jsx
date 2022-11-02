import React from "react";
import Card from "../../Components/cards/Card";
import styled from "styled-components";

import { useFetch } from "../../utils/hooks";
import { Loader } from "../../utils/styles/Loader";

// <== this is a styled component that will be used in the Freelances component only and will be scoped to the Freelances component only ==>

const ProfilsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  grid-templete-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  );
  const { freelancersList } = data;
  if (error) {
    return <span>Il ya un problème</span>;
  }
  return (
    <ProfilsContainer>
      <h1>Trouvez votre prestataire</h1>
      <p>Chez Shiny nous réunissons les meilleurs profils pour vous. 😌</p>
      {isLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </ProfilsContainer>
  );
}

export default Freelances;
