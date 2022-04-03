import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Quiz } from "../pages/quiz/Quiz";
import { Paths } from "./paths.enum";

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path={Paths.Home} element={<Home />} />
      <Route path={Paths.Quiz} element={<Quiz />} />
    </ReactRouterRoutes>
  );
}
