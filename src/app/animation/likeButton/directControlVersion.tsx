'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Like from './like';

const DirectControlVersion = () => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const likeRef = useRef<boolean>(false);
  const requestCountRef = useRef<number>(0);

  useEffect(() => {
    fetch('/api/like?idx=1', { method: 'GET' })
      .then(response => response.json())
      .then(json => setIsLike(json.isLiked));
  }, []);

  const toggleCore = useCallback(async () => {
    const { isLiked } = await fetch('/api/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idx: 1 }),
    }).then(response => response.json() as Promise<{ isLiked: boolean }>);
    requestCountRef.current -= 1;
    if (requestCountRef.current === 0) {
      likeRef.current = isLiked;
      setIsLike(isLiked);
    }
  }, [requestCountRef]);

  const onClick = useCallback(() => {
    requestCountRef.current += 1;
    likeRef.current = !likeRef.current;
    setIsLike(likeRef.current);
    toggleCore();
  }, [requestCountRef, likeRef]);

  return (
    <div className="like-wrapper">
      <Like isLike={isLike} toggle={onClick} />
      <div className="p-wrapper">
        <p>Direct Control</p>
      </div>
    </div>
  );
};

export default DirectControlVersion;
