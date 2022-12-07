import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Typography, Box, styled } from "@mui/material";
import { DataContext } from "../../context/DataProvider";

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

const SignUp = (props) => {
  const { account, setAccount } = useContext(DataContext);
  const { setOpen, setLoginSignup } = props;
  const navigate = useNavigate();
  const intialState = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [signup, setSignup] = useState({ ...account, ...intialState });
  const [error, setError] = useState({ color: "red", visibility: "hidden" });
  const [error1, setError1] = useState({ color: "red", visibility: "hidden" });

  const inputHandler = (e) => {
    setError({ color: "red", visibility: "hidden" });
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupHandler = () => {
    setLoginSignup(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (signup.password !== signup.cpassword) {
      setError({ color: "red", visibility: "visible" });
    } else {
      const response = await axios.post(`${URL}/signup`, signup);

      if (response.status === 201) {
        setAccount({ ...signup, ...account });
      } else if (response.status ===409) {
        setError1({ color: "red", visibility: "visible" });
        setSignup("");
      }
      //console.log(response);
      if (signup.email && signup.userType === "Admin") {
        navigate("/admin/login");
      }
      if (signup.email && signup.userType === "User") {
        navigate("/user/login");
      }
      // console.log(response);
      setOpen(false);
    }
  };

  return (
    <Container>
      <InnerContainer>
        <h3 style={{ color: "white" }}>SignUp</h3>
        <form onSubmit={submitHandler}>
          <DivBox>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              onChange={inputHandler}
              minLength="3"
              maxLength="64"
            />
          </DivBox>

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
            <Input
              type="password"
              placeholder=" conform password"
              name="cpassword"
              onChange={inputHandler}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </DivBox>

          <DivBox>
            <StyledButton type="submit">SignUp</StyledButton>
            <Typography style={{ color: "white" }}>
              if you have already account ? please{" "}
              <span style={{ cursor: "pointer" }} onClick={signupHandler}>
                Login
              </span>
            </Typography>
          </DivBox>
          <span style={error1}>Error :User has already account</span>
          <br />
          <span style={error}>Error :password didn't match</span>
        </form>
      </InnerContainer>
    </Container>
  );
};

export default SignUp;
