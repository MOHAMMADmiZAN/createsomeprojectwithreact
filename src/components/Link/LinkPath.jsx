import React from 'react';
import {Link} from "@reach/router";

function LinkPath() {
    const linkStyle = {
        textDecoration: 'none',
        padding: "15px",
        marginTop: '15px',
        fontSize: '15px',


    }
    return (
        <>
            <Link to={'/'}
                  style={{...linkStyle}}>Home</Link>
            <Link to={'/form'} style={{...linkStyle}}>Form</Link>
            <Link to={'/calculator'} style={{...linkStyle}}>Calculator</Link>
            <Link to={'/counter'} style={{...linkStyle}}>Counter</Link>
            <Link to={'/usersData'} style={{...linkStyle}}>Users</Link>
            <Link to={'/clock'} style={{...linkStyle}}>Clock</Link>
            <Link to={'/cart'} style={{...linkStyle}}>Cart</Link>
            <Link to={'/jokes'} style={{...linkStyle}}>Jokes</Link>
            <Link to={'/color'} style={{...linkStyle}}>Color</Link>
            <Link to={'/covid19'} style={{...linkStyle}}>Covid19</Link>
            <Link to={'/crud'} style={{...linkStyle}}>Crud</Link>
        </>
    );
}

export default LinkPath;