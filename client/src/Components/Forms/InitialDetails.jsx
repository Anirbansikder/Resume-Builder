import React , { Component } from 'react';
import { Grid  , Paper , Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Buttons from '../Controls/Buttons.jsx';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import Input from '../Controls/Input';
import validator from 'validator';
import Grow from '@material-ui/core/Grow';

class InitialDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    checkErrorFirstName = () => {
        if(this.props.value.firstName === '')
            return true;
        return false;
    }
    checkErrorLastName = () => {
        if(this.props.value.lastName === '' )
            return true;
        return false;
    }
    checkErrorEmail = () => {
        if(validator.isEmail(this.props.value.email) === false)
            return true;
        return false;
    }
    checkErrorlinkedIn = () => {
        if(this.props.value.linkedIn !== '' && validator.isURL(this.props.value.linkedIn) === false)
            return true;
        return false;
    }
    checkErrorGithub = () => {
        if(this.props.value.github !== '' && validator.isURL(this.props.value.github) === false)
            return true;
        return false;
    }
    checkError = () => {
        if(this.checkErrorFirstName() || this.checkErrorLastName() || this.checkErrorEmail() || this.checkErrorlinkedIn() || this.checkErrorGithub())
            return true;
        return false;
    }
    render(){
        const disabled = this.checkError();
        const disabledFirstName = this.checkErrorFirstName();
        const disabledLastName = this.checkErrorLastName();
        const disabledEmail = this.checkErrorEmail();
        const disabledLinkedIn = this.checkErrorlinkedIn();
        const disabledGithub = this.checkErrorGithub();
        return (
            <Grow in={true} timeout={1000}>
                <Paper elevation={6} style={{padding : '20px 20px' , margin : '15px 10px'}}>
                    <Typography variant='h5' color='primary' gutterBottom>{this.props.header}</Typography>
                    <Typography variant='h6' color='textSecondary' align="left" style={{marginTop : 20}}>Basic Details</Typography>
                    <Grid container spacing={3} style={{padding : 10}} >
                        <Input name="firstName" label="First Name" defaultValue={this.props.value.firstName} handleChange={this.props.handleChange} length={6} type="text" helperText="First Name is required" disable={disabledFirstName}/> 
                        <Input name="lastName" label="Last Name" defaultValue={this.props.value.lastName} handleChange={this.props.handleChange} length={6} type="text" helperText="Last Name is required" disable={disabledLastName}/> 
                        <Input name="email" label="Email Id" defaultValue={this.props.value.email} handleChange={this.props.handleChange} length={6} type="email" helperText="Valid Email Required" disable={disabledEmail}/> 
                        <Input name="phone" label="Phone Number" defaultValue={this.props.value.phone} handleChange={this.props.handleChange} length={6} type="number" helperText="" disable={disabled}/> 
                        <Input name="linkedIn" label="LinkedIn Id" defaultValue={this.props.value.linkedIn} handleChange={this.props.handleChange} length={6} type="url" helperText="Enter Valid URL or Leave Blank If N/A" disable={disabledLinkedIn}/> 
                        <Input name="github" label="Github Id" defaultValue={this.props.value.github} handleChange={this.props.handleChange} length={6} type="url" helperText="Enter Valid URL or Leave Blank If N/A" disable={disabledGithub}/> 
                        <Grid container item lg={12} >
                            <TextField id="outlined-basic" label="Brief About Yourself" variant="outlined" fullWidth size="small" multiline rows={4} rowsMax={8} name="bio" defaultValue={this.props.value.bio} onChange={this.props.handleChange('bio')}/>
                        </Grid>
                    </Grid>
                    <Buttons label="previous" click={this.props.prevStep} disable={this.props.step === 0} select="secondary" icon={<SkipPreviousIcon/>} position = "start"/>
                    <Buttons label="next" click={this.continue} disable={disabled} select="primary" icon={<NavigateNextIcon/>} position = "end"/>
                </Paper>
            </Grow>
        )
    }
}

export default InitialDetails;
