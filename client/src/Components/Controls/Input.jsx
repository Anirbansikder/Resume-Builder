import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const input = (props) => {
    const id_name = `outlined-basic ${props.name}`
    return (
        <Grid container item lg={props.length} >
            <TextField name={props.name} id={id_name} label={props.label} variant="outlined" fullWidth size="small" defaultValue={props.defaultValue} onChange={props.handleChange(props.name)} type={props.type} helperText={props.disable ? props.helperText : ""}/>
        </Grid>
    )
}

export default input;
