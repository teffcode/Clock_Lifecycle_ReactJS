import React from 'react';

const Clock = ({date}) => (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
);

export default Clock;