import MessagesContainer from "@/components/messages-container";
import prisma from "@/lib/prisma";


export default async function Page({
  params,
  searchParams,
}: {
  params: { username: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
    // const search = searchParams.search;
    // @ts-ignore
    const results = await prisma.messages.findMany({
      take: 100,
      orderBy: {
        messageAnalytics: {
          likeCount: 'desc',
        },
      },
    } as any);
    return (
        <MessagesContainer messages={results} />
    );
}