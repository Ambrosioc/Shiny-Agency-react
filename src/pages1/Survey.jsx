import React from "react";
import { Link, useParams } from "react-router-dom";

function Survey() {
  const { questionNumber } = useParams(); // <= this is a hook that will get the params from the url
  const questionNumberInt = parseInt(questionNumber); // <= this is a function that will convert the string to an integer
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1; // <= this is a ternary operator that will check if the questionNumberInt is equal to 1 if it is it will return 1 else it will return questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1; // <= this is a simple variable that will add 1 to the questionNumberInt

  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Previous</Link>
      {questionNumberInt === 10 ? (
        <Link to="/results">Resultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link> // <= this is a ternary operator that will check if the questionNumberInt is equal to 10 if it is it will return a link to the results page else it will return a link to the next question
      )}
    </div>
  );
}

export default Survey;
