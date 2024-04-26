"use client";

import { Header } from "@/components/header";
import { StreamItem } from "@/components/stream-item";
import { useAuth } from "@/contexts/auth";
import { useEffect, useState } from "react";

export default function StreamContainer() {
    const { accessToken, refreshTokens } = useAuth();
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/messagefeed?token=${accessToken}`);
                const results = await response.json();
                setFeed(results.itemsList);
                console.log("results.itemsList", results.itemsList)
            } catch(e) {
                refreshTokens();
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    console.log("feed", feed)
    const item = feed?.[0];
    console.log("first", {item})
    return (
        <>
            <Header />
            <div className="flex flex-col gap-8 p-6 items-center">
                {
                    feed.map((item, index) => (
                        <StreamItem item={item} key={index} />
                    ))
                }
            </div>
        </>
    )
}