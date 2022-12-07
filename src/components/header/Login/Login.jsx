import React, { useState, useContext } from "react";
import axios from "axios";
import { Typography, Box, styled } from "@mui/material";

import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
const Container = styled(Box)`
  margin: 10%;
  text-align: center;
  width: auto;
  height: auto;
`;
const InnerContainer = styled(Box)`
  width: auto;
  height: auto;
  border-radius: 10px;
`;
const DivBox = styled(Box)`
  padding: 1px;
`;

const StyledButton = styled("button")({
  padding: "4px",
  borderRadius: "5px",
  fontSize: "medium",
  border: "none",
});

const Input = styled("input")({
  padding: "4px",
  borderRadius: "5px",
  fontSize: "medium",
});

//const URL="https://rishimovieapp-api.onrender.com";
const URL="http://localhost:5000" ;

const Login = (props) => {
  const navigate = useNavigate();
  const { account, setAccount } = useContext(DataContext);
  const { setOpen, setLoginSignup } = props;
  const intialState = {
    email: "",
    password: "",
  };
  const [login, setlogin] = useState({ ...account, ...intialState });
  const [error, setError] = useState({ color: "red", visibility: "hidden" });

  const inputHandler = (e) => {
    setError({ color: "red", visibility: "hidden" });
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginHandler = () => {
    setLoginSignup(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    /////////////////////

    try {
      const response = await axios.get(`${URL}/login`);
      const data = response.data.data;
      //console.log(data);
      const exist = data.find((element) => {
        return (
          element.email === login.email &&
          element.userType === login.userType &&
          element.password === login.password
        );
      });
      // console.log(exist);

      if (exist && login.userType === "Admin") {
        navigate("/admin/login");
        setOpen(false);
        setAccount({ ...login, ...account });
      } else if (exist && login.userType === "User") {
        navigate("/user/login");
        setOpen(false);
        setAccount({ ...login, ...account });
      } else if (true) {
        setError({ color: "red", visibility: "visible" });
        setOpen(true);
      } else {
        setOpen(false);
      }
    } catch (error) {
      console.log("error while get request", error);
    }
  };

  return (
    <Container>
      <InnerContainer>
        <h3 style={{ color: "white" }}>Log In</h3>
        <form onSubmit={submitHandler}>
          <DivBox>
            <Input
              type="email"
              placeholder="email"
              name="email"
              onChange={inputHandler}
              minLength="3"
              maxLength="64"
              multiple
            />
          </DivBox>

          <DivBox>
            <Input
              type="password"
              placeholder="password"
              name="password"
              onChange={inputHandler}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </DivBox>

          <DivBox>
            <StyledButton type="submit">LogIn</StyledButton>
            <Typography style={{ color: "white" }}>
              Don't have an account ? please{" "}
              <span style={{ cursor: "pointer" }} onClick={loginHandler}>
                SignUp
              </span>
            </Typography>
          </DivBox>
          <span style={error}>
            Error : account doesn't exist with this email & password
          </span>
        </form>
      </InnerContainer>
    </Container>
  );
};

export default Login;
