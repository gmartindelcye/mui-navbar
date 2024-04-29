import { createTheme, ThemeProvider } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { MuiNavbar } from "./components/MuiNavbar";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiNavbar />
      </ThemeProvider>
    </>
  );
}
