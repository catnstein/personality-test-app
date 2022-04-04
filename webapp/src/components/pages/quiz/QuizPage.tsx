import { useGetAllQuestions } from "../../../api/generated/questions/questions";
import { QuizSteps } from "./QuizSteps";

export function QuizPage() {
  const { data, isLoading } = useGetAllQuestions();

  if (isLoading) {
    return <>"Loading..."</>;
  }

  if (!data) {
    return <>"No Data..."</>;
  }

  return <QuizSteps questions={data} />;
}
