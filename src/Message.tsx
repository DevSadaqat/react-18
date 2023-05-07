import React from 'react';

//component should always return the same result depending
// on prop

const Message = () => {
  let count = 0;
  count++;
  return <div>Message {count}</div>;
};

export default Message;
