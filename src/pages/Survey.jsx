import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../utils/Loader";
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
  & a:first-of-type {
    margin-right: 20px;
  }
`;

function Survey() {
  const { questionNumber } = useParams();

  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const [surveyData, setSurveyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api-shiny-agency-openclassroom.herokuapp.com/survey`)
      .then((response) =>
        response
          .json()
          .then(
            ({ surveyData }) => setSurveyData(surveyData),
            setIsLoading(false)
          )
      )

      .catch((err) => console.log(err));
  }, []);

  return (
    <SurveyConainter>
      <QuestionTitle>Questionnaire {questionNumber} </QuestionTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]} </QuestionContent>
      )}
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Previous</Link>

        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Resultats</Link>
        )}
      </LinkWrapper>
    </SurveyConainter>
  );
}

export default Survey;
