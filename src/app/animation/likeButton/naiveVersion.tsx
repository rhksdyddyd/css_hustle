'use client';

import { useCallback, useEffect, useState } from 'react';
import Like from './like';

const NaiveVersion = () => {
  const [isLike, setIsLike] = useState<boolean>(false);
  useEffect(() => {
    fetch('/api/like?idx=0', { method: 'GET' })
      .then(response => response.json())
      .then(json => setIsLike(json.isLiked));
  }, []);

  const onClick = useCallback(async () => {
    const { isLiked } = await fetch('/api/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idx: 0 }),
    }).then(response => response.json() as Promise<{ isLiked: boolean }>);
    setIsLike(isLiked);
  }, []);
  return (
    <div className="like-wrapper">
      <Like isLike={isLike} toggle={onClick} />
      <div className="p-wrapper">
        <p>Naive Waiting</p>
      </div>
    </div>
  );
};

export default NaiveVersion;
