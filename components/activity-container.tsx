'use client';

import { airchatCDNUrl } from '@/constants';
import { useAuth } from '@/contexts/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useEffect, useRef, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card';

export const ActivityContainer = () => {
  const { accessToken, refreshTokens } = useAuth();
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/activity?token=${accessToken}`);
      try {
        const results = await response.json();
        setActivity(results);
        setLoading(false);
      } catch (e) {
        refreshTokens();
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {activity.map((activity: any) => {
        return (
          <Card key={activity.activityId}>
            <CardHeader>
              <Avatar>
                <AvatarImage
                  src={`https://${airchatCDNUrl}/${activity.users.userList[0].avatar}`}
                  alt={activity.users.userList[0].name}
                />
                <AvatarFallback delayMs={600}>
                  {activity.users.userList[0].name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <CardTitle>{activity.users.userList[0].name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {activity.referencesList.map((reference: any) => (
                  <>
                    <p key={reference.message.recordingId}>
                      {reference.message.transcription.transcriptionText}
                    </p>
                    <Button
                      onClick={() => {
                        const videoElement = document.getElementById(
                          `hls-video-${reference.message.recordingId}`
                        );
                        if (videoElement) {
                          // @ts-ignore
                          if (videoElement?.paused) {
                            // @ts-ignore
                            videoElement?.play();
                          } else {
                            // @ts-ignore
                            videoElement?.pause();
                          }
                        }
                      }}
                    >
                      Play/Pause
                    </Button>

                    <ReactHlsPlayer
                      id={`hls-video-${reference.message.recordingId}`}
                      src={reference.message.hlsUrl}
                      autoPlay={false}
                      controls={false} // Hide the default controls
                      width={'50px'}
                      height='auto'
                      style={{ display: 'none' }} // Hide the video player itself
                      playerRef={videoRef}
                    />
                  </>
                ))}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <span>Total Users: {activity.totalUsers}</span>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};
