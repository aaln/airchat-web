import prisma from "@/lib/prisma";
import { saveOrUpdateMessages } from "./ingest";


export const runBacklog = async () => {
    let processedCount = 0;
    const batchSize = 500;

    while (true) {
        // @ts-ignore
        const messagesWithoutTranscriptionEmbedding = await prisma.messages.findMany({
            take: batchSize,
            skip: processedCount,
            where: {
                transcriptionEmbedding: {
                    not: undefined
                },
            },
            orderBy: {
                messageAnalytics: {
                    likeCount: 'desc',
                },
            },
        });

        if (messagesWithoutTranscriptionEmbedding.length === 0) {
            break;
        }

        await saveOrUpdateMessages(messagesWithoutTranscriptionEmbedding);
        processedCount += messagesWithoutTranscriptionEmbedding.length;
    }
}

