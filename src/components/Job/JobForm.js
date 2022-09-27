import * as React from "react";
import { useTheme } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Portal from "@material-ui/core/Portal"; 
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useState } from "react";
import { Button, Chip, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select } from "@material-ui/core";
import { Collapse, styled, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './JobForm.css'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'HTML',
  'CSS',
  'React',
  'Angular',
  'Java',
  'Spring Boot',
  'NodeJS',
  'ExpressJS',
  
  
];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

  
const JobForm=()=>{
    const paperStyle={padding :10,height:'70vh',width:300, margin:"20px auto",overflow:'scroll'};
    const avatarStyle={backgroundColor:'#1bbd7e'};
    const [show, setShow] = React.useState(false);
    const container = React.useRef(null);
    const [value, setValue] = React.useState('Controlled');
    const [personName, setPersonName] = React.useState([]);
    const [selectedImage, setSelectedImage] = React.useState(null);

    const[position,setPosition]=useState('');
    const[company,setCompany]=useState('');
    const[location,setLocation]=useState('');
    const[postedAt,setPostedAt]=useState('');
    const[role,setRole]=useState('');
    const[level,setLevel]=useState('');
    const[contract,setContract]=useState('');
    const theme = useTheme();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    
    

  const handleChangeTags = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const Jobhandler=()=>{
    const config = {
      headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}` }
          
  };
  axios.post('http://localhost:8080/api/job/addJob',
  {location:location,company:company,position:position,level:level,contract:contract,postedAt:postedAt,logo:`./images/`+selectedImage.name,languages:personName},config).then((response) => {
      console.log('job added')
      window.location.reload();

    });
  }

    const handleClick = () => {
        setShow(!show);
      };
      
      const handleChange = (event) => {
        setValue(event.target.value);
      };


      function getStyles(name, personName, theme) {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }

    
    return(
    
    <>

    <div>
      <Paper style={paperStyle}>

          <Button variant="contained" style={{ backgroundColor:"orange"}} type="button" onClick={handleClick}>
                {expanded ? 'Create a Post' : 'Post Creation'}
            </Button>
            <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
            <Box className="job" sx={{ p: 1, my: 1, border: '1px solid' ,color:"black"}}>
                
                
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <div style={{postion:"relative", justifyContent:"flex",backgroundcolor:"black"}}  >
                    <React.Fragment>
                    
                    <h5 className='am' style={{postion:"relative", justifyContent:"center",color:"black"}}>Add a Job/Internship</h5>
                           
                              <div style={{ mt: 100, mb:100 }}>
                                {/* <label htmlFor="position" style={{color:"black",mt: 100, width: 300, mb:100}}>           position  :     </label> */}
                            <TextField fullWidth label="position" placeholder="enter a position" value={position} id="position" type="text" pattern="[0-9]*"    style={{backgroundColor:"white",mt: 100, mb:100,fontFamily: "Arial"   }} onChange={(event)=>{setPosition(event.target.value)}} /></div>  
                              <div style={{xs:6}}>
                                {/* <label htmlFor="location" style={{color:"black",mt: 100, width: 300, mb:100}}>           location  :     </label> */}
                            <TextField fullWidth label="location " placeholder="enter a location" value={location} id="location" type="text" pattern="[0-9]*"    style={{backgroundColor:"white",mt: 100, mb:100,fontFamily: "Arial"  }} onChange={(event)=>{setLocation(event.target.value)}} /></div>
                           
                              <div>
                              <TextField fullWidth label="level " placeholder="enter a level" value={level} id="location" type="text" pattern="[0-9]*"    style={{backgroundColor:"white",mt: 100, mb:100,fontFamily: "Arial"  }} onChange={(event)=>{setLevel(event.target.value)}} /> 

                              <TextField fullWidth label="role " placeholder="enter a role" value={role} id="location" type="text" pattern="[0-9]*"    style={{backgroundColor:"white",mt: 100, mb:100,fontFamily: "Arial"  }} onChange={(event)=>{setRole(event.target.value)}} />
                              <TextField fullWidth label="contract" placeholder="enter a contract" value={contract} id="location" type="text" pattern="[0-9]*"    style={{backgroundColor:"white",mt: 100, mb:100,fontFamily: "Arial"  }} onChange={(event)=>{setContract(event.target.value)}} /> 
                                {/* <label htmlFor="Company" style={{color:"black",mt: 100, width: 300, mb:100 }}>company  :     </label> */}
                            <TextField fullWidth label='company' placeholder="enter a company name" value={company} id="company" type="text"   style={{backgroundColor:"white",mt: 100 , mb:100,fontFamily: "Arial" }}
                              onChange={(event)=>{setCompany(event.target.value)}}  /></div> 
                                <div className="">
                                {selectedImage && (
                                  <div>
                                  <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                  <br />
                                  <button onClick={()=>setSelectedImage(null)}>Remove</button>
                                  </div>
                                )}
                                    <input type="file" id="file-input" name="ImageStyle" onChange={(event) => {
                                            console.log(event.target.files[0]);
                                            setSelectedImage(event.target.files[0]);
                                          }}/>
                                </div>
                            

                            
                            
                          
                            <TextField id="date" type="Date" style={{marginTop:"3rem"}} 
                                  class="form-control" value={postedAt} onChange={(event)=>{setPostedAt(event.target.value)}} required="required" />

                      </React.Fragment>
                    </div >
                    <div style={{ marginTop:50}} >
                      <React.Fragment >
                        <FormControl sx={{ m: 1, width: 300, mt:100,fontFamily:"Arial" }}>
                            <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                            <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={personName}
                            onChange={handleChangeTags}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                            >
                            {names.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                                >
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>

                        
                        </React.Fragment>
                        
                  </div>
                    <div style={{marginTop:"3rem"}} >
                    <Button type='submit'  variant="contained" style={{backgroundColor:'orange'}} onClick={Jobhandler}  fullWidth>Submit</Button>
                    </div>
                
                </Collapse>
            </Box>
            
      </Paper>
        
        </div>
        
        
        </>
    )
}

export default JobForm
