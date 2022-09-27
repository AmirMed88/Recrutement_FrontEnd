
import { useEffect } from "react";
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import axios from "axios";
import { Container, Grid, TextField } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModifyProfile(props) {
    const [open, setOpen] = React.useState(false);
    const [modprofile, setModProfile] = React.useState([]);
    const [fullname, setFullname] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [education, setEducation] = React.useState('');
    const [achievement, setAchinvement] = React.useState('');
    const [wexperience, setWexperience] = React.useState('');
    const [aexperience, setAexperience] = React.useState('');
    const [skill, setSkill] = React.useState('');
    const [started, setStarted] = React.useState('');
    const [ended, setEnded] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },

        };
        axios.get('http://localhost:8080/api/profile/getProfileById/' + props.profile.idProfile, config).then((response) => {

            setModProfile(response.data);

        });
        console.log('this in modify', props.profile)

    };
    console.log('mod2', modprofile)


    const handleClose = () => {
        setOpen(false);

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },

        };
        axios.patch('http://localhost:8080/api/profile/updateProfile/', { skill: [skill], contact: { fullname: fullname, address: address, email: email, phone: phone }, experiences: [{ workExp: wexperience, academicExp: aexperience, started: started, ended: ended }], educations: [{ content: education, achievement: achievement }] }, config).then((response) => {

            setModProfile(response.data);

        });

    };


    // useEffect(()=>{




    // },{})

    return (

        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Modify
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Modify
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    {/* <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="Default notification ringtone"
                secondary="Tethys"
              />
            </ListItem> */}

                    <AppBar title="Enter User Details" />
                    <Typography
                        style={{ fontFamily: "Arial", color: "black" }}
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
                        Personal Informations :
                    </Typography>
                    <TextField
                        placeholder="Enter Your First Name & Last Name"
                        label="First & Last Name"
                        onChange={(e) => setFullname(e.target.value)}
                        defaultValue={props.profile.contact?.fullname}
                        margin="normal"

                        fullWidth
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your Address"
                        label="Address"
                        onChange={(e) => setAddress(e.target.value)}
                        defaultValue={props.profile.contact?.address}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your Email"
                        label="Email"
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        defaultValue={props.profile.contact?.email}
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        placeholder="Enter Your Phone Number"
                        label="Phone"
                        onChange={(e) => setPhone(e.target.value)}
                        defaultValue={props.profile.contact?.phone}
                        margin="normal"
                        type='number'
                        fullWidth
                    />

                    <Typography
                        style={{ fontFamily: "Arial", color: "black" }}
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
                        Advanced Informations :


                        {props.profile.educations?.map((e, index) => (

                            <div key={index} >

                                <TextField
                                    placeholder="Enter Your Education"
                                    label="Education"
                                    onChange={(e) => setEducation(e.target.value)}
                                    defaultValue={e.content}
                                    margin="normal"

                                />
                                <TextField
                                    placeholder="Enter Your Achievement"
                                    label="Achievement"
                                    onChange={(e) => setAchinvement(e.target.value)}
                                    defaultValue={e.achievement}
                                    margin="normal"

                                />
                            </div>

                        ))}

                        {props.profile.experiences?.map((ex, index) => (

                            <div key={index} >

                                <Container>

                                    <Grid item xs={6}>
                                        <TextField
                                            placeholder="Enter Your Academic Experience"
                                            label="Academic Experience"
                                            onChange={(e) => setAexperience(e.target.value)}
                                            defaultValue={ex.academicExp}
                                            margin="normal"

                                        />
                                        <TextField
                                            type="date"
                                            placeholder="started"
                                            label=""
                                            onChange={(e) => setStarted(e.target.value)}
                                            defaultValue={ex.started}
                                            margin="normal"

                                        />

                                        <br />

                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            placeholder="Enter Your Work Experience"
                                            label="Work Experience"
                                            onChange={(e) => setWexperience(e.target.value)}
                                            defaultValue={ex.workExp}
                                            margin="normal"

                                        />

                                        <TextField
                                            type="date"
                                            placeholder="ended"
                                            label=""
                                            onChange={(e) => setEnded(e.target.value)}
                                            defaultValue={ex.ended}
                                            margin="normal"

                                        />
                                    </Grid>
                                </Container>
                            </div>

                        ))}
                    </Typography>



                    <br />




                    <br />
                    {/* <TextField
              placeholder="Enter Your Skills"
              label="Skills"
              onChange={handleChange('skills')}
              defaultValue={values.skills}
              margin="normal"
              fullWidth
            /> */}
                    {props.profile.skill?.map((s, index) => (

                        <div key={index} >

                            <TextField
                                placeholder="Enter Your Skills"
                                label="Skills"
                                onChange={(e) => setSkill(e.target.value)}
                                defaultValue={s}
                                margin="normal"
                                fullWidth
                            />
                        </div>

                    ))}
                </List>
            </Dialog>
        </div>
    );
}