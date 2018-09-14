import React from 'react';

export default function OvalChild(props) {
  return (
    <h3
      { ...props }
      style={{
        display: "inline-block",
        background: '#000033',
        borderRadius: '50%',
        color: 'white',
        width: 300,
        height: 150,
        textAlign: 'middle',
      }}
    >Blue Oval</h3>
  );
}
