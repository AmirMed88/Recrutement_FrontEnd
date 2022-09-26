import React, { Component, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Grid, List, ListItem, ListItemText, TableContainer } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function Confirm (props) {

  const[values,setValues]=useState(props.values);
 const continueHandler=(e)=> {
    e.preventDefault();
    // PROCESS FORM //

    const config = {
          headers: { 
              Authorization: `Bearer ${localStorage.getItem('token')}` }
              
      };
      axios.post('http://localhost:8080/api/profile/addProfile',
      {skills:props.values.skills.split(','),contact:{fullname:props.values.fullName,address:props.values.address,email:props.values.email,phone:props.values.phone},experiences:[{workExp:props.values.wexperience,academicExp:props.values.aexperience,started:props.values.started,ended:props.values.ended}],educations:[{content:props.values.education, achievement:props.values.achievement}]},config).then((response) => {
          console.log('this is contact')
          console.log('this is values',props.values)
        });

    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };
console.log(values);
console.log(props.values);
  
    // const {
    //   values: { fullName, address, email,phone, experience, education, skills }
    // } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <Container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 100 }}>
              <Grid xs={8}>
              <ListItem>
                <ListItemText primary="Full name" secondary={props.values.fullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={props.values.address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={props.values.email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone" secondary={props.values.phone} />
              </ListItem>

              </Grid>
              </Container>
              
              <hr/>

              <ListItem>
                <ListItemText primary="Work Experience" secondary={props.values.wexperience} />
              </ListItem>
              <ListItem>
                <ListItemText primary=" Date Experience" secondary={props.values.started} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Academic Experience" secondary={props.values.aexperience} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date Experience" secondary={props.values.ended} />
              </ListItem>
              
              <ListItem>
                <ListItemText primary="Education" secondary={props.values.education} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Skills" secondary={props.values.skills} />
              </ListItem>
            </List>
            <br />
            <Grid item xs={6}>
            <Button
              color=""
              variant="contained"
              onClick={back}
            >Back</Button>

            </Grid>

            <Grid item xs={6}>
            <Button
            style={{backgroundColor:'orange'}}
              color='secondary'
              variant="contained"
              onClick={continueHandler}
            >Confirm & Continue</Button>

            </Grid>

            

           
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }


export default Confirm;
