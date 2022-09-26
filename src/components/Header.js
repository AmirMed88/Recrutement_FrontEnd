import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import AdbIcon from '@material-ui/icons/Adb';
import Sidebar from './sidebar/Sidebar';
import NewSidebar from './sidebar/NewSidebar';
import { useState } from 'react';
import {
  
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import {
  Apps,
  ContactMail,
  AssignmentInd,
  Home
} from "@material-ui/icons";


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];






const Header = () => {
  const btnstyle={margin:'8px 0',position: 'absolute', right: 0 ,backgroundColor:'orange',color:"white",'hover': {
    backgroundColor:'white',
}}
const btnstyle2={margin:'8px 0',position: 'absolute', right: 100,backgroundColor:'black',color:"white",'hover': {
  backgroundColor:'white',
}}
  
  const [open, setOpen] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  



  //////////////////////////////////////////////////////////////////////

  

  return (
    
    <AppBar   style={{ background: "#E7E194" ,top:"0" }}>
      <Container fluid >
      
        <Toolbar >
        
        
          <NewSidebar/>

          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography 
            style={{fontFamily: "Arial",color:"#FFFFFF"}}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            fontFamily="corrier"
          >
            RECRUTE
          </Typography>
          <Button type='submit' href='/' color='primary' variant="contained" style={btnstyle}  >Disconnect </Button>
          <Button type='submit' href='/' color='primary' variant="contained" style={btnstyle2}  >login </Button>
        
          

          
        </Toolbar>
         
      </Container>
    </AppBar>
  );
};
export default Header;