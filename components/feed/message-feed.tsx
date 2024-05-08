'use client';

import { useAuth } from '@/contexts/auth';
import { useEffect, useState } from 'react';
import { MessageThread } from '../message-thread';

export const MessageFeed = () => {
  const { accessToken, refreshTokens } = useAuth();
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/messagefeed?token=${accessToken}`);
        const results = await response.json();
        setFeed(results.itemsList);
      } catch (e) {
        refreshTokens();
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading && (
        <div className='h-screen w-full bg-violet-400 flex justify-center items-center bg-red'>
          <svg
            className='animate-spin h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 0116 0H4z'
            ></path>
          </svg>
        </div>
      )}
      {!loading && (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2'>
          {feed?.map((messageThread: any, index: number) => {
            return (
              <MessageThread messageThread={messageThread} key={index} />
              // <MessageThreadView key={index}/>
            );
          })}
        </div>
      )}
    </>
  );
};
