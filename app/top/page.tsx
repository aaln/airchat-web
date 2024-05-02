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
    let results = await prisma.messages.findMany({
      take: 150,
      orderBy: {
        messageAnalytics: {
          likeCount: 'desc',
        },
      },
    } as any);
    // results = results.filter(message => message.fromUser.username !== "naval" && message.fromUser.username !== "norgard");
    return (
        <MessagesContainer messages={results} />
    );
}