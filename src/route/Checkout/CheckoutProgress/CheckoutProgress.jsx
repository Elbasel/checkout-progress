import PropTypes from "prop-types";
import React, { Component } from "react";

import ProgressBar from "./ProgressBar";
import Step from "./Step";

import "./CheckoutProgress.style.scss";

export class CheckoutProgress extends Component {
    static propTypes = {
        stepTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
        currentStepIndex: PropTypes.string.isRequired,
    };

    componentDidUpdate(prevProps) {
        const { currentStepIndex } = this.props;
        const { currentStepIndex: prevCurrentStepIndex } = prevProps;

        if (currentStepIndex !== prevCurrentStepIndex) {
            window?.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    render() {
        const { stepTitles, currentStepIndex } = this.props;
        const isLastStep = stepTitles.length - 1 <= currentStepIndex;

        return (
            <div block="CheckoutProgress">
                <div block="CheckoutProgress" elem="ProgressBar">
                    {stepTitles.slice(0, -1).map((stepTitle, index) => (
                        <React.Fragment key={stepTitle}>
                            <ProgressBar isActive={index <= currentStepIndex} />
                            <Step
                                isActive={index <= currentStepIndex}
                                stepNumber={index + 1}
                                stepTitle={stepTitle}
                            />
                        </React.Fragment>
                    ))}
                    <ProgressBar isActive={isLastStep} />
                </div>
            </div>
        );
    }
}
