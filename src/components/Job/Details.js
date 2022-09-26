import { Grid, GridList, Typography } from '@material-ui/core'
import React from 'react'

function Details({ 
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
        
    return (
        <>
        <div className="flex-1 px-4 py-2">
        <p style={{color:"blue"}}>{position}</p>
            <div className="flex flex-grow">
                <Typography className="mr-2 flex justify-center items-center" style={{color:"white"}}>{company}</Typography>
                {recent ? <p className="tags new-tag rounded-xl px-2 p-1 mr-1">new</p> : null}
                {featured ? <p className="tags new-tag rounded-xl px-2 p-1">featured</p> : null}
            </div>
            
            <div className="flex flex-grow" style={{color:"orange"}}>
                <Typography className="text-gray-400">{postedAt}</Typography>
                <Typography className="text-gray-400">{contract}</Typography>
                <Typography className="text-gray-400">{location}</Typography>
            </div>
        </div>
        <Grid >
            <GridList>
            {
                [...languages, ...tools].map( skill => <Skills skill={skill}key={skill} />)
            }
            </GridList>
           
        </Grid>
        </>
    )
}

export default Details
