// @ts-ignore
import { saveOrUpdateMessages } from '@/collect/ingest';
import { accessTokenCookieName } from '@/constants';
import { getFullMessageThreadFromRecordingId } from '@/lib/threads';
import { cookies } from 'next/headers';

export async function GET(request: Request, context) {
    const url = new URL(request.url);
    const cookieStore = cookies()
    const accessTokenCookie = cookieStore.get(accessTokenCookieName)
    const token = url.searchParams.get('token') || accessTokenCookie.value;
    const recordingId = context.params.id;

    if (!token && !recordingId) {
        return new Response('Missing token or id', { status: 400 });
    }

    const fullMessageThread = await getFullMessageThreadFromRecordingId({ recordingId, accessToken: token });
    await saveOrUpdateMessages(Object.values(fullMessageThread.messagesCache))
    
    return new Response(JSON.stringify(fullMessageThread), { status: 200 });

}