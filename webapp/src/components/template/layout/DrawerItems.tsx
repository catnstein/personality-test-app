import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";
import { Paths } from "../../routes/paths.enum";

const linkStyle = { textDecoration: "none", color: "black" };

export const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      <Link to={Paths.Home} style={{ ...linkStyle }}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
      </Link>
      <Link to={Paths.Quiz} style={{ ...linkStyle }}>
        <ListItem button>
          <ListItemIcon>
            <QuizIcon />
          </ListItemIcon>
          <ListItemText primary={"Quiz"} />
        </ListItem>
      </Link>
    </List>
  </div>
);
