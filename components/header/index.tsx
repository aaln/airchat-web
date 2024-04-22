import Link from "next/link"
import Image from "next/image"
import { PuzzleIcon, Search } from "lucide-react"
import { ThemeToggle } from "../navbar/theme-toggle"
import { siteSettings } from "@/config/site"
export const Header = () => {
    return (
        <header className="w-full bg-black text-gray-50 py-2 max-h-[100px]">
            <nav className="container px-4 md:px-6 gap-4 flex justify-center">
                    <Link
                    className="flex items-center justify-center gap-2 flex-1 hover:bg-gray-800 px-4 py-2 rounded-md transition-colors"
                    href="/"
                    >
                        <img
                            className="md:block hidden max-h-[40px]" 
                            src={siteSettings.logo.url} height={20}/>
                        <img
                            className="block md:hidden max-h-[40px]" 
                            src={siteSettings.logo_icon.url}
                            height={20}
                        />
            
                    </Link>
                    
                    <Link
                        className="flex flex-row justify-center items-center gap-2 flex-1 hover:bg-gray-800 px-4 py-2 rounded-md transition-colors"
                        href="#"
                    >
                        <PuzzleIcon className="h-6 w-6" />
                        <span className="text-sm font-medium">Feed</span>
                    </Link>
                
                    <Link
                    className="flex flex-row justify-center items-center gap-2 flex-1 hover:bg-gray-800 px-4 py-2 rounded-md transition-colors"
                    href="#"
                    >
                    <Search className="h-6 w-6" />
                    <span className="text-sm font-medium">Discover</span>
                    </Link>
                    
                    <Link
                        className="flex flex-col justify-center items-center gap-2 flex-1 hover:bg-gray-800 px-4 py-2 rounded-md transition-colors"
                        href="#"
                    >
                    <ThemeToggle />
                    </Link>
            </nav>
        </header>
      )
}