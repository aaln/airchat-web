"use client";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { airchatCDNUrl } from '@/constants';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function UserDisplay({ userAnalytics }) {
    const user = userAnalytics?.user;
    return (
        <div className="max-w-2xl px-8 flex flex-col items-center shadow-md p-4">
            <Avatar>
                <AvatarImage src={`${airchatCDNUrl}/${user.avatar}`} alt={user.name} />
                <AvatarFallback delayMs={600}>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="mt-2 text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-500">@{user.username}</p>
            <p className="text-sm text-gray-700">{user.bio}</p>
            {user.webUrl && (
                <div className='flex flex-row items-center justify-center gap-1 '>
                    <LinkIcon className="w-3 h-3" />
                    <Link href={user.webUrl} target="_blank" className="text-sm text-blue-600 hover:underline">
                        {user.webUrl}
                    </Link>
                </div>
            )}
            {user?.analytics?.userSignupAttribution && (
                <div className='flex flex-row items-center justify-center gap-1 '>
                    <EnvelopeClosedIcon className="w-3 h-3" />
                    <Link href={`/user/${userAnalytics?.analytics?.userSignupAttribution?.id}`} className="text-sm text-gray-500 hover:underline">
                        Invited by @{userAnalytics?.analytics?.userSignupAttribution?.username}
                    </Link>
                </div>
            )}
        <div className="mt-4">
            <div className="flex justify-center items-center gap-2">
                <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {userAnalytics?.analytics?.followingCount} Following
                </span>
                <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {userAnalytics?.analytics?.followerCount} Followers
                </span>
            </div>
        </div>
            
        </div>
    )

}
