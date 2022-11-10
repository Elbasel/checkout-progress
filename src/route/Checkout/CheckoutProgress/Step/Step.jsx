import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './Step.style';

export class Step extends Component {
    static propTypes = {
        isActive: PropTypes.bool.isRequired,
        stepTitle: PropTypes.string.isRequired,
        stepNumber: PropTypes.number.isRequired
    };

    render() {
        const { isActive, stepTitle, stepNumber } = this.props;
        return (
            <div block="Step" mods={{ isActive }}>
                <span block="Step" elem="Number">{stepNumber}</span>
                <span block="Step" elem="Title" mods={{ isActive }}>{stepTitle}</span>
            </div>
        );
    }
}

export default Step;
