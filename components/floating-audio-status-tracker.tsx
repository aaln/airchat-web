"use client"

import { PauseIcon, PlayIcon } from 'lucide-react';
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
      className="fixed flex justify-center items-center z-20  h-16 w-16 bottom-6 right-6 dark:bg-white dark:text-black bg-white text-block font-bold rounded-full"
      style={{
        boxShadow: "0px 0px 8px 4px rgba(0,0,0,0.15)"
      }}
    
    >
      {isPlaying ? 
        <PauseIcon className="h-6 w-6"/>
      
      : <PlayIcon className="h-6 w-6"/>}
      
    </button>
  );
};