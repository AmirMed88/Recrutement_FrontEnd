import React, { useEffect, useState } from 'react';
import Card from './Card';
import Button from './Button';
import classes from './Chip.module.css';
import axios from 'axios';
import { Collapse, styled, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';






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
const ChipProfile = (props) => {

    // const [cont,setCont]=useState([]);
    // const [contactdata,setContactData]=useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      const DeleteProfile=()=>{

        const config = {
                headers: { 
                    Authorization: `Bearer ${localStorage.getItem('token')}` }
            };
            axios.delete(`http://localhost:8080/api/profile/deleteProfile/`+props.profile.idProfile,config).then((response) => {
                window.location.reload();
                console.log('deleted success')
                console.log(response.data)
              });

      }

      const SendMail=()=>{

        const config = {
                headers: { 
                    Authorization: `Bearer ${localStorage.getItem('token')}` }
            };
            axios.post('http://localhost:8080/api/profile/sendMail/'+props.profile.contact?.email,config).then((response) => {
                
                console.log('sent successfully')
               
              });

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
            
        //     Authorization: `Bearer ${localStorage.getItem('token')}`
        // };
       
        // fetch('http://localhost:8080/api/profile/sendMail/'+ props.profile.contact?.email.toString(), requestOptions)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //        console.log('success')
        //        })




            
        //     .catch(function () {
        //         console.log("error")
        //         return;
        //     });

      }
    useEffect(
       
        ()=>{

            // const config = {
            //     headers: { 
            //         Authorization: `Bearer ${localStorage.getItem('token')}` }
            // };
            // axios.get(`http://localhost:8080/api/Contact/getContactById/${props.profile.contact.idContact}`,config).then((response) => {
            //     setData(response.data);
            //     console.log('this is contact')
            //     console.log(response.data)
            //   });
            
            // const d= setCont(props.profile.contact);
            // const contactdata= props.profile.contact; 
            // console.log('this is d',{contactdata});
                
        }
     )
     console.log('this is contact',props.profile?.experiences);
     console.log('this is skills',props.profile.skill);
     
     
    //  console.log('this is fullname',data.fullname);
    return (
        <div style={{margintop:1}}>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
              
                    <h4>{props.profile.contact?.fullname}</h4>

                    <h4>{props.profile.contact?.address}</h4>
                    <Typography>{props.profile.contact?.phone}</Typography>
                    <Typography>{props.profile.contact?.email}</Typography>
                </header>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>

                <Collapse in={expanded} timeout="auto" unmountOnExit>

                <div className={classes.content}>
                    {/* <Typography>{props.profile.createdAt}</Typography> */}
                    {props.profile.experiences?.map((ex,index)=>(
                    <div  key={index} >
                        Experience :
                        {ex.workExp ?<Typography>{ex.workExp} •• {ex.started  }  </Typography> : <Typography>no work Experience</Typography> }
                        {ex.academicExp ?<Typography>{ex.academicExp} •• { ex.ended} </Typography> : <Typography>no academic Experience</Typography> }
                    
                    </div>

                    ))}
                    <hr/>
                    
                    {props.profile.educations?.map((ed,index)=>(
                    <div  key={index} >
                        Education:
                        {ed.content ?<Typography> {ed.content} ••  {ed.achievement  }  </Typography> : <Typography>No education</Typography> }
                    </div>

                    ))}

                <hr/>
                {props.profile.skill?.map((s,index)=>(
                   
                    <div  key={index} >
                        
                        <Typography>{s}   </Typography>
                    </div>

                    ))}
                   
                </div>
                </Collapse>
                
                <div >
                  

                  
                </div>
                <footer className={classes.actions}>{props.profile.destination ?<Typography>Preference:{props.profile.destination}  </Typography> : <Typography>no preference</Typography> }
                <IconButton align="flex-end" aria-label="delete" onClick={DeleteProfile}>
                    <DeleteIcon />
                </IconButton>
                <IconButton align="flex-end" aria-label="share" onClick={SendMail}>
                    <ShareIcon />
                </IconButton>
                </footer>
            </Card>
            <br></br>
            
        </div>
    )

};
export default ChipProfile;