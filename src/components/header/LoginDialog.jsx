import React,{useState} from 'react'
import { Dialog,Card } from '@mui/material';
import Login from './Login/Login';
import SignUp from  "./Login/SignUp"

const LoginDialog = ({open,setOpen}) => {

  const [loginSignup,setLoginSignup]=useState(true);

  const closeDialog=()=>{
    setOpen(false);
  }

  return (
    <Dialog  open={open} onClose={closeDialog} >
      <Card variant="outlined"  style={{backgroundColor:" rgb(29, 69, 107)"}}>
        {(loginSignup ? (<Login setOpen={setOpen} setLoginSignup={setLoginSignup} />):(<SignUp setOpen={setOpen} setLoginSignup={setLoginSignup} />))}
      
      
      </Card>
      
    </Dialog>
  )
}

export default LoginDialog;