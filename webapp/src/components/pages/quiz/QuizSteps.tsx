import { Box, Button } from "@mui/material";
import { useState } from "react";
import {
  Answer,
  Personality,
  Question
} from "../../../api/generated/questions/model";
import { useComputePersonality } from "../../../api/generated/questions/questions";
import { QuestionForm } from "../../ui/question/QuestionForm";
import { Result } from "../../ui/result/Result";
import Steps from "../../ui/steps/Steps";

interface IQuizStepsProps {
  questions: Question[];
}

export function QuizSteps(props: IQuizStepsProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<Answer>();
  const [radioValue, setRadioValue] = useState<number>();
  const [personality, setPersonality] = useState<Personality>();

  const submitMutation = useComputePersonality();

  const handleNextClick = () => {
    if (currentAnswer) {
      setAnswers((prev) => [...prev, currentAnswer]);
      setCurrentAnswer(undefined);
      setRadioValue(undefined);
      setStep((prev) => prev + 1);
    }
  };

  const handleFinishClick = () => {
    if (currentAnswer) {
      submitMutation.mutate(
        {
          data: {
            answers: [...answers, currentAnswer]
          }
        },
        {
          onSuccess(data) {
            setPersonality(data);
          }
        }
      );
    }
  };

  const handleOnChangeAnswer = (answer: Answer, value: number) => {
    console.log("answer", answer, value);
    setCurrentAnswer(answer);
    setRadioValue(value);
  };

  const handleRequestNewResult = () => {
    setAnswers([]);
    setCurrentAnswer(undefined);
    setRadioValue(undefined);
    setPersonality(undefined);
    setStep(0);
  };

  return (
    <Box display="flex" flexDirection="column">
      {personality ? (
        <Result
          result={personality.result}
          onRequestNewResult={handleRequestNewResult}
        />
      ) : (
        <>
          <Box mb={2} />
          <Steps total={props.questions.length} current={step} />
          <Box>
            <QuestionForm
              value={radioValue}
              question={props.questions[step].text}
              answers={props.questions[step].answers}
              onChange={handleOnChangeAnswer}
            />
          </Box>
          <Box>
            {props.questions.length - 1 !== step ? (
              <Button
                variant="contained"
                disabled={!Boolean(currentAnswer)}
                onClick={handleNextClick}>
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                disabled={!Boolean(currentAnswer)}
                onClick={handleFinishClick}>
                Finish
              </Button>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}
