import React from 'react';
import ReactMorph from 'react-morph';
import CountBall from './CountBall.js';

export default function GreenSquare() {
  return (
    <ReactMorph>
      {
        ({ from, to, fadeIn, fadeOut, go, hide }) => (
          <div>
            <div onClick={() => go(1)} >
              <h3
                {...from("countBall")}
                style={{
                  display: "inline-block",
                  background: 'green',
                  width: 150,
                  height: 150,
                  color: 'white',
                }}>
                Green Square
              </h3>
            </div>
            <CountBall to={to} />
          </div>
        )}
    </ReactMorph>
  );
}
