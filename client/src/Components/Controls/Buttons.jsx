import React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = (props) => {
    const icon_start = props.position === 'start' ? props.icon : '';
    const icon_end = props.position === 'end' ? props.icon : '';
    return (
        <Button 
            variant="contained" 
            color={props.select} 
            onClick={props.click} 
            disabled = {props.disable}
            startIcon = {icon_start}
            endIcon = {icon_end}
            style={{margin : 10}}
            > {props.label} 
        </Button>
    );
}

export default Buttons;