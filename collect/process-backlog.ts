import prisma from '@/lib/prisma';
import { saveOrUpdateMessages } from './ingest';

export const runBacklog = async () => {
  let processedCount = 0;
  const batchSize = 75;

  while (true) {
    // @ts-ignore
    const messagesWithoutTranscriptionEmbedding =
      await prisma.messages.findMany({
        take: batchSize,
        skip: processedCount + 27451,
        where: {
          transcriptionEmbedding: {
            not: undefined
          }
        },
        orderBy: {
          messageAnalytics: {
            likeCount: 'desc'
          }
        }
      });
    console.log(
      'messagesWithoutTranscriptionEmbedding',
      messagesWithoutTranscriptionEmbedding.length
    );

    if (messagesWithoutTranscriptionEmbedding.length === 0) {
      break;
    }

    await saveOrUpdateMessages(messagesWithoutTranscriptionEmbedding);
    processedCount += messagesWithoutTranscriptionEmbedding.length;
  }
};
