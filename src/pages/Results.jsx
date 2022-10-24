import React, { useContext } from "react";
import { SurveyContext } from "../utils/context";

function Results() {
  const { answers } = useContext(SurveyContext);
  console.log(answers);
  return <div>Ici c'est la réponse mon gars</div>;
}

export default Results;
