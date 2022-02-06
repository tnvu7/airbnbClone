import React from 'react';
import './Footer.css';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    return (
        <div className="footer">
            <p>
                <CopyrightIcon /> 2022 Airbnb clone, Natalie Vu. This is a demo.
            </p>
            <p>
                Privacy &bull; Terms &bull; Sitemap &bull; Company Details
            </p>
        </div>
    );
}

export default Footer;
