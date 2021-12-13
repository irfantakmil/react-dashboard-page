import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";


export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        classname:'nav-text'
    },
    {
        title:'To-do',
        path:'/todo',
        icon:<BsIcons.BsFileEarmarkCheckFill/>,
        classname:'nav-text'
    },
    {
        title:'Data',
        path:'/data',
        icon:<IoIcons.IoIosPaper/>,
        classname:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus/>,
        classname:'nav-text'
    },
    {
        title:'Companies',
        path:'/companies',
        icon:<BsIcons.BsBuilding/>,
        classname:'nav-text'
    },

]