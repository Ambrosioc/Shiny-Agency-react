import React from "react";
import Card from "../../Components/Card/Card";
import freelanceProfiles from "./freelanceProfiles";

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻 </h1>
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
    </div>
  );
}

export default Freelances;
