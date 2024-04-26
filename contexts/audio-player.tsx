"use client";

import { createContext, useContext, useEffect, useRef, useState } from 'react';


const AudioPlayerContext = createContext(null);

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const playersRef = useRef(new Map<string, HTMLAudioElement>());

  const play = (id: string) => {
    // Pause any currently playing audio
    if (currentPlaying) {
      const currentPlayer = playersRef.current.get(currentPlaying);
      if (currentPlayer && !currentPlayer.paused) {
        currentPlayer.pause();
      }
    }
    // Play the new audio and set it as the current playing
    const newPlayer = playersRef.current.get(id);
    if (newPlayer) {
      setCurrentPlaying(id);
      newPlayer.play();
    }
  };

  const pause = (id: string) => {
    const player = playersRef.current.get(id);
    if (player) {
      player.pause();
      if (currentPlaying === id) {
        setCurrentPlaying(null);
      }
    }
  };

  const registerPlayer = (id: string, player: HTMLAudioElement) => {
    playersRef.current.set(id, player);
    // Add event listener for when the audio ends
    player.onended = () => {
      setCurrentPlaying(null);
    };
  };

  const unregisterPlayer = (id: string) => {
    playersRef.current.delete(id);
  };

    // Ensure that when the current playing audio is unmounted, it gets paused
  useEffect(() => {
    return () => {
      if (currentPlaying) {
        const currentPlayer = playersRef.current.get(currentPlaying);
        if (currentPlayer && !currentPlayer.paused) {
          currentPlayer.pause();
        }
      }
    };
  }, [currentPlaying]);

  return (
    <AudioPlayerContext.Provider value={{ play, pause, registerPlayer, unregisterPlayer, currentPlaying }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};