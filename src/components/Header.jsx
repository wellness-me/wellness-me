import React from 'react';

function PageHeader() { /*A regular page header to be put at the top of pages */
    return (
        <div className="header-container">
            <button className="header-nav-button">Data Collection</button>
            <button className="header-nav-button">Data Display</button>
        </div>
    );
}

export default PageHeader;