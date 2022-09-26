import axios from "axios";
 
 async function getData(){

    const config = {
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    const response =await axios.get('http://localhost:8080/api/job/getAllJobs',config).then((response) => {
    setJobs(response.data);
    
        
        console.log(listings)
        console.log(result)
      });
      
  
    // const response = await fetch('./data.json')
    const data = await response.json()
    return data
}

export default getData