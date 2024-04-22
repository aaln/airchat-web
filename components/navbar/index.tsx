import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export const Navbar = () => {
    return (
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="#">
        <Image src="/airchat.webp" width={150} height={43} alt="airchat logo"/>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="font-bold" href="#">
            Home
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Explore
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Notifications
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Messages
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Profile
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          
          <ThemeToggle className="ml-auto" />
        </div>
      </header>
      
    )
}