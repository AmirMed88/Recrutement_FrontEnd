import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core/'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Login=()=>{

    const paperStyle={padding :20,height:'50vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [enteredlogin, setEnteredlogin] = useState('');
    const [enteredpwd, setEnteredpwd] = useState('');
    const navigate = useNavigate();

    const Authhandler =()=>{

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: enteredlogin,
                password: enteredpwd
            })
        };
        window.token = "";
        fetch('http://localhost:8080/api/auth/signin', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
                
            })
            .then(data => {
                
                alert('logged in sucessfully')
                localStorage.setItem('token', data.token);
                if(data.roles.includes('ROLE_ADMIN')){
                    navigate('/cv');
                    console.log('admin')
                    
                }else if(data.roles.includes('ROLE_USER')){
                    // history.push('/MenuUser')}
                    console.log('user')
                    navigate('/cv');
                
            }})




            
            .catch(function () {
                console.log("error")
                return;
            });


        console.log(window.token)
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // };
        
        // const bodyParameters = {
        //    key: "value"
        // };
        
        // axios.post( 
        //     "http://localhost:8081/api/auth/signin",
        //   bodyParameters,
        //   config
        // ).then(console.log).catch(console.log);
        // useEffect(()=>{
        //     axios.post("http://localhost:8081/api/auth/signin",{
        //         "data": 'sample',
        //        },
        //        {
        //          headers: {
        //          'Authorization':'Bearer '+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNjU3ODczNDYxLCJleHAiOjE2NTc5NTk4NjF9.typHC2_ozyO_QNyHuhxpVWi1HQcxRyOsai-tD2mU775MP0cB2mJ2q3p8rGvhVMWv6Vp8N-pG5pfpKy0DniUUHA",
        //          'Content-Type':'application/json'
        //          }
        //        })
        //        .then((res) => {
        //          console.log(res);
        //        })
    
        // })
    }
    const loginChangeHandler = (event) => {
        setEnteredlogin(event.target.value);
    };
    const pwdChangeHandler = (event) => {
        setEnteredpwd(event.target.value);
    };

    
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2 style={{fontFamily: "Arial"}}>Sign In</h2>
                </Grid>
                <TextField label='Username' value={enteredlogin} onChange={loginChangeHandler} placeholder='Enter username' fullWidth required/>
                <TextField label='Password' value={enteredpwd}  onChange={pwdChangeHandler} placeholder='Enter password' type='password' fullWidth required/>
                {/* <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                <Button type='submit' color='primary' variant="contained" onClick={Authhandler} style={btnstyle} fullWidth>Sign in</Button>
                {/* <Typography >
                     <Link style={{fontFamily: "Arial"}} href="#" >
                        Forgot password ?
                </Link>
                </Typography> */}
                <Typography style={{fontFamily: "Arial"}} > Do you have an account ?
                     <Link href="/signup" style={{fontFamily: "Arial"}} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login