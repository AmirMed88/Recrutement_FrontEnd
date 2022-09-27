import { useEffect, useState } from 'react';
import React from 'react';
import FilterItem from './Job/FilterItem';
import Header from './Job/Header';
import JobCard from './Job/JobCard';
import listingsData from './data/data.json'
import "./Job.css";
import { Container, Paper } from '@material-ui/core';
import Search from './Job/Search';
import axios from 'axios';
function Job() {
  // const [listings, setListings] = useState([])
  const [filters, setFilters] = useState([])
  const [listings, setListings] = useState([])
  const [searchv, setSearchv] = useState(localStorage.getItem('searchvalue'));
  const [newlistings, setNewlistings] = useState([])
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([])


  const searchPosition = (e) => {

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    axios.get('http://localhost:8080/api/job/getJobByPosition/' + search, config).then((response) => {
          setListings(response.data)

          console.log(response.data)
        });
    setSearch(e.target.value);

  }

  // useEffect(() => {

  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     }
  //   };
  //   switch (searchv) {

  //     case !null:

  //       axios.get('http://localhost:8080/api/job/getJobByPosition/' + searchv, config).then((response) => {
  //         setListings(response.data)

  //         console.log(response.data)
  //       });

  //       break;
  //     default:

  //       const result = axios.get('http://localhost:8080/api/job/getAllJobs', config).then((response) => {
  //         setListings(response.data);


  //         console.log(listings)
  //         console.log(result)
  //       });
  //   }


  // }
  //   , [searchv])

  useEffect(() => {

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    const result = axios.get('http://localhost:8080/api/job/getAllJobs', config).then((response) => {
      setListings(response.data);


      console.log(listings)
      console.log(result)
    });

  }, {})
  console.log('listings', listings)

  useEffect(() => {
    if (filters.length == 0)
      setListings(listingsData)
  }, [filters])

  const filterJobs = (filter_by = null) => {

    if (!filters.includes(filter_by) && filter_by !== null)
      setFilters([...filters, filter_by])

    setListings(listings.filter(listing => [...listing.languages, ...listing.tools].includes(filter_by)))
  }

  const removeFilter = (removed_filter) => {
    setFilters(filters.filter(item => item !== removed_filter))
  }

  return (
    <Paper style={{ postion: "relative", height: "75vh", overflow: 'scroll' }}>

      <div className="header-container">
        <ul>
          {/* <input style={{backgroundColor:"white",mt: 100, width: 300, mb:100 }} type="text" onChange={(e) => setSearchKeyword(e.target.value)} /> */}
          <input value={search} style={{ backgroundColor: "white", mt: 100, width: 300, mb: 100 }} type="text" onChange={searchPosition} />
        </ul>
      </div>

      <div style={{ align: 'center', color: 'orange' }}>
        {filters.map(filter => <FilterItem item={filter} _callback={removeFilter} key={filter} />)}
      </div>
      <div className="card" style={{ padding: 10, fontFamily: 'monospace' }}>
        {listings.map(listing => <JobCard style={{ height: "10",display:'flex',margin:"3rem" }} listing={listing} key={listing.id} filtering={filterJobs} />
        )}
        {/* {searchv?<div>
        { newlistings.map(listing => <JobCard style={{height:"10"}} listing={listing} key={listing.id} filtering={filterJobs} />) }     
       </div> : <div>{ listings.map(listing => <JobCard style={{height:"10"}} listing={listing} key={listing.id} filtering={filterJobs} />) }</div>} */}
      </div>


    </Paper>
  );
}

export default Job;
