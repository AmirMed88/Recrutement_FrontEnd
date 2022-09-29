import { Button, Grid, GridList, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import axios from 'axios'
import './Details.css'
import { SettingsSystemDaydream } from '@material-ui/icons'
function Details({ 
    id,
    company, 
    recent, 
    featured, 
    position, 
    postedAt, 
    contract, 
    location,
    languages,
    tools,
    filter_f
 }) {

    const [day,setDay]=useState('');
    function handleClick(skill){
        filter_f(skill)
    }



    const Skills = ({skill}) => (<div className="tag rounded-md p-1 px-2 m-2">
        <Button onClick={() => handleClick(skill)}>
            {skill}
        </Button>
        </div>)

        function deleteJob(){
            const config = {
                headers: { 
                    Authorization: `Bearer ${localStorage.getItem('token')}` }
                    
            };
            axios.delete('http://localhost:8080/api/job/deleteJob/'+id,config).then((response) => {
                console.log('job deleted')
                window.location.reload();
          
              });

        

        }

        function ExpenseDate(postedAt) {
            const month = postedAt.toLocaleString("en-US", { month: "long" });
            const day = postedAt.toLocaleString("en-US", { day: "2-digit" });
            const year = postedAt.getFullYear();
            setDay(day);
            
              return (
                 <div>
                  <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
                </div>
              )
            }
        
    return (
        <>
         
        <div className="cont">
        <p style={{color:"grey"}}>{position}</p>
            <div className="flex flex-grow">
                <Typography className="mr-2 flex justify-center items-center" style={{color:"white"}}>Company: {company}</Typography>
                {recent ? <p className="tags new-tag rounded-xl px-2 p-1 mr-1">new</p> : null}
                {featured ? <p className="tags new-tag rounded-xl px-2 p-1">featured</p> : null}
            </div>
            
            <div className="" style={{color:"black"}}>
                <Typography className="text-gray-400">{postedAt.toLocaleString("en-US", { day: "2-digit" })}</Typography>
                <Typography className="text-gray-400">contract: {contract}</Typography>
                <Typography className="text-gray-400">location: {location}</Typography>
               
            </div>
        </div>
        <Grid >
            <GridList className='skill' >
            {
                [...languages, ...tools].map( skill => <Skills skill={skill}key={skill} />)
            }
            </GridList>
          
        </Grid>
        <Button style={{marginleft:"12"}} type='submit' onClick={deleteJob}>X</Button>
       
        </>
    )
}

export default Details
