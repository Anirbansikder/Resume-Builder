import React , { Component } from 'react';
import { Grid  , Paper , Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Buttons from '../Controls/Buttons.jsx';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import Input from '../Controls/Input';
import validator from 'validator'
import Grow from '@material-ui/core/Grow';

class PersonalProjects extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    checkErrorDates = () => {
        if(this.props.value.company !== '' && (!validator.isDate(this.props.value.startDateC1) || !validator.isDate(this.props.value.endDateC1))){
            return true;
        }
        return false;
    }
    render(){
        const disabled = this.checkErrorDates();
        return (
            <Grow in={true} timeout={1000}>
                <Paper elevation={6} style={{padding : '20px 20px' , margin : '15px 10px'}}>
                    <Typography variant='h5' color='primary' gutterBottom>{this.props.header}</Typography>
                    <Typography variant='h6' color='textSecondary' align="left" style={{marginTop : 20}}>Working Experience</Typography>
                    <Grid container spacing={3} style={{padding : 10 , marginBottom : 20}} >
                        <Input name="company" label="Company Name" defaultValue={this.props.value.company} handleChange={this.props.handleChange} length={12} type="text" helperText="" disable={disabled}/>  
                        <Grid container item lg={12} >
                            <TextField id="outlined-basic" label="Brief About The Position" variant="outlined" fullWidth size="small" multiline rows={4} rowsMax={8} name="bioCompany" defaultValue={this.props.value.bioCompany} onChange={this.props.handleChange('bioCompany')}/>
                        </Grid>
                        <Grid container item lg={6} >
                            <TextField id="date" label="Start date" type="date" defaultValue={this.props.value.startDateC1} onChange={this.props.handleChange('startDateC1')} InputLabelProps={{ shrink: true }} fullWidth helperText={disabled ? "Pick Proper Starting Date" : ""}/>
                        </Grid>
                        <Grid container item lg={6} >
                            <TextField id="date" label="End date (Expected)" type="date" defaultValue={this.props.value.endDateC1} onChange={this.props.handleChange('endDateC1')} InputLabelProps={{ shrink: true }} fullWidth helperText={disabled ? "Pick Proper Ending Date" : ""}/>
                        </Grid>
                    </Grid>
                    <Buttons label="previous" click={this.previous} disable={this.props.step === 0} select="secondary" icon={<SkipPreviousIcon/>} position = "start"/>
                    <Buttons label="next" click={this.continue} disable={disabled} select="primary" icon={<NavigateNextIcon/>} position = "end"/>
                </Paper>
            </Grow>
        )
    }
}

export default PersonalProjects;
