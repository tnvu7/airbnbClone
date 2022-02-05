import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Language from '@mui/icons-material/Language';

function Header() {
    return (
        <div className="header">
            <img 
            className="header_icon"
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt=""
            />
            <div className="header_center">
                <input type="text"/>
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <Language/>
                <KeyboardArrowDownIcon/>
                <AccountCircleIcon/>
            </div>
        </div>);
}

export default Header;

