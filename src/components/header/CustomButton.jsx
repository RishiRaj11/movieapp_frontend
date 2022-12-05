import { Box, Button, styled } from "@mui/material";
import { useState, useContext } from "react";
import { DataContext } from "../context/DataProvider";
import LoginDialog from "./LoginDialog";

import Profile from "./Profile";
const Wapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;

  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-item: center;
  }
`;

const LoginButton = styled(Button)`
  color: rgb(29, 69, 107);
  background: #ffffff;
  text-transform: none;
  padding: 5px 15px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  //const [userType,setUserType]=useState("");
  const { account, setAccount } = useContext(DataContext);
  const openUserDialog = () => {
    setAccount({ userType: "User" });

    setOpen(true);
  };

  const openAdminDialog = () => {
    setAccount({ userType: "Admin" });

    setOpen(true);
  };

  return (
    <Wapper>
      {account.email ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Box>
          <LoginButton
            variant="contained"
            onClick={() => openUserDialog()}
            style={{ marginRight: "10px" }}
          >
            User Login
          </LoginButton>
          <LoginButton variant="contained" onClick={() => openAdminDialog()}>
            Admin Login
          </LoginButton>
        </Box>
      )}

      {open && <LoginDialog open={open} setOpen={setOpen} />}
    </Wapper>
  );
};
export default CustomButton;
