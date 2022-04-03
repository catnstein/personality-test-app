import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";

interface IQuestionProps {
  question: string;
  answers: {
    text: string;
    weight: number;
  }[];
  value?: number;
  onChange?: (value: number) => void;
}

export function Question(props: IQuestionProps) {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(parseInt(event.target.value));
  };

  return (
    <>
      <FormControl sx={{ m: 3 }} variant="standard">
        <FormLabel id="demo-error-radios">{props.question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={props.value}
          onChange={handleRadioChange}>
          {props.answers.map((answer, idx) => {
            return (
              <FormControlLabel
                key={idx}
                value={answer.weight}
                control={<Radio />}
                label={answer.text}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </>
  );
}
