import { useState } from 'react';
import {
  TextField,
  Stack,
  Button,
  Container,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Link
} from "@mui/material";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };


  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempted with:', { username, password });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography component="h1" variant="h4" sx={{ margin: "10px 0px" }}>
          Welcome Back :)
        </Typography>
        <Typography
          component="p"
          variant="body2"
          sx={{ margin: "10px 0px", color: "gray" }}
        >
          To keep connected with us please login with your personal information
          by email address and password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email Address"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0px 0px 10px 5px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  sx={{
                    "&.MuiCheckbox-root": {
                      borderRadius: "50%",
                      "&.Mui-checked": {
                        color: "green",
                      },
                    },
                  }}
                />
              }
              sx={{ color: "gray" }}
              label="Remember Me"
            />
            <Link href="forgot-password" underline="none">
              Forgot Password?
            </Link>
          </Box>
          <Stack spacing={2} direction="row">
            <Button
              type="submit"
              variant="contained"
              style={{ borderRadius: 50, fontSize: "12px" }}
            >
              Login Now
            </Button>
            <Button
              variant="contained"
              style={{ borderRadius: 50, fontSize: "12px" }}
            >
              Create Account
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};