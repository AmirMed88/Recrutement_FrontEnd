import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core/'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useNavigate } from 'react-router-dom';
import CardProfile from './profile/CardProfile';
import ChipProfile from './profile/ChipProfile';
import SearchProfile from './profile/SearchProfile';
import { Container } from 'react-bootstrap';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ModifyProfile from './profile/ModifyProfile';
const PostProfile = (props) => {
    const paperStyle = { padding: 20, height: '80vh', width: 1100, margin: "20px auto", overflow: 'hidden' }
    const paperStyle2 = { padding: 70, height: '70vh', width: 800, overflow: 'scroll', scrollX: 'none' }

    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const btnstyle = { margin: '8px 0' }
    const [enteredlogin, setEnteredlogin] = useState('');
    const [enteredpwd, setEnteredpwd] = useState('');
    const [what, setWhat] = useState('');
    const [whatProfiles, setWhatProfiles] = useState([{}]);
    const [where, setWhere] = useState('');
    const [selectedv, setSelectedv] = useState('');
    const navigate = useNavigate();




    const [result, setResult] = useState([{}]);
    const [profiles, setProfiles] = useState([{}]);

    const options = [
        {
            value: "yeardown",
            label: "By year ↓ ",
        },
        {
            label: "By year ↑ ",
            value: "yearup",
        }
    ];


    useEffect(


        () => {

            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            };
            const result = axios.get('http://localhost:8080/api/profile/getAllProfiles', config).then((response) => {
                setProfiles(response.data);
                setResult(response.data)
                console.log(response.data);
                console.log(profiles)
                console.log(result)
            });

        }
        , {})


    const findwhat = (event) => {


        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };
        axios.get('http://localhost:8080/api/profile/getProfileBySkills/' + what.toUpperCase(), config).then((response) => {
            setWhatProfiles(response.data);
            console.log('this is contact')
            console.log(response.data)
        });

        setWhat(event.target.value);

    }

    function handleChange(e) {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };
        console.log("Selected!!", selectedv);

        setSelectedv(e.target.value);
        switch (selectedv) {
            case 'yearup':
                axios.get('http://localhost:8080/api/profile/getProfileAsc', config).then((response) => {
                    setProfiles(response.data);
                    setWhatProfiles(response.data);
                    console.log('this asc',response.data)
                    console.log(response.data)
                });
                break;

            case 'yeardown':
                axios.get('http://localhost:8080/api/profile/getProfileDesc', config).then((response) => {
                    setProfiles(response.data);
                    setWhatProfiles(response.data);
                    console.log('this desc',response.data)
                    console.log(response.data)
                });
                break;

        }
    }

    return (
        <div className='profile'>

            <Grid>
                <Paper elevation={10} style={paperStyle} smooth container>
                    {/* <h4 align='center'>search profile here</h4> */}
                    <Typography
                        style={{ fontFamily: "Arial", color: "#E7E194" }}
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                        fontFamily="corrier"
                    >
                        Profile Space
                    </Typography>

                    <Grid align='center' style={{ margintop: 50 }}  >
                        <TextField label='what' vlaue={what} placeholder='what kind of post' variant="outlined" required size="small" onChange={findwhat} />
                        {/* <TextField label='where' vlaue={where}   placeholder='where' variant="outlined"  required style={{marginLeft:50}} size="small"/> */}
                        <br></br>

                        <hr />
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={10} >
                            {what == '' ? <Paper variant='outlined' style={paperStyle2} >
                                <Grid align='center' style={{ margin: 30 }} container spacing={2} >
                                    {profiles.map((profile, index) => (
                                        <ChipProfile profile={profile} key={index} ></ChipProfile>))}
                                    {/* <SearchProfile/> */}


                                </Grid>
                            </Paper>
                                :
                                <Paper variant='outlined' style={paperStyle2} >
                                    <Grid align='center' style={{ margin: 30 }} container spacing={2} >
                                        {whatProfiles.map((profile, index) => (
                                            <ChipProfile profile={profile} key={index} ></ChipProfile>))}
                                        {/* <SearchProfile/> */}


                                    </Grid>
                                </Paper>}
                        </Grid>
                        <Grid item xs={2} >
                            <Button startIcon={<ArrowBackIcon />} size='large' href='/form' variant="outlined" fullWidth>Submit your profile</Button>
                            <br></br>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            <div className="select-container">
                                <select value={selectedv} onChange={handleChange}>
                                    {options.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                        </Grid>
                        <Grid item xs={2} >
                            <Button  size='large' href='/form' type='select' variant="outlined" fullWidth>Submit your profile</Button>
                        </Grid>


                    </Grid>









                </Paper>

            </Grid>



        </div>



    );
}

export default PostProfile