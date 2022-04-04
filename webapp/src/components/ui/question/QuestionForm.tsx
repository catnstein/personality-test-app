import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";

interface Answer {
  text: string;
  weight: number;
}

interface IQuestionProps {
  question?: string;
  answers: Answer[];
  value?: number;
  onChange?: (answer: Answer, idx: number) => void;
}

export function QuestionForm(props: IQuestionProps) {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answerIdx = parseInt(event.target.value);
    console.log("answerid", answerIdx);
    props.onChange?.(props.answers[answerIdx], answerIdx);
  };

  const value = typeof props.value === "number" ? props.value : null;

  return (
    <>
      <FormControl sx={{ m: 10 }} variant="standard">
        <FormLabel id="demo-error-radios" sx={{ mb: 5 }}>
          <Typography variant="h5">{props.question}</Typography>
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}>
          {props.answers.map((answer, idx) => (
            <FormControlLabel
              key={idx}
              value={idx}
              control={<Radio />}
              label={answer.text}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}
