"use client";

import { siteSettings } from "@/config/site";
import { useAuth } from "@/contexts/auth";
import Link from "next/link";
import { ThemeToggle } from "../navbar/theme-toggle";
import { Button } from "../ui/button";
export const Header = () => {
    const { refreshToken, logout } = useAuth();

    return (
        <header className="w-full bg-black text-gray-50 py-2 max-h-[120px]">
             
            <nav className="container px-4 md:px-6 gap-4 flex justify-between items-center">
                    <div className="flex flex-row gap-1 sm:gap-6 items-center justify-center">
                    <Link
                        href="/"
                        className=" sm:block"
                        >
                            <img
                                className="max-h-[30px] sm:max-h-[40px]" 
                                src={siteSettings.logo.url} height={20}
                            />
                    </Link>

                    {
                        refreshToken &&
                        <Link href="/stream">
                            <Button 
                                variant="ghost">
                                Stream
                            </Button>
                        </Link>
                    }
                    
                    {/* <Link href="/top">
                        <Button 
                            variant="ghost">
                            Top Chits
                        </Button>
                    </Link> */}
                     <Link href="/search">
                        <Button 
                            variant="ghost">
                            Search
                        </Button>
                    </Link>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-center">
                    {
                        refreshToken && 
                        <Button 
                            variant="ghost"
                            onClick={() => {
                                logout();
                                window.location.href = '/';
                            }}>
                            Logout
                        </Button>
                       
                        
                    
                    }

                    {
                        !refreshToken && <Button 
                            variant="ghost"
                            onClick={() => {
                                window.location.href = '/login';
                            }}>
                            Login
                        </Button> 
                    }
                     <ThemeToggle />
                    </div>
                    
                    
                    
            </nav>
        </header>
      )
}