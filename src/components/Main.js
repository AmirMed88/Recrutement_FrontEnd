import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import videoBg2 from '../assets/videoBg2.mp4'
import Login from './login'
import Signup from './signup'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UserForm from './UserForm';
import Header from './Header';
import Carousel from './Carousel';
import Sidebar from './sidebar/Sidebar'
import Job from './Job'
import PostJob from './PostJob'
import PostProfile from './PostProfile'


const Main = () => {
  return (
    <div className='main'>
      
        <div className=""></div>
        <video src={videoBg2} autoPlay loop muted />
        
        <div className="content">
       

            <Router>
            
              
              
      

        
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav> */}

        
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobpage" element={<PostJob/>}/>
            
          <Route path="/login" element={<Login />}/>
           
          
          <Route  path="/form" element={<UserForm />} />
          <Route  path="/job" element={<Job />} />
          <Route  path="/cv" element={<PostProfile />} />
        </Routes>
      
    </Router>
           
        </div>
    </div>
  )
}

export default Main