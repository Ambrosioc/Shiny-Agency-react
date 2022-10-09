import React, { useEffect, useState } from "react";
import Card from "../../Components/cards/Card";
import styled from "styled-components";
import { Loader } from "../../utils/Loader";

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
  const [freelancersList, setFreelancersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8000/freelances`)
      .then((response) => response.json())
      .then((data) => setFreelancersList(data.freelancersList))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, []);
  return (
    <ProfilsContainer>
      <h1>Trouvez votre prestataire</h1>
      <p>Chez Shiny nous réunissons les meilleurs profils pour vous. 😌</p>
      {isLoading ? (
        <>
          <h1>Chargement en cours...</h1>
          <Loader />
        </>
      ) : (
        <CardsContainer>
          {freelancersList.map(
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
      )}
    </ProfilsContainer>
  );
}

export default Freelances;
