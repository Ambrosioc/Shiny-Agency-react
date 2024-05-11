import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../Components/cards/Card';
import { useFetch, useTheme } from '../../utils/hooks';
import { Loader } from '../../utils/styles/Loader';

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

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

function Freelances() {
  const { data, isLoading, error } = useFetch(`http://localhost:8000/freelances`);
  const { freelancersList } = data;
  const { theme } = useTheme();

  if (error) {
    return <span>Il ya un problème</span>;
  }
  return (
    <ProfilsContainer>
      <h1>Trouvez votre prestataire</h1>
      <p>Chez Shiny nous réunissons les meilleurs profils pour vous. 😌</p>
      {isLoading ? (
        <Loader data-testid="loder" />
      ) : (
        <CardsContainer>
          {freelancersList.map(profile => {
            return (
              <LinkStyled key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
                <Card label={profile.jobTitle} picture={profile.picture} title={profile.name} theme={theme} />
              </LinkStyled>
            );
          })}
        </CardsContainer>
      )}
    </ProfilsContainer>
  );
}

export default Freelances;
