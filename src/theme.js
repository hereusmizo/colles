import { createTheme } from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1473E6",
    },
    secondary: {
      main: "#FF661F",
    },
    error: {
      main: "#C41E24",
    },
    background: {
      default: "#ffffff",
    },
    warning: {
      main: amber[500],
    },
    success: {
      main: "#1D911D",
    },
  },
  typography: {
    fontSize: 12,
  },
});
export default theme;

//black #535150
//primary dal #CA7DF9
//blue ang chi #6161F3
