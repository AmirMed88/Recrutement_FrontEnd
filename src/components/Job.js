import { useEffect, useState } from 'react';
import React from 'react';
import FilterItem from './Job/FilterItem';
import Header from './Job/Header';
import JobCard from './Job/JobCard';
import listingsData from './data/data.json'
import  "./Job.css";
import { Container, Paper } from '@material-ui/core';
import Search from './Job/Search';
import axios from 'axios';
function Job() {
  // const [listings, setListings] = useState([])
  const [filters, setFilters] = useState([])
  const [listings,setListings]=useState([])
  const [searchv,setSearchv]=useState(localStorage.getItem('searchvalue'));
  const [newlistings,setNewlistings]=useState([])

  useEffect(()=>{
    const config = {
      headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}` }
  };
 const result = axios.get('http://localhost:8080/api/job/getAllJobs',config).then((response) => {
  setListings(response.data);
  
      
      console.log(listings)
      console.log(result)
    });
    
}
  ,{})

  useEffect(()=>{
    const config = {
      headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}` }
  };
  const result = axios.get('http://localhost:8080/api/job/getJobByPosition/'+searchv,config).then((response) => {
    setNewlistings(response.data)
  
     console.log(response.data)
    });
    
  },{})
  console.log('listings',listings)

  useEffect(() => {
    if(filters.length == 0)
      setListings(listingsData)
  }, [filters])
  
  const filterJobs = (filter_by = null) => {

    if (!filters.includes(filter_by) && filter_by !== null)
      setFilters([...filters, filter_by])

    setListings(listings.filter(listing => [...listing.languages, ...listing.tools].includes(filter_by)))
  }

  const removeFilter = (removed_filter) => {
    setFilters( filters.filter( item => item !== removed_filter ) )
  }

  return (
    <Paper style={{postion:"relative", height:"550px",overflow:'scroll'}}>
    
     <Header />
     
     <div style={{align:'center' ,color:'orange'}}>
       { filters.map(filter => <FilterItem item={filter} _callback={removeFilter} key={filter} />)}
     </div>
     <div className="card" style={{padding:10,fontFamily:'monospace'}}>
      
       {searchv?<div>
        { newlistings.map(listing => <JobCard style={{height:"10"}} listing={listing} key={listing.id} filtering={filterJobs} />) }     
       </div> : <div>{ listings.map(listing => <JobCard style={{height:"10"}} listing={listing} key={listing.id} filtering={filterJobs} />) }</div>}
     </div>
    
    
    </Paper>
  );
}

export default Job;
