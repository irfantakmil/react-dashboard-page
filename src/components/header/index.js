import React from 'react';
import "../../styles/header.css"
import * as CgIcons from "react-icons/cg"
import { IconContext } from 'react-icons/lib';


const Header = () => {
    return (
        <>
            <IconContext.Provider value={{size:'20px'}}>
                <div className="header_container">
                    <div className="header_icons">
                        <div className="search_icon">
                            <CgIcons.CgSearch/>
                        </div>
                        <div className="bell_icon">
                            <CgIcons.CgBell/>
                        </div>
                    </div>
                    <div className="profile_icon">
                        <CgIcons.CgProfile/>
                        <div className="user_name">
                            <p>John Doe</p>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Header;