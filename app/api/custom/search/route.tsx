// @ts-ignore
import { newEmbeddingWithCache } from '@/lib/ai';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');
    if (!query) {
        return new Response('Missing query', { status: 400 });
    }
    const embedding = await newEmbeddingWithCache({ query });
    const pipeline = [
        {
            "$vectorSearch": {
                "index": "vector_index",
                "queryVector": embedding,
                "path": "transcriptionEmbedding",
                "numCandidates": 1000,
                "limit": 20
            }
        },
        {
            "$sort": {
                "messageAnalytics.likeCount": -1
            }
        }
    ];
    const results = await prisma.$runCommandRaw({
        aggregate: "messages",
        pipeline,
        cursor: {}
    });
    // @ts-ignore
    return new Response(JSON.stringify(results?.cursor?.firstBatch), { status: 200 });
}