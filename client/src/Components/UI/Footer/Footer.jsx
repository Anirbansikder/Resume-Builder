import React from 'react'
import imgSrc from '../../assets/GitHub-Mark-64px.png'
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyle = makeStyles({
    image : {
        position: 'fixed',
        bottom: '0',
        right : '10px',
        height: '70px',
        zIndex : 5,
        '@media(max-width: 780px)' : {
            height : '45px',
            position : 'relative'
        }
    },
})

const Footer = () => {
    const classes = useStyle();
    return (
        <footer style={{ display : 'flex' , justifyContent : 'center' , alignItems : 'center' ,padding : '10px'}}>
            <Typography style={{padding : '10px'}}> &copy; Anirban Sikder</Typography>
            <a href="https://github.com/Anirbansikder/Sorting-Algo-Visualization"><img src={imgSrc} alt="Github Logo" className={classes.image}/></a>
        </footer>
    )
}

export default Footer;
