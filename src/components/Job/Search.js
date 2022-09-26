import React, { useState } from "react";
import axios from "axios";
const Search = ({ setSearchKeyword }) => {
const [search,setSearch]=useState('');
const [result,setResult]=useState([]);
const searchPosition=(e)=>{
  
    
    setSearch(e.target.value);
  
  }
  return (
    <div className="header-container">
      <ul>
        {/* <input style={{backgroundColor:"white",mt: 100, width: 300, mb:100 }} type="text" onChange={(e) => setSearchKeyword(e.target.value)} /> */}
        <input value={search} style={{backgroundColor:"white",mt: 100, width: 300, mb:100 }} type="text" onChange={searchPosition} />
      </ul>
    </div>
  );
};

export default Search;
