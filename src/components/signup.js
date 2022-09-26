import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core/'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useState } from 'react';
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const [enteredlogin, setEnteredlogin] = useState('');
    const [enteredpwd, setEnteredpwd] = useState('');
    const [admin, setAdmin] = useState('');
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const signupHandler = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: enteredlogin,
                password: enteredpwd,
                role: ["ROLE_ADMIN", "ROLE_USER"]
            })
        };
        window.token = "";
        fetch('http://localhost:8080/api/auth/signup', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
               
            })
            .then(data => {
                console.log(data);
                //alert("La creation de compte est succée");
                setError({
                    title: '',
                    message: 'La creation de compte a été faite avec succés'
                });
                // setInterval(function () { window.location.reload(); }, 1000);


            }

            )
        .catch(function (error) {
            //alert('Déja existe');
            
           /* setError({
                title: '',
                message: 'La creation de compte est succée'
            });*/
            /*setError({
                title: 'Déja existe',
                message: 'Login ou mot de passe Déja existe'
            });*/
            // setInterval(function () { window.location.reload(); }, 0);
            return;
        });


        console.log(window.token)

    }




    const loginChangeHandler = (event) => {
        setEnteredlogin(event.target.value);
    };
    const pwdChangeHandler = (event) => {
        setEnteredpwd(event.target.value);
    };
    const adminHandler = (event) => {
        setAdmin(event.target.value);
    };

    const userHandler = (event) => {
        setUser(event.target.value);
    };
    const errorHandler = () => {
        setError(null);
    };
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form >
                    <TextField fullWidth label='Name' placeholder="Enter your name" value={enteredlogin} onChange={loginChangeHandler}/>
                    {/* <TextField fullWidth label='Email' placeholder="Enter your email" /> */}
                    {/* <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl> */}
                    {/* <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" /> */}
                    <TextField fullWidth label='Password' placeholder="Enter your password" value={enteredpwd} onChange={pwdChangeHandler}/>
                    {/* <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/> */}

                    <br></br><br></br>
                    <div>
                        <input type="radio" value="ROLE_ADMIN" name="role" onChange={adminHandler} /> Admin
                        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        <input type="radio" value="ROLE_USER" name="role" onChange={userHandler} /> User

                    </div>
                    <br></br><br></br>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary' onClick={signupHandler}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;