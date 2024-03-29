import React, { useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import Text from "../../components/utils/Text";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useDispatch } from "react-redux";
import { notify } from "../../utils/utils";
import { ToastContainer } from "react-toastify";
import { store } from "../../redux/store/store";

export default function Login() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const [loginBtn, setLoginBtn] = useState(false)
  const dispatch = useDispatch();
const navigate =useNavigate();
  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = e =>{
    e.preventDefault();
    setLoginBtn(true)

    axios.post('/api/auth/login', payload, {headers : {'Content-Type' : 'application/json'}}).then(response => {
      dispatch({type : 'SET_USER', payload : response.data.user});
      if(response.data.user.role === 'admin'){
        navigate("/admin");

      }else{

        navigate("/dashboard");
      }
    }).catch(error => {
      notify(error?.response?.data?.error, 'error')
      setLoginBtn(false);
    })


    
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box minHeight="100vh" bgcolor="#100819">
      <ToastContainer />
      <Box
        display="flex"
        sx={{
          backgroundImage: "url('/assets/images/gradient.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          minHeight: "520px",
          overflow: "hidden",
          py: { md: 5, sm: 2, xs: 2, lg: 5, xl: 5 },
        }}
      >
        <Box my="auto" mx="auto" width={{ md: "40vw", sm: "70vw", xs: "80vw" }}>
          <Box
            bgcolor="#fff"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="20px"
            borderRadius="15px"
            component="form"
            onSubmit={handleLogin}
          >
            <Box
              component="img"
              src="/assets/logo/logo.png"
              sx={{ height: "40px" }}
            />
            <Stack spacing={2} mt={5} sx={{ width: "100%" }}>
              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                  required
                  id="email"
                  type="email"
                  name="email"
                  value={payload.email}
                  onChange={handleChange}
                  label="Email"
                />
              </FormControl>
              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  required
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={payload.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <LoadingButton loading={loginBtn} type="submit" variant="contained" color="primary">
                Login
              </LoadingButton>
            </Stack>
          </Box>
          <Box display="flex" mt={2} justifyContent="space-between" mx={4}>
            <Box>
              <Text
                mx="auto"
                fs="16px"
                fw="400"
                color="#A5A3A8"
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => navigate("/password/verify")}
              >
                Forget Password?
              </Text>
            </Box>
           
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
