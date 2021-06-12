import React, { Component } from 'react';
import Steppers from '../Components/Stepper/Steppers.jsx';
import Aux from '../hoc/Auxiliary';
import InitialForm from '../Components/Forms/InitialDetails.jsx';
import EducationForm from '../Components/Forms/Education';
import ProjectForm from '../Components/Forms/PersonalProjects';
import WorkingExperience from '../Components/Forms/WorkingExperience';
import Skills from '../Components/Forms/Skills';
import Extras from '../Components/Forms/Extras';
import Sucess from '../Components/Forms/Sucess';

export class UserForm extends Component {
    state = {
        step : 0,
        firstName : '',
        lastName : '',
        email : '',
        phone : '',
        linkedIn : '',
        github : '',
        bio : '',

        courseNameCollege : '',
        collegeName : '',
        startDateC : '',
        endDateC : '',
        percentageC : '',

        courseNameSchool : '',
        schoolName : '',
        startDateS : '',
        endDateS : '',
        percentageS : '',

        courseNameSchool2 : '',
        schoolName2 : '',
        startDateS2 : '',
        endDateS2 : '',
        percentageS2 : '',

        project1 : '',
        startDateP1 : '',
        endDateP1 : '',
        link1 : '',
        bioP1 : '',

        project2 : '',
        startDateP2 : '',
        endDateP2 : '',
        link2 : '',
        bioP2 : '',

        company1 : '',
        startDateC1 : '',
        endDateC1 : '',
        bioCompany1 : '',

        company2 : '',
        startDateC2 : '',
        endDateC2 : '',
        bioCompany2 : '',

        skill1 : '',
        skill2 : '',
        skill3 : '',
        skill4 : '',
        skill5 : '',
        skill6 : '',

        achievement1 : '',
        linkAch1 : '',
        achievement2 : '',
        linkAch2 : '',
        achievement3 : '',
        linkAch3 : '',
        achievement4 : '',
        linkAch4 : '',

        certificate1 : '',
        linkcert1 : '',
        certificate2 : '',
        linkcert2 : '',

        language1 : '',
        language2 : '',
        language3 : '',

        interest1 : '',
        interest2 : '',
        interest3 : '',
        interest4 : '',
    }
    nextStep = () => {
        const currStep = this.state.step;
        this.setState({
            step : currStep + 1
        })
    }
    prevStep = () => {
        const currStep = this.state.step;
        this.setState({
            step : currStep - 1
        })
    }
    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }
    getForm = () => {
        switch(this.state.step) {
            case 0:
                return <InitialForm prevStep = {this.prevStep} nextStep = {this.nextStep} step={this.state.step} header="Fill Your Basic Details" handleChange={this.handleChange} value={this.state}/>
            case 1:
                return <EducationForm prevStep = {this.prevStep} nextStep = {this.nextStep} step={this.state.step} header="Fill Your Educational Details" handleChange={this.handleChange} value={this.state}/>
            case 2:
                return <ProjectForm prevStep = {this.prevStep} nextStep = {this.nextStep} step={this.state.step} header="Give A Detail About Your Projects" handleChange={this.handleChange} value={this.state}/>
            case 3:
                return <WorkingExperience prevStep = {this.prevStep} nextStep = {this.nextStep} step={this.state.step} header="Give A Detail About Your Working Experience" handleChange={this.handleChange} value={this.state}/>
            case 4:
                return <Skills prevStep = {this.prevStep} nextStep = {this.nextStep} step={this.state.step} header="Give A Details About Your Skills and Achievements" handleChange={this.handleChange} value={this.state}/>
            case 5:
                return <Extras prevStep = {this.prevStep} nextStep = {this.nextStep} step={this.state.step} header="Fill Some Extra Details" handleChange={this.handleChange} value={this.state}/>
            case 6:
                return <Sucess value={this.state}/>
            default:
                break;
        }
    }
    render() {
        const steps = ['Basic Form Details', 'Educational Details', 'Personal Projects' , 'Working Experience' , 'Skills and Achievements' , 'Extras'];
        const getFormResult = this.getForm()
        return (
            <Aux>
                <Steppers steps={steps} activeStep={this.state.step}/>
                {getFormResult}
            </Aux>
        )
    }
}

export default UserForm;
