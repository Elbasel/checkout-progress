import PropTypes from 'prop-types';
import React, { Component } from 'react'
import './CheckoutProgress.style.scss'


export class CheckoutProgress extends Component {

    static propTypes = {
        stepTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
        currentStepIndex: PropTypes.string.isRequired
    };
  render() {
    const { stepTitles, currentStepIndex } = this.props;

    return (
      <div>
        <p>stepTitle: {JSON.stringify(stepTitles)}</p>
        <p>currentStepIndex: {currentStepIndex}</p>
      </div>
    )
  }
}
