import { Header } from '@/components/header';
import TopContainer from '@/components/top-container';
import prisma from '@/lib/prisma';

export default async function Page({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const search = searchParams.search;
  let results = await prisma.messages.findMany({
    take: 150,
    orderBy: {
      messageAnalytics: {
        likeCount: 'desc'
      }
    }
  } as any);
  return (
    <main className='flex min-h-screen flex-col gap-6 items-center justify-start'>
      <Header />
      <TopContainer messages={results} />
    </main>
  );
}
