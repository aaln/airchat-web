import { siteSettings } from "@/config/site"
import Link from "next/link"
import { ThemeToggle } from "../navbar/theme-toggle"
export const Header = () => {
    return (
        <header className="w-full bg-black text-gray-50 py-2 max-h-[120px]">
             
            <nav className="container px-4 md:px-6 gap-4 flex justify-between items-center">
                   <Link
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
                    
              
                    <ThemeToggle />
            </nav>
        </header>
      )
}