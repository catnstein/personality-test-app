import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface IStepsProps {
  total: number;
  current: number;
}

export default function Steps(props: IStepsProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.current}>
        {[...Array(props.total)].map((_, index) => {
          return (
            <Step
              key={index}
              active={props.current === index}
              completed={props.current > index}>
              <StepLabel>{index + 1}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
