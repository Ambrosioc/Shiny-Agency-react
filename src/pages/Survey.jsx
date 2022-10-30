import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { SurveyContext } from "../utils/context";
import { Loader } from "../utils/Loader";
import colors from "../utils/styles/colors";
import { useFetch } from "../utils/hooks";

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

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : "none"};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;
function Survey() {
  const { questionNumber } = useParams();
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
  const { surveyData } = data;

  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const { answers, saveAnswer } = useContext(SurveyContext);

  function saveReply(answers) {
    saveAnswer({ [questionNumber]: answers });
  }
  if (error) {
    return <span>Il y a un problème</span>;
  }
  return (
    <SurveyConainter>
      <QuestionTitle>Questionnaire {questionNumber} </QuestionTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <QuestionContent>
          {surveyData && surveyData[questionNumber]}
        </QuestionContent>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Previous</Link>

        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Resultats</Link>
        )}
      </LinkWrapper>
    </SurveyConainter>
  );
}

export default Survey;
