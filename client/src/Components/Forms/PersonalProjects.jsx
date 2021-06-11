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
    checkErrorProjectName = () => {
        if(this.props.value.project1 === '')
            return true;
        return false;
    }
    checkErrorURL1 = () => {
        if(this.props.value.link1 !== '' && validator.isURL(this.props.value.link1) === false)
            return true;
        return false;
    }
    checkErrorURL2 = () => {
        if(this.props.value.link2 !== '' && validator.isURL(this.props.value.link2) === false)
            return true;
        return false;
    }
    checkErrorDatesP1 = () => {
        if(!validator.isDate(this.props.value.startDateP1) || !validator.isDate(this.props.value.endDateP1)){
            return true;
        }
        return false;
    }
    checkErrorDatesP2 = () => {
        if(!validator.isDate(this.props.value.startDateP2) || !validator.isDate(this.props.value.endDateP2)){
            return true;
        }
        return false;
    }
    checkError = () => {
        if(this.checkErrorProjectName() || this.checkErrorURL1() || this.checkErrorURL2() || this.checkErrorDatesP1())
            return true;
        return false;
    }
    render(){
        const disabled = this.checkError();
        const disabledProjectName = this.checkErrorProjectName();
        const disabledURL1 = this.checkErrorURL1();
        const disabledURL2 = this.checkErrorURL2();
        const disabledDateP1 = this.checkErrorDatesP1();
        const disabledDateP2 = this.checkErrorDatesP2();
        return (
            <Grow in={true} timeout={1000}>
                <Paper elevation={6} style={{padding : '20px 20px' , margin : '15px 10px'}}>
                    <Typography variant='h5' color='primary' gutterBottom>{this.props.header}</Typography>
                    <Typography variant='h6' color='textSecondary' align="left" style={{marginTop : 20}}>Project Detail 1</Typography>
                    <Grid container spacing={3} style={{padding : 10 , marginBottom : 20}} >
                        <Input name="project1" label="Project Name" defaultValue={this.props.value.project1} handleChange={this.props.handleChange} length={8} type="text" helperText="Atleast One Project Required" disable={disabledProjectName}/>  
                        <Input name="link1" label="Link To The Project" defaultValue={this.props.value.link1} handleChange={this.props.handleChange} length={4} type="url" helperText="Give A Valid URL or Leave Blank if N/A" disable={disabledURL1}/> 
                        <Grid container item lg={12} >
                            <TextField id="outlined-basic" label="Brief About Project" variant="outlined" fullWidth size="small" multiline rows={4} rowsMax={8} name="bioP1" defaultValue={this.props.value.bioP1} onChange={this.props.handleChange('bioP1')}/>
                        </Grid>
                        <Grid container item lg={6} >
                            <TextField id="date" label="Start date" type="date" defaultValue={this.props.value.startDateP1} onChange={this.props.handleChange('startDateP1')} InputLabelProps={{ shrink: true }} fullWidth helperText={disabledDateP1 ? "Pick Proper Starting Date" : ""}/>
                        </Grid>
                        <Grid container item lg={6} >
                            <TextField id="date" label="End date (Expected)" type="date" defaultValue={this.props.value.endDateP1} onChange={this.props.handleChange('endDateP1')} InputLabelProps={{ shrink: true }} fullWidth helperText={disabledDateP1 ? "Pick Proper Ending Date" : ""}/>
                        </Grid>
                    </Grid>
                    <Typography variant='h6' color='textSecondary' align="left" style={{marginTop : 20}}>Project Detail 2</Typography>
                    <Grid container spacing={3} style={{padding : 10 , marginBottom : 20}} >
                        <Input name="project2" label="Project Name" defaultValue={this.props.value.project2} handleChange={this.props.handleChange} length={8} type="text" helperText="" disable={disabled}/>  
                        <Input name="link2" label="Link To The Project" defaultValue={this.props.value.link2} handleChange={this.props.handleChange} length={4} type="url" helperText="Give A Valid URL or Leave Blank if N/A" disable={disabledURL2}/> 
                        <Grid container item lg={12} >
                            <TextField id="outlined-basic" label="Brief About Project" variant="outlined" fullWidth size="small" multiline rows={4} rowsMax={8} name="bioP2" defaultValue={this.props.value.bioP2} onChange={this.props.handleChange('bioP2')}/>
                        </Grid>
                        <Grid container item lg={6} >
                            <TextField id="date" label="Start date" type="date" defaultValue={this.props.value.startDateP2} onChange={this.props.handleChange('startDateP2')} InputLabelProps={{ shrink: true }} fullWidth helperText={disabledDateP2 ? "Pick Proper Starting Date" : ""}/>
                        </Grid>
                        <Grid container item lg={6} >
                            <TextField id="date" label="End date (Expected)" type="date" defaultValue={this.props.value.endDateP2} onChange={this.props.handleChange('endDateP2')} InputLabelProps={{ shrink: true }} fullWidth helperText={disabledDateP2 ? "Pick Proper Ending Date" : ""}/>
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
