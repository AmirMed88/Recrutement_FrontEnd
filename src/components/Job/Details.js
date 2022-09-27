import { Button, Grid, GridList, Typography } from '@material-ui/core'
import React from 'react'
import axios from 'axios'
import './Details.css'
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
    function handleClick(skill){
        filter_f(skill)
    }

    const Skills = ({skill}) => (<div className="tag rounded-md p-1 px-2 m-2">
        <button onClick={() => handleClick(skill)}>
            {skill}
        </button>
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
                <Typography className="text-gray-400">{postedAt}</Typography>
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
       
        </>
    )
}

export default Details
