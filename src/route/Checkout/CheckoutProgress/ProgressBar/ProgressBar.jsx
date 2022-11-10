import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './ProgressBar.style';

/** @namespace ScandiAssignment/Route/Checkout/CheckoutProgress/ProgressBar */
export class ProgressBar extends Component {
  static propTypes = {
      isActive: PropTypes.bool.isRequired
  };

  render() {
      const { isActive } = this.props;
      return (
      <div block="ProgressBar">
        <div block="ProgressBar" elem="Progress" mods={ { isActive } } />
      </div>
      );
  }
}

export default ProgressBar;
