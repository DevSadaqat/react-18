import React, { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { AiFillLike } from 'react-icons/ai';
interface Props {
  handler: () => void;
}

const Like = () => {
  const [status, setStatus] = useState(true);
  if (status)
    return (
      <AiFillLike color="#ff6b81" size="40" onClick={() => setStatus(true)} />
    );
  return <BiLike size="40" onClick={() => setStatus(false)} />;
};

export default Like;
