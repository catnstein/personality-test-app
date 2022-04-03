import { Box } from "@mui/material";
import { Question } from "../../ui/question/Question";
import Steps from "../../ui/steps/Steps";

export function Quiz() {
  return (
    <Box>
      <Box mb={2}>Quiz starting here</Box>
      <Steps total={5} current={2} />
      <Question question={"Ha?"} answers={[{ text: "Assa da", weight: 0 }]} />
    </Box>
  );
}
