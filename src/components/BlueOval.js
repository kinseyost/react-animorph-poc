import React, { Component } from 'react';
import OvalChild from './OvalChild.js';
import { animorph } from './animorph.js';

export default class BlueOval extends Component {
  handleClick = (e) => {
    animorph(e.target);
  }

  render() {
    return (
      <div>
        <OvalChild onClick={ this.handleClick }/>
      </div>
    );
  }
}
