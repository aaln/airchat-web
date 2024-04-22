"use client"

import { Input } from "@/components/ui/input";
import { airchatCDNUrl } from "@/constants";
import { useAuth } from "@/contexts/auth";
import { useEffect, useState } from "react";

export function RealtimeSearch() {
  const { accessToken } = useAuth();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery !== "") {
        try {
          setLoading(true);
          const response = await fetch(`api/search/enhanced?token=${accessToken}&query=${encodeURIComponent(searchQuery)}`);
          const data = await response.json();
          setSearchResults(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500); // Debounce the input to avoid excessive API calls

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <div className="flex flex-col h-screen w-full">
      <header className="bg-gray-900 py-8 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Input
            className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Search for anything..."
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto py-8 px-4 md:px-6">
          {
            loading &&
                    <div className="h-[400px] w-full bg-violet-400 flex justify-center items-center bg-red">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
                        </svg>
                    </div>
            
          }
          {searchResults.length > 0 ? (
            <ul className="space-y-4">
              {searchResults.map((result, index) => {
                const message = result.message;
                return (
                  <li key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                    <p className="text-gray-500 dark:text-gray-400">{message?.transcription?.transcriptionText}</p>
                    <div className="flex items-center space-x-2">
                    <img src={`${airchatCDNUrl}/${message?.fromUser?.avatar}`} alt={message?.fromUser?.name} className="w-6 h-6 rounded-full" />
                      <span className="font-medium">{message?.fromUser?.name}</span>
                    </div>
                    <div className="mt-2">
                      <span>Views: {message?.messageAnalytics?.viewCount}</span>
                      <span>Likes: {message?.messageAnalytics?.likeCount}</span>
                    </div>
                    <div className="flex mt-2">
                      {message?.mentionedUsersList?.map((mentionedUser, userIndex) => (
                        <img key={userIndex} src={`${airchatCDNUrl}/${mentionedUser?.avatar}`} alt={mentionedUser?.name} className="w-6 h-6 rounded-full" />
                      ))}
                    </div>
                  </li>
                );
      })}
            </ul>
          ) : (
            <div>No results found.</div>
          )}
        </div>
      </main>
    </div>
  );
}
