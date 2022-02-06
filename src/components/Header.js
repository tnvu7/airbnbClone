import React from 'react';
import '../css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Language from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            {/* a tag will refresh the page. Use Link! */}
            <Link to='/'>
                <img
                    className="header_icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <Language />
                <KeyboardArrowDownIcon />
                <AccountCircleIcon />
            </div>
        </div>);
}

export default Header;

