import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography,
  Link
} from "@material-ui/core";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home
} from "@material-ui/icons";

import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "white",
    height: "100%"
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "tan"
  }
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    link:'/'
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Profiles",
    link:'/cv',
  },
  {
    listIcon: <Apps />,
    listText: "Jobs",
    link:'/jobpage'
  }
  // {
  //   listIcon: <ContactMail />,
  //   listText: "Contacts",
  //   link:'/'
  // }
];

export default function NewSidebar() {
  
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
      />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem className={classes.listItem} button href={listItem.link}  key={index}>
            <ListItemIcon href={listItem.link} className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
           <Link className={classes.listItem} href={listItem.link}>{listItem.listText}</Link>
            {/* <ListItemText  primary={listItem.listText} /> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />

      <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            
            <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
    </>
  );
}
