import React , { Component } from 'react';
import { Grid  , Paper , Typography} from '@material-ui/core';
import Buttons from '../Controls/Buttons.jsx';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import Input from '../Controls/Input';
import Grow from '@material-ui/core/Grow';

class Skills extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    checkErrorSkills = () => {
        let count = 0;
        if(this.props.value.skill1 === '')
            count += 1;
        if(this.props.value.skill2 === '')
            count += 1;
        if(this.props.value.skill3 === '')
            count += 1;
        if(this.props.value.skill4 === '')
            count += 1;
        if(this.props.value.skill5 === '')
            count += 1;
        if(this.props.value.skill6 === '')
            count += 1;
        return count;
    }
    render(){
        const disabled = this.checkErrorSkills() > 3 ? true : false;
        return (
            <Grow in={true} timeout={1000}>
                <Paper elevation={6} style={{padding : '20px 20px' , margin : '15px 10px'}}>
                    <Typography variant='h5' color='primary' gutterBottom>{this.props.header}</Typography>
                    <Typography variant='h6' color='textSecondary' align="left" style={{marginTop : 20}}>Pick 6 Top Skills</Typography>
                    <Grid container spacing={3} style={{padding : 10 , marginBottom : 20}} >
                        <Input name="skill1" label="Skill 1" defaultValue={this.props.value.skill1} handleChange={this.props.handleChange} length={4} type="text" helperText="Provide atleast 3 Skills" disable={disabled}/> 
                        <Input name="skill2" label="Skill 2" defaultValue={this.props.value.skill2} handleChange={this.props.handleChange} length={4} type="text" helperText="Provide atleast 3 Skills" disable={disabled}/>  
                        <Input name="skill3" label="Skill 3" defaultValue={this.props.value.skill3} handleChange={this.props.handleChange} length={4} type="text" helperText="Provide atleast 3 Skills" disable={disabled}/>  
                        <Input name="skill4" label="Skill 4" defaultValue={this.props.value.skill4} handleChange={this.props.handleChange} length={4} type="text" helperText="" disable={disabled}/>  
                        <Input name="skill5" label="Skill 5" defaultValue={this.props.value.skill5} handleChange={this.props.handleChange} length={4} type="text" helperText="" disable={disabled}/>  
                        <Input name="skill6" label="Skill 6" defaultValue={this.props.value.skill6} handleChange={this.props.handleChange} length={4} type="text" helperText="" disable={disabled}/>  
                    </Grid>
                    <Typography variant='h6' color='textSecondary' align="left" style={{marginTop : 20}}>Achievements</Typography>
                    <Grid container spacing={3} style={{padding : 10}} >
                        <Input name="achievement1" label="Achievement 1" defaultValue={this.props.value.achievement1} handleChange={this.props.handleChange} length={8} type="text" helperText="" disable={disabled}/> 
                        <Input name="linkAch1" label="Provide Link" defaultValue={this.props.value.linkAch1} handleChange={this.props.handleChange} length={4} type="url" helperText="" disable={disabled}/>  
                        <Input name="achievement2" label="Achievement 2" defaultValue={this.props.value.achievement2} handleChange={this.props.handleChange} length={8} type="text" helperText="" disable={disabled}/> 
                        <Input name="linkAch2" label="Provide Link" defaultValue={this.props.value.linkAch2} handleChange={this.props.handleChange} length={4} type="url" helperText="" disable={disabled}/>  
                        <Input name="achievement3" label="Achievement 3" defaultValue={this.props.value.achievement3} handleChange={this.props.handleChange} length={8} type="text" helperText="" disable={disabled}/> 
                        <Input name="linkAch3" label="Provide Link" defaultValue={this.props.value.linkAch3} handleChange={this.props.handleChange} length={4} type="url" helperText="" disable={disabled}/>  
                        <Input name="achievement4" label="Achievement 4" defaultValue={this.props.value.achievement4} handleChange={this.props.handleChange} length={8} type="text" helperText="" disable={disabled}/> 
                        <Input name="linkAch4" label="Provide Link" defaultValue={this.props.value.linkAch3} handleChange={this.props.handleChange} length={4} type="url" helperText="" disable={disabled}/>  
                    </Grid>
                    <Buttons label="previous" click={this.previous} disable={this.props.step === 0} select="secondary" icon={<SkipPreviousIcon/>} position = "start"/>
                    <Buttons label="next" click={this.continue} disable={disabled} select="primary" icon={<NavigateNextIcon/>} position = "end"/>
                </Paper>
            </Grow>
        )
    }
}

export default Skills;
