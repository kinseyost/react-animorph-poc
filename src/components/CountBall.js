import React from 'react';

export default function CountBall(props) {
    const { to } = props
    return (
      <h3
        { ...to("countBall") }
        style={{
          display: "inline-block",
          background: 'red',
          padding: 20,
          position: 'absolute',
          left: 20,
          bottom: 20,
          height: 20,
          width: 20,
          borderRadius: '50%',
          color: 'white',
        }}
      >
        1
      </h3>
    )
}
