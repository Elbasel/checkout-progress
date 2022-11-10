import PropTypes from 'prop-types';
import React, { Component } from 'react'
import './CheckoutProgress.style.scss'
import ProgressBar from './ProgressBar';
import Step from './Step';

export class CheckoutProgress extends Component {

    static propTypes = {
        stepTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
        currentStepIndex: PropTypes.string.isRequired
    };
  render() {
    const { stepTitles, currentStepIndex } = this.props;
    const isLastStep = stepTitles.length - 1 <= currentStepIndex;


    return (

        <div block="CheckoutProgress">
          <div block="CheckoutProgress" elem="ProgressBar">
            { stepTitles.slice(0, -1).map((stepTitle, index) => (
                <React.Fragment key={ stepTitle }>
                <ProgressBar isActive={ index <= currentStepIndex } />
                <Step isActive={ index <= currentStepIndex } stepNumber={ index + 1 } stepTitle={ stepTitle } />
                </React.Fragment>
            )) }
            <ProgressBar isActive={ isLastStep } />
          </div>
        </div>

      );
  }
}
