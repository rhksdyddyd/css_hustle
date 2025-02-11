'use client';

import { useCallback, useEffect, useOptimistic, useRef, useState } from 'react';
import Like from './like';

const UseOptVersion = () => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const likeRef = useRef<boolean>(false);
  const reqRef = useRef<number>(0);

  useEffect(() => {
    fetch('/api/like?idx=2', { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        likeRef.current = json.isLiked;
        setIsLike(json.isLiked);
      });
  }, [likeRef]);

  const [optValue, addOptValue] = useOptimistic<boolean, boolean>(
    isLike,
    (curVal, newVal) => {
      likeRef.current = newVal;
      return newVal;
    }
  );

  const onClick = useCallback(async () => {
    reqRef.current += 1;
    addOptValue(!likeRef.current);
    await fetch('/api/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idx: 2 }),
    })
      .then(response => response.json())
      .then(json => {
        reqRef.current -= 1;
        if (reqRef.current == 0) {
          likeRef.current = json.isLiked;
          setIsLike(json.isLiked);
        }
      });
  }, [reqRef]);

  return (
    <div className="like-wrapper">
      <form action={onClick}>
        <Like type="submit" isLike={optValue} toggle={() => {}} />
      </form>
      <div className="p-wrapper">
        <p>useOptimistic</p>
      </div>
    </div>
  );
};

export default UseOptVersion;
