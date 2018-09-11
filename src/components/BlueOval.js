import React from 'react';
import ReactMorph from 'react-morph';
import CountBall from './CountBall.js';

export default function BlueOval() {
  return (
    <ReactMorph>
      {
        ({ from, to, go }) => (
          <div onClick={() => go(1)}>
            <h3 {...from("countBall")}
              style={{
                display: "inline-block",
                background: 'blue',
                borderRadius: '50%',
                color: 'white',
                width: 300,
                height: 150,
                textAlign: 'middle',
              }}
            >
              Blue Oval
            </h3>
            <CountBall to={to} />
          </div>
        )}
    </ReactMorph>
  );
}
