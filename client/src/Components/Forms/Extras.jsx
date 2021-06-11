import React , { Component } from 'react';
import { Grid  , Paper , Typography} from '@material-ui/core';
import Buttons from '../Controls/Buttons.jsx';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import Input from '../Controls/Input';
import BackupIcon from '@material-ui/icons/Backup';
import validator from 'validator';
import Grow from '@material-ui/core/Grow';

class Languages extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    checkErrorURL1 = () => {
        if(this.props.value.linkcert1 !== '' && validator.isURL(this.props.value.linkcert1) === false)
            return true;
        return false;
    }
    checkErrorURL2 = () => {
        if(this.props.value.linkcert2 !== '' && validator.isURL(this.props.value.linkcert2) === false)
            return true;
        return false;
    }
    checkErrorLanguage = () => {
        let count = 0;
        if(this.props.value.language1 === '')
            count += 1;
        if(this.props.value.language2 === '')
            count += 1;
        if(this.props.value.language3 === '')
            count += 1;
        return count;
    }
    checkError = () => {
        if(this.checkErrorLanguage() >= 3 || this.checkErrorURL1() || this.checkErrorURL2())
            return true;
        return false;
    }
    render(){
        const disabled = this.checkError();
        const disabledURL1 = this.checkErrorURL1();
        const disabledURL2 = this.checkErrorURL2();
        const disabledLanguage = this.checkErrorLanguage() === 3 ? true : false;
        return (
            <Grow in={true} timeout={1000}>
                <Paper elevation={6} style={{padding : '20px 20px' , margin : '15px 10px'}}>
                    <Typography variant='h5' color='primary' gutterBottom>{this.props.header}</Typography>
                    <Typography variant='h6' color='textSecondary' align="left" style={{marginTop : 20}}>Certifications</Typography>
                    <Grid container spacing={3} style={{padding : 10 , marginBottom : 20}} >
                        <Input name="certificate1" label="Certificate 1" defaultValue={this.props.value.certificate1} handleChange={this.props.handleChange} length={8} type="text" helperText="" disable={disabled}/> 
                        <Input name="linkcert1" label="Link" defaultValue={this.props.value.linkcert1} handleChange={this.props.handleChange} length={4} type="url" helperText="Provide Valid Link or Leave Blank if N/A" disable={disabledURL1}/>  
                        <Input name="certificate2" label="Certificate 2" defaultValue={this.props.value.certificate2} handleChange={this.props.handleChange} length={8} type="text" helperText="" disable={disabled}/>  
                        <Input name="linkcert2" label="Link" defaultValue={this.props.value.linkcert2} handleChange={this.props.handleChange} length={4} type="url" helperText="Provide Valid Link or Leave Blank if N/A" disable={disabledURL2}/>
                    </Grid>
                    <Typography variant='h6' color='textSecondary' align="left" style={{marginTop : 20}}>Languages</Typography>
                    <Grid container spacing={3} style={{padding : 10}} >
                        <Input name="language1" label="Language 1" defaultValue={this.props.value.language1} handleChange={this.props.handleChange} length={4} type="text" helperText="Provide atleast 1 language" disable={disabledLanguage}/> 
                        <Input name="language2" label="Language 2" defaultValue={this.props.value.language2} handleChange={this.props.handleChange} length={4} type="text" helperText="Provide atleast 1 language" disable={disabledLanguage}/>  
                        <Input name="language3" label="Language 3" defaultValue={this.props.value.language3} handleChange={this.props.handleChange} length={4} type="text" helperText="Provide atleast 1 language" disable={disabledLanguage}/>
                    </Grid>
                    <Typography variant='h6' color='textSecondary' align="left" style={{marginTop : 20}}>Interests</Typography>
                    <Grid container spacing={3} style={{padding : 10}} >
                        <Input name="interest1" label="Interest 1" defaultValue={this.props.value.interest1} handleChange={this.props.handleChange} length={3} type="text" helperText="" disable={disabled}/> 
                        <Input name="interest2" label="Interest 2" defaultValue={this.props.value.interest2} handleChange={this.props.handleChange} length={3} type="text" helperText="" disable={disabled}/>  
                        <Input name="interest3" label="Interest 3" defaultValue={this.props.value.interest3} handleChange={this.props.handleChange} length={3} type="text" helperText="" disable={disabled}/>
                        <Input name="interest4" label="Interest 4" defaultValue={this.props.value.interest4} handleChange={this.props.handleChange} length={3} type="text" helperText="" disable={disabled}/>
                    </Grid>
                    <Buttons label="previous" click={this.previous} disable={this.props.step === 0} select="secondary" icon={<SkipPreviousIcon/>} position = "start"/>
                    <Buttons label="Submit" click={this.continue} disable={disabled} select="primary" icon={<BackupIcon/>} position = "end"/>
                </Paper>
            </Grow>
        )
    }
}

export default Languages;
