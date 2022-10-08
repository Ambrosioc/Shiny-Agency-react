import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/styles/colors";

const SurveyConainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:hover {
    margin-right: 20px;
  }
`;

function Survey() {
  const { questionNumber } = useParams(); // <= this is a hook that will get the params from the url
  const questionNumberInt = parseInt(questionNumber); // <= this is a function that will convert the string to an integer
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1; // <= this is a ternary operator that will check if the questionNumberInt is equal to 1 if it is it will return 1 else it will return questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1; // <= this is a simple variable that will add 1 to the questionNumberInt

  return (
    <SurveyConainter>
      <QuestionTitle>Questionnaire</QuestionTitle>
      <QuestionContent>Question {questionNumber}</QuestionContent>
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Previous</Link>
        {questionNumberInt === 10 ? (
          <Link to="/results">Resultats</Link>
        ) : (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link> // <= this is a ternary operator that will check if the questionNumberInt is equal to 10 if it is it will return a link to the results page else it will return a link to the next question
        )}
      </LinkWrapper>
    </SurveyConainter>
  );
}

export default Survey;
