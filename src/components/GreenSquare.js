import React, { Component } from 'react';
import { animorph } from './animorph.js';

export default class GreenSquare extends Component {
  greenSquareRef = React.createRef();

  handleClick = (e) => {
    animorph(this.greenSquareRef.current);
  }

  render() {
    return (
      <div>
        <h3
          ref={ this.greenSquareRef }
          onClick={ this.handleClick }
          style={{
            display: "inline-block",
            background: '#003300',
            width: 150,
            height: 150,
            color: 'white',
          }}>
          Green Square
        </h3>
      </div>
    );
  }
}
