import prisma from '@/lib/prisma';

export const saveOrUpdateMessages = async (messages) => {
  if (!messages) return;
  messages = messages.filter((message) => message !== null);
  const operations = messages.map(async (message) => {
    message.updatedAt = new Date();
    const { recordingId, ...otherFields } = message;
    // const transcriptionEmbedding = await newEmbeddingWithCache({ query: message?.transcription?.transcriptionText });
    const transcriptionEmbedding = null;
    return prisma.messages.upsert({
      where: { recordingId },
      update: { ...otherFields, transcriptionEmbedding },
      create: { recordingId, ...otherFields, transcriptionEmbedding }
    });
  });

  return await Promise.all(operations);
};
