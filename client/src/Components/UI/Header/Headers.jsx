import React from 'react';
import { Typography } from '@material-ui/core';

const Header = () => {
    return (
        <header style={{ backgroundColor : '#1976d2' , textAlign : 'center' , color : 'white' , margin : '0' , padding : '10px 0'}}>
            <Typography variant='h4'>Resume Builder</Typography>
        </header>
    )
}

export default Header;
