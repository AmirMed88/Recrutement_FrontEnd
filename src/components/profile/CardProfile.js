import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect,useState } from 'react';
import axios from 'axios';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
 
export default function CardProfile() {

    const [data,setData]=useState();
    useEffect(
       
        ()=>{

            const config = {
                headers: { 
                    Authorization: `Bearer ${localStorage.getItem('token')}` }
            };
            axios.get('http://localhost:8080/api/profile/getAllProfiles',config).then((response) => {
                setData(response.data);
                console.log(response.data)
              });
              
        }
     ,{})
   
  return (
    <Card sx={{height:'20vh',width:20, margin:"20px auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}