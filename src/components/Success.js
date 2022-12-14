import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            
            <h1 style={{color:'green'}}>Thank You For Your Submission</h1>
            <p> You will get an email with further instructions.</p>
            <Link href="/cv" style={{fontFamily: "Arial"}} >
                        Ok 
                </Link>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
