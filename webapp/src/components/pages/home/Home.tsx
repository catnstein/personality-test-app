import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes/paths.enum";

export function Home() {
  const navigate = useNavigate();

  const handleQuizRedirect = () => {
    navigate(Paths.Quiz);
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      Hello, Press the Button Below to start the personality quiz! WooHooo!
      <Box mt={2}>
        <Button variant="outlined" onClick={handleQuizRedirect}>
          Start Quiz!
        </Button>
      </Box>
    </Box>
  );
}
