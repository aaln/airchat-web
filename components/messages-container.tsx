"use client";

import { Header } from "@/components/header";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { FloatingAudioStatusButton } from "./floating-audio-status-tracker";
import { Loader } from "./loader";
import { SingleMessage } from "./single-message";
import { Input } from "./ui/input";

export default function MessagesContainer() {
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if(searchInput.length > 3 && !loading) {
            const handler = setTimeout(async () => {
                setLoading(true);
                const response = await fetch(`/api/custom/search?q=${searchInput}`);
                const results = await response.json();
                setSearchResults(results);
                setLoading(false);
            }, 500); // Debounce time of 500ms

            return () => {
                clearTimeout(handler);
            };
        }
    }, [searchInput]);

    return (
        <>
            <Header />
            <h1 className="text-3xl font-bold text-center mt-8">Vector Search Posts (chits) on Airchat</h1>
            <div className="flex flex-col gap-8 p-4 items-center justify-center">
                <div className="relative flex flex-row gap-2 items-center justify-center w-full  max-w-2xl">
                    <Search className="absolute left-2 top-4 h-6 w-6 text-muted-foreground" />
                    <Input
                        type="search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search anything..."
                        className="w-full sm:min-w-2xl h-14 bg-white rounded-lg pl-10 text-md dark:bg-gray-800 shadow-2xl border-none focus:outline-none"
                    />
                </div>
        
            </div>
            <div className="flex flex-col gap-8 p-4 items-center">
                {
                    searchResults.map((message, index) => (
                        <div 
                            key={index}
                            className="flex flex-row gap-2 items-center justify-center w-full"
                        >
                           
                            <SingleMessage message={message}  />
                        </div>
                    ))
                }
                <FloatingAudioStatusButton />
            </div>
            {loading && <Loader/>}

        </>
    )
}