import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Register = () => {
  const paperStyle = {
    margin: "100px auto",
    padding: "20px",
    height: "640px",
    width: "350px",
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

  return (
    <Grid>
      <Paper
        elevation={10}
        style={paperStyle}
      >
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <Typography
            component="h2"
            sx={{ fontSize: "2rem", color: "black" }}
          >
            Sign Up
          </Typography>
          <Typography
            component={"h5"}
            sx={{ color: "black" }}
          >
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
        >
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
            label="Name"
            placeholder="Enter full name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            placeholder="Enter email"
            required
            type="email"
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
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Confirm password"
            type="password"
            placeholder="Enter password"
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={btnStyle}
          >
            Sign up
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};
export default Register;
