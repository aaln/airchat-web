

const openai_embedding_model = "text-embedding-3-small";

export const newEmbeddingWithCache = async ({
  query,
  withCache = true
}: {
  query: string;
  withCache?: boolean;
}) => {
  // if (withCache) {
  //   // @ts-ignore
  //   const cachedEmbedding = await prisma.embeddings_cache.findUnique({
  //     where: { input: query },
  //   });
  //   if (cachedEmbedding) return cachedEmbedding.embedding;
  // }

  const response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: query,
      model: openai_embedding_model,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch embedding: ${response.statusText}`);
  }

  const { data } = await response.json();
  const embedding = data[0].embedding;
    // @ts-ignore
  // await prisma.embeddings_cache.create({
  //   data: {
  //     id: uuidv4(),
  //     input: query,
  //     model: openai_embedding_model,
  //     embedding,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // });

  return embedding;
};