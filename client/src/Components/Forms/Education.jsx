import React , { Component } from 'react';
import { Grid  , Paper , Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Buttons from '../Controls/Buttons.jsx';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import Input from '../Controls/Input';
import validator from 'validator'
import Grow from '@material-ui/core/Grow';

class EducationDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    checkErrorCollegeName = () => {
        if(this.props.value.collegeName === '')
            return true;
        return false;
    }
    checkErrorSchoolName = () => {
        if(this.props.value.schoolName === '' )
            return true;
        return false;
    }
    checkErrorCollegePercentage = () => {
        if(validator.isFloat(this.props.value.percentageC) === false)
            return true;
        return false;
    }
    checkErrorSchoolPercentage = () => {
        if(validator.isFloat(this.props.value.percentageS) === false)
            return true;
        return false;
    }
    checkErrorDatesC = () => {
        if(!validator.isDate(this.props.value.startDateC) || !validator.isDate(this.props.value.endDateC)){
            return true;
        }
        return false;
    }
    checkErrorDatesS = () => {
        if(!validator.isDate(this.props.value.startDateS) || !validator.isDate(this.props.value.endDateS)){
            return true;
        }
        return false;
    }
    checkError = () => {
        if(this.checkErrorCollegeName() || this.checkErrorSchoolName() || this.checkErrorCollegePercentage() || this.checkErrorSchoolPercentage() || this.checkErrorDatesC() || this.checkErrorDatesS())
            return true;
        return false;
    }
    render(){
        const disabled = this.checkError();
        const disabledCollegeName = this.checkErrorCollegeName();
        const disabledSchoolName = this.checkErrorSchoolName();
        const disabledCollegePercentage = this.checkErrorCollegePercentage();
        const disabledSchoolPercentage = this.checkErrorSchoolPercentage();
        const disabledDateCollege = this.checkErrorDatesC();
        const disabledDateSchool = this.checkErrorDatesS();
        return (
            <Grow in={true} timeout={1000}>
                <Paper elevation={6} style={{padding : '20px 20px' , margin : '15px 10px'}}>
                    <Typography variant='h5' color='primary' gutterBottom>{this.props.header}</Typography>
                    <Typography variant='h6' color='textSecondary' align="left" style={{marginTop : 20}}>College Details</Typography>
                    <Grid container spacing={3} style={{padding : 10 , marginBottom : 20}} >
                        <Input name="collegeName" label="College Name" defaultValue={this.props.value.collegeName} handleChange={this.props.handleChange} length={12} type="text" helperText="College Name is required" disable={disabledCollegeName}/> 
                        <Input name="courseNameCollege" label="Course Name" defaultValue={this.props.value.courseNameCollege} handleChange={this.props.handleChange} length={6} type="text" helperText="" disable={disabled}/> 
                        <Input name="percentageC" label="Percentage / CGPA" defaultValue={this.props.value.percentageC} handleChange={this.props.handleChange} length={6} type="string" helperText="Valid Percentage/CGPA Required" disable={disabledCollegePercentage}/> 
                        <Grid container item lg={6} >
                            <TextField id="date" label="Start date" type="date" defaultValue={this.props.value.startDateC} onChange={this.props.handleChange('startDateC')} InputLabelProps={{ shrink: true }} fullWidth helperText={disabledDateCollege ? "Pick Proper Starting Date" : ""}/>
                        </Grid>
                        <Grid container item lg={6} >
                            <TextField id="date" label="End date (Expected)" type="date" defaultValue={this.props.value.endDateC} onChange={this.props.handleChange('endDateC')} InputLabelProps={{ shrink: true }} fullWidth helperText={disabledDateCollege ? "Pick Proper Ending Date" : ""}/>
                        </Grid>
                    </Grid>
                    <Typography variant='h6' color='textSecondary' align="left">School Details</Typography>
                    <Grid container spacing={3} style={{padding : 10}} >
                        <Input name="schoolName" label="School Name" defaultValue={this.props.value.schoolName} handleChange={this.props.handleChange} length={12} type="text" helperText="School Name is required" disable={disabledSchoolName}/> 
                        <Input name="courseNameSchool" label="Course Name" defaultValue={this.props.value.courseNameSchool} handleChange={this.props.handleChange} length={6} type="text" helperText="" disable={disabled}/> 
                        <Input name="percentageS" label="Percentage / CGPA" defaultValue={this.props.value.percentageS} handleChange={this.props.handleChange} length={6} type="string" helperText="Valid Percentage/CGPA Required" disable={disabledSchoolPercentage}/> 
                        <Grid container item lg={6} >
                            <TextField id="date" label="Start date" type="date" defaultValue={this.props.value.startDateS} onChange={this.props.handleChange('startDateS')} InputLabelProps={{ shrink: true }} fullWidth helperText={disabledDateSchool ? "Pick Proper Starting Date" : ""}/>
                        </Grid>
                        <Grid container item lg={6} >
                            <TextField id="date" label="End date (Expected)" type="date" defaultValue={this.props.value.endDateS} onChange={this.props.handleChange('endDateS')} InputLabelProps={{ shrink: true }} fullWidth helperText={disabledDateSchool ? "Pick Proper Ending Date" : ""}/>
                        </Grid>
                    </Grid>
                    <Buttons label="previous" click={this.previous} disable={this.props.step === 0} select="secondary" icon={<SkipPreviousIcon/>} position = "start"/>
                    <Buttons label="next" click={this.continue} disable={disabled} select="primary" icon={<NavigateNextIcon/>} position = "end"/>
                </Paper>
            </Grow>
        )
    }
}

export default EducationDetails;
