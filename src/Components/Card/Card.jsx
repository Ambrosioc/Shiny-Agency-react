import React from "react";
import PropTypes from "prop-types";

// <== props is an object and i can destructure it Card({jobTitle, picture, name}) ==>
function Card(props) {
  // <= this is a component that will render a card with the props passed to it
  return (
    <div style={{ display: "flex", flexDirection: "colum", padding: 15 }}>
      <span>{props.label}</span>
      <img src={props.picture} alt="freelance" heignt={80} width={80} />
      <span>{props.title}</span>
    </div>
  );
}

// <== this is a prop type validation ==>
Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired, // <= this is a prop type required
  picture: PropTypes.string,
};

// <== this is the default value for the props ==>
Card.defaultProps = {
  label: "Dev Freelance",
};

export default Card;
