import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            <Typography 
            style={{fontFamily: "Arial",color:"black"}}
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
              onChange={handleChange('fullName')}
              defaultValue={values.fullName}
              margin="normal"
              
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              type='email'
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Enter Your Phone Number"
              label="Phone"
              onChange={handleChange('phone')}
              defaultValue={values.phone}
              margin="normal"
              type='number'
              fullWidth
            />
            
            <br />
            <Button
             style={{backgroundColor:'black'}}
              color='secondary'
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
