'use client';

import { siteSettings } from '@/config/site';
import { useAuth } from '@/contexts/auth';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { ThemeToggle } from '../navbar/theme-toggle';
import { Button } from '../ui/button';
export const Header = () => {
  const { refreshToken, logout } = useAuth();

  return (
    <header className='w-full bg-black text-gray-50 py-2 max-h-[120px]'>
      <nav className='px-4 md:px-6 gap-4 flex justify-between items-center'>
        <div className='flex flex-row gap-1 sm:gap-6 items-center justify-center'>
          <Link href='/' className='sm:block'>
            <img
              className='max-h-[24px] sm:max-h-[40px] transition-transform transform hover:scale-105'
              src={siteSettings.logo.url}
              height={16}
            />
          </Link>

          {refreshToken && (
            <Link href='/stream'>
              <Button variant='ghost'>Stream</Button>
            </Link>
          )}
          <Link href='/search'>
            <Button variant='ghost'>Search</Button>
          </Link>
        </div>
        <div className='flex flex-row gap-4 items-center justify-center'>
          {refreshToken ? (
            <Button
              variant='ghost'
              onClick={() => {
                logout();
                window.location.href = '/';
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant='ghost'
              onClick={() => {
                window.location.href = '/login';
              }}
            >
              Login
            </Button>
          )}
          <ThemeToggle />
          <Link href={'https://github.com/aaln/airchat-web'}>
            <GitHubLogoIcon className='text-2xl' />
          </Link>
        </div>
      </nav>
    </header>
  );
};
