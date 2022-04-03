import React from "react";
import "./App.css";
import Template from "./components/template/layout/Template";
import { CssBaseline } from "@mui/material";
import { Routes } from "./components/routes/Routes";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Template>
        <Routes />
      </Template>
    </div>
  );
}

export default App;
