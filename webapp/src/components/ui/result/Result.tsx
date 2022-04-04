import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { PersonalityResult } from "../../../api/generated/questions/model";

interface IResultProps {
  result: PersonalityResult;
  onRequestNewResult: () => void;
}

export function Result(props: IResultProps) {
  const [drumRoll, setDrumRoll] = useState(true);
  useEffect(() => {
    setTimeout(() => setDrumRoll(false), 3000);
  }, []);

  return (
    <Box m={2}>
      {drumRoll ? (
        <Box m={5}>
          <Typography variant="h5">Drum Rolls Please...</Typography>
        </Box>
      ) : (
        <>
          <Box m={5}>
            <Typography variant="h5">
              You are more of an {props.result}
            </Typography>
          </Box>
          <Button onClick={props.onRequestNewResult}>
            Take the quiz Again!
          </Button>
        </>
      )}
    </Box>
  );
}
