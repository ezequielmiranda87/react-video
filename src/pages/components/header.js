import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';


const Header = (props) =>{
    return(
        <div className="Header">
        <AppBar position="static">
            <Toolbar>
            <IconButton  color="inherit" aria-label="Menu" className = "menuButton">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className="grow">
                React Video
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;
