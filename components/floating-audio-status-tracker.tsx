"use client"

import { useEffect, useState } from 'react';
import { useAudioPlayer } from '../contexts/audio-player';

export const FloatingAudioStatusButton = () => {
  const { currentPlaying, lastPlayed, play, pause } = useAudioPlayer();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(currentPlaying !== null);
  }, [currentPlaying]);

  const togglePlayPause = () => {
    if (currentPlaying && isPlaying) {
        pause(currentPlaying);
    }
    else if (lastPlayed) {
        play(lastPlayed)
    }
  };

  return (
    <button
      onClick={togglePlayPause}
      className="z-20 fixed justify-center items-center h-20 w-20 bottom-6 right-6 dark:bg-white dark:text-black bg-white text-block font-bold py-2 px-4 rounded-full"
      style={{
        boxShadow: "0px 0px 8px 4px rgba(0,0,0,0.15)"
      }}
    
    >
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};