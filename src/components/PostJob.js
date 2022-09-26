import React from "react"
import { Container } from "react-bootstrap";
import Job from "./Job";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import JobForm from "./Job/JobForm";
const PostJob=()=>{

    return(
        <Grid container spacing={2}>
            <Grid item xs={4} >
                <JobForm/>
            </Grid>
            <Grid item xs={8} >
               <Job/>
            </Grid>
  
        </Grid>


        );
}
export default PostJob
