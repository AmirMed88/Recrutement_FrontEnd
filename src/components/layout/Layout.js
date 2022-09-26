import React from "react";

import Header from "../Header";
import Main from "../Main";
import NewSidebar from "../sidebar/NewSidebar";
import Sidebar from "../sidebar/Sidebar";


export default function Layout (props)
{

    return(
    <div className={props.class}>
    <Header style={{margin:"11px"}}/>
    <Main/>
    {/* <NewSidebar/> */}
    {/* <Sidebar/> */}
    {props.children}
    <hr/>
    </div>)


















}