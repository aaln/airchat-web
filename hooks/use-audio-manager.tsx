import { useEffect, useRef, useState } from 'react';

export const useAudioManager = () => {
  const playersRef = useRef(new Map<string, HTMLAudioElement>());
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);

  const play = (id: string) => {
    // Pause any currently playing audio
    if (currentPlaying) {
      const currentPlayer = playersRef.current.get(currentPlaying);
      if (currentPlayer && !currentPlayer.paused) {
        currentPlayer.pause();
      }
    }
    // Reset the current place where the audio left off and play the new audio
    const newPlayer = playersRef.current.get(id);
    if (newPlayer) {
      newPlayer.currentTime = 0; // Reset the audio to the beginning
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

  return { play, pause, registerPlayer, unregisterPlayer, currentPlaying };
};