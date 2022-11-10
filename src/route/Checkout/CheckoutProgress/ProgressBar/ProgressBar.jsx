import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './ProgressBar.style';

export class ProgressBar extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired
  };

  render() {
    const { isActive } = this.props;

    return <div block="ProgressBar" mods={{ isActive }} />
  }
}

export default ProgressBar;
