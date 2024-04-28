"use client";

import { Header } from "@/components/header";
import { StreamItem } from "@/components/stream-item";
import { useAuth } from "@/contexts/auth";
import { useEffect, useState } from "react";
import { FloatingAudioStatusButton } from "./floating-audio-status-tracker";
import { Loader } from "./loader";

export default function StreamContainer() {
    const { accessToken, refreshTokens } = useAuth();
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageKey, setNextPageKey] = useState(null);

    const fetchFeed = async (pageKey) => {
        try {
            const response = await fetch(`/api/messagefeed?token=${accessToken}${pageKey ? `&nextPageKey=${pageKey}` : ''}`);
            const results = await response.json();
            setFeed(prevFeed => [...prevFeed, ...results.itemsList]);
            setNextPageKey(results.nextPageKey);
        } catch (e) {
            refreshTokens();
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFeed(null);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            if (!loading && nextPageKey) {
                setLoading(true);
                fetchFeed(nextPageKey);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, nextPageKey]);

    return (
        <>
            <Header />
            <div className="flex flex-col gap-8 p-6 items-center">
                {
                    feed.map((item, index) => (
                        <StreamItem item={item} key={index} />
                    ))
                }
                <FloatingAudioStatusButton />
            </div>
            {loading && <Loader/>}
        </>
    )
}