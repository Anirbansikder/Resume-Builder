import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import { Component } from 'react';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Aux from '../../hoc/Auxiliary';

class Steppers extends Component {
	render(){
		return (
			<Aux>
				<Stepper activeStep={this.props.activeStep} alternativeLabel style={{backgroundColor : 'rgba(0,0,0,0.0)' }} >
					{this.props.steps.map((label) => (
					<Step key={label}>
						<StepLabel>{window.innerWidth >= 514 ? label : ''}</StepLabel>
					</Step>
					))}
				</Stepper>
			</Aux>
		);
	}
}

export default Steppers;
