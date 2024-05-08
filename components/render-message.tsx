'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  MESSAGE_EVENT_LIKE,
  MESSAGE_EVENT_REPOST,
  MESSAGE_EVENT_UNLIKE,
  MESSAGE_EVENT_UNREPOST,
  airchatCDNUrl
} from '@/constants';
import { sendEventAction } from '@/lib/actions';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import { EarIcon, Heart, Repeat } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Moment from 'react-moment';
import AudioWrapper from './audio-wrapper';
import TranscriptionWrapper from './transcription-wrapper';

export const RenderMessage = ({
  item,
  message,
  charLimit
}: {
  item?: any;
  message: any;
  charLimit?: number;
}) => {
  return (
    <div className='flex flex-row gap-6 z-10'>
      <div className='flex flex-col items-center gap-4'>
        <Link href={`/user/${message?.fromUser?.id}`}>
          <Avatar>
            <AvatarImage
              src={`${airchatCDNUrl}/${message?.fromUser?.avatar}`}
              alt={message?.fromUser?.name}
            />
            <AvatarFallback delayMs={600}>
              {message?.fromUser?.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Link>
        <AudioWrapper message={message} />
      </div>
      <div className='flex flex-col w-full'>
        <div className='w-full relative flex flex-col rounded-lg p-2.5 gap-2 bg-white dark:bg-gray-800 w-full shadow-lg'>
          <div className='flex flex-row  gap-2 items-center'>
            <Link href={`/user/${message?.fromUser?.id}`} className='font-bold'>
              {message?.fromUser?.name}
              {item?.channel && (
                <span className='text-blue-600'>
                  {` in ${item?.channel?.name}`}
                </span>
              )}
            </Link>
            <span className='text-xs'>
              <Moment fromNow>
                {new Date(
                  (message?.createdDate?.seconds ||
                    message?.createdTime?.seconds) * 1000
                ).toLocaleString()}
              </Moment>
            </span>
          </div>

          <Link
            // href={`https://www.air.chat/${message?.fromUser?.username}/post/${item?.messageThread?.referenceRecordingId || message?.recordingId || message?.messageAnalytics?.recordingId}`}
            href={`/thread/${
              item?.messageThread?.referenceRecordingId ||
              message?.recordingId ||
              message?.messageAnalytics?.recordingId
            }`}
            target='_blank'
            title='View on airchat'
          >
            <TranscriptionWrapper message={message} charLimit={charLimit} />
          </Link>

          <ImageReferences message={message} />
          <LinkMetadata message={message} />

          <BottomMessageAnalytics message={message} />
        </div>
      </div>
    </div>
  );
};

export const RenderSingleMessage = () => {};
export const ImageReferences = ({ message }) => {
  return (
    <>
      {message?.imageReferenceIdsList.length > 0 && (
        <div className='flex flex-wrap gap-2 mt-2'>
          {message?.imageReferencesList.map((imageRef, idx) => (
            <Zoom key={idx}>
              <img
                src={`${airchatCDNUrl}/images/${imageRef.imageReferenceId}`}
                alt={`Attached image ${idx + 1}`}
                style={{
                  maxHeight: '140px',
                  width: 'auto',
                  height: 'auto',
                  maxWidth: `${
                    140 *
                    (imageRef.resolution.resolutionWidth /
                      imageRef.resolution.resolutionHeight)
                  }px`
                }}
                className='rounded-lg shadow-md'
              />
            </Zoom>
          ))}
        </div>
      )}
    </>
  );
};
export const LinkMetadata = ({ message }) => {
  return (
    <>
      {message?.linkMetadataList?.length > 0 && (
        <div className='flex flex-row gap-2'>
          {message.linkMetadataList.map((linkMeta, index) => {
            return (
              <Link
                key={index}
                href={linkMeta.url}
                target='_blank'
                className='flex flex-col items-start gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-100'
              >
                {linkMeta?.imagePath && (
                  <img
                    src={`${airchatCDNUrl}/${linkMeta.imagePath}`}
                    alt={`Preview for ${linkMeta.title}`}
                    className='w-full h-42 object-cover rounded-md'
                  />
                )}
                <div className='flex flex-col w-full'>
                  <span className='text-lg font-medium text-gray-900'>
                    {linkMeta.title}
                  </span>
                  <span className='text-sm text-gray-700'>
                    {linkMeta.summary}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
export const BottomMessageAnalytics = ({ message }) => {
  const [isLiked, setIsLiked] = useState(message?.eventsList.includes(2));
  const [isReposted, setIsReposted] = useState(message?.eventsList.includes(4));
  const toggleLike = async () => {
    const event = isLiked ? MESSAGE_EVENT_UNLIKE : MESSAGE_EVENT_LIKE;
    const actionResp = await sendEventAction(event, message.recordingId);
    if (!isLiked) {
      message.messageAnalytics.likeCount += 1;
    } else {
      message.messageAnalytics.likeCount -= 1;
    }
    setIsLiked(!isLiked);
  };
  const toggleRepost = async () => {
    const event = isReposted ? MESSAGE_EVENT_UNREPOST : MESSAGE_EVENT_REPOST;
    const actionResp = await sendEventAction(event, message.recordingId);
    if (!isReposted) {
      message.messageAnalytics.repostCount += 1;
    } else {
      message.messageAnalytics.repostCount -= 1;
    }
    setIsReposted(!isReposted);
  };
  return (
    <div className='absolute right-[-0px] bottom-[-28px]'>
      <div className='cursor-pointer flex justify-between gap-4 px-4 py-2 rounded-full bg-white border-1-black shadow-md'>
        <div
          className='flex gap-1 items-center p-0 rounded-full dark:text-black'
          onClick={async () => {
            toggleLike();
          }}
        >
          {isLiked ? (
            <HeartFilledIcon className='h-4 w-4 text-red-600' />
          ) : (
            <Heart className='h-4 w-4' />
          )}
          <span className='text-sm font-medium'>
            {message?.messageAnalytics?.likeCount}
          </span>
        </div>
        <div
          className='flex gap-1 items-center p-0 rounded-full dark:text-black'
          onClick={async () => {
            toggleRepost();
          }}
        >
          {isReposted ? (
            <Repeat className='h-4 w-4 text-green-600' />
          ) : (
            <Repeat className='h-4 w-4' />
          )}

          <span className='text-sm font-medium'>
            {message?.messageAnalytics?.repostCount}
          </span>
        </div>
        <div className='flex gap-1 items-center px-1 rounded-full dark:text-black'>
          <EarIcon className='h-4 w-4' />
          <span className='text-sm font-medium'>
            {message?.messageAnalytics?.viewCount}
          </span>
        </div>
      </div>
    </div>
  );
};
