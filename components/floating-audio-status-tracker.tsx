"use client"

import { PauseIcon, PlayIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAudioPlayer } from '../contexts/audio-player';

export const FloatingAudioStatusButton = () => {
  const { currentPlaying, lastPlayed, play, pause, playbackSpeed, setPlaybackSpeed } = useAudioPlayer();
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
    <div className='fixed z-20 bottom-6 right-6 flex flex-col items-center gap-4'>
      {
        isPlaying && 
         <button
          className="flex justify-center items-center z-20 text-lg h-16 w-16 bottom-6 right-6 dark:bg-white dark:text-black bg-white text-block font-bold rounded-full"
          onClick={() => setPlaybackSpeed(playbackSpeed < 4 ? Math.round(playbackSpeed + 0.5) : .75)}
          style={{
            boxShadow: "0px 0px 8px 4px rgba(0,0,0,0.15)"
          }}
        
        >
          {playbackSpeed || 1}x
        </button>
      }
     
      <button
        onClick={togglePlayPause}
        className="flex justify-center items-center z-20 h-16 w-16 bottom-6 right-6 dark:bg-white dark:text-black bg-white text-block font-bold rounded-full"
        style={{
          boxShadow: "0px 0px 8px 4px rgba(0,0,0,0.15)"
        }}
      
      >
        {isPlaying ? 
          <PauseIcon className="h-6 w-6"/>
        : <PlayIcon className="h-6 w-6"/>}
        
      </button>
    </div>
  );
};