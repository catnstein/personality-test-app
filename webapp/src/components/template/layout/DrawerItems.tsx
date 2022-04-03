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

export const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={"Home"} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <QuizIcon />
        </ListItemIcon>
        <ListItemText primary={"Quiz"} />
      </ListItem>
    </List>
  </div>
);
