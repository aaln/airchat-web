"use client";

import { useAudioPlayer } from "@/contexts/audio-player";
import ReactHlsPlayer from '@gumlet/react-hls-player';
import { PauseIcon, PlayIcon } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

export default function AudioWrapper({message}) {
    message.recordingId = message?.transcription?.recordingId;
    const playerRef = useRef<HTMLAudioElement>(null);
    const { play, pause, registerPlayer, unregisterPlayer, currentPlaying } = useAudioPlayer();


    const isPlaying = currentPlaying === message.recordingId;

    useEffect(() => {
        const player = playerRef.current;
        if (player && message.recordingId) {
            registerPlayer(message.recordingId, player);

            // Add event listener for when the audio ends
            const handleAudioEnd = () => {
                pause(message.recordingId);
            };
            player.addEventListener('ended', handleAudioEnd);

            // Cleanup event listener
            return () => {
                player.removeEventListener('ended', handleAudioEnd);
            };
        }
        return () => {
            if (message.recordingId) {
                unregisterPlayer(message.recordingId);
            }
        };
    }, [message.recordingId, registerPlayer, unregisterPlayer, pause]);

    const toggleSound = useCallback(() => {
        if (playerRef.current) {
            if (currentPlaying !== message.recordingId) {
                play(message.recordingId);
            } else {
                pause(message.recordingId);
            }
        }
    }, [play, pause, currentPlaying, message.recordingId]);

    return (
        <div className="cursor-pointer" onClick={toggleSound}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
            <ReactHlsPlayer
                id={`hls-video-${message.hlsUrl}`}
                src={message.hlsUrl}
                autoPlay={false}
                controls={false} // Hide the default controls
                width={'50px'}
                height="auto"
                style={{ display: 'none' }} // Hide the video player itself
                // @ts-ignore
                playerRef={playerRef}
            />
        </div>
    )
}