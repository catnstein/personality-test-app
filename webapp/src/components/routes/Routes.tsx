import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { QuizPage } from "../pages/quiz/QuizPage";
import { Paths } from "./paths.enum";

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path={Paths.Home} element={<HomePage />} />
      <Route path={Paths.Quiz} element={<QuizPage />} />
    </ReactRouterRoutes>
  );
}
