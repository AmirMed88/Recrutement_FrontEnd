import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Grid, Typography } from '@material-ui/core';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
            <AppBar title="Enter Personal Details" />
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
            Advanced Informations :
          </Typography>
            <Grid>
              <TextField
              placeholder="Enter Your Education"
              label="Education"
              onChange={handleChange('education')}
              defaultValue={values.education}
              margin="normal"
              
            />
            <TextField
              placeholder="Enter Your Achievement"
              label="Achievement"
              onChange={handleChange('achievement')}
              defaultValue={values.achievement}
              margin="normal"
              
            />
            </Grid>
            
            
            <br />
            <Container>

            <Grid item xs={6}>
            <TextField 
              placeholder="Enter Your Academic Experience"
              label="Academic Experience"
              onChange={handleChange('aexperience')}
              defaultValue={values.aexperience}
              margin="normal"
              
            />
            <TextField
            type="date"
              placeholder="started"
              label=""
              onChange={handleChange('started')}
              defaultValue={values.started}
              margin="normal"
              
            />
           
            <br />
            
            </Grid>

            <Grid item xs={6}>
            <TextField 
              placeholder="Enter Your Work Experience"
              label="Work Experience"
              onChange={handleChange('wexperience')}
              defaultValue={values.wexperience}
              margin="normal"
              
            />

            <TextField
            type="date"
              placeholder="ended"
              label=""
              onChange={handleChange('ended')}
              defaultValue={values.ended}
              margin="normal"
              
            />
            </Grid>
            </Container>
            
            
            
            <br />
            <TextField
              placeholder="Enter Your Skills"
              label="Skills"
              onChange={handleChange('skills')}
              defaultValue={values.skills}
              margin="normal"
              fullWidth
            />

            
            <br />

            <Grid item xs={6}>
            <Button
              color="error"
              variant="contained"
              onClick={this.back}
            >Back</Button>
            </Grid>
            <Grid item xs={6}>
            <Button
            style={{position:'relative', backgroundColor:'black',align:'center'}}
              color='secondary'
              variant="contained"
              onClick={this.continue}
            >Continue</Button>

            </Grid>

            

            
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
