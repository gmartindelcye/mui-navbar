import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
  const paperStyle = {
    margin: "100px auto",
    padding: "20px",
    height: "500px",
    width: "300px",
    background: "white",
    color: "white",
    borderRadius: "10px",
  };

  const avatarStyle = {
    backgroundColor: "#1bbd7e",
    margin: "10px",
  };

  const btnStyle = {
    margin: "8px 0",
    align: "center",
    color: "primary",
  };

  const signStyle = {
    margin: "10px",
    align: "center",
    color: "black",
  };

  return (
    <Grid>
      <Paper
        elevation={10}
        style={paperStyle}
      >
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h2"
            sx={{ fontSize: "2rem", color: "black" }}
          >
            Sign In
          </Typography>
        </Grid>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Username"
          placeholder="Enter username"
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          placeholder="Enter password"
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
          sx={{ color: "black" }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={btnStyle}
        >
          Sign in
        </Button>
        <Typography
          variant="body2"
          style={signStyle}
        >
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography
          variant="body2"
          style={signStyle}
        >
          Don&apos;t have an account?
          <Link href="#"> Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;
