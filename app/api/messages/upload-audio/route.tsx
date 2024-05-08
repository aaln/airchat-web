// @ts-ignore
import { accessTokenCookieName } from '@/constants';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const cookieStore = cookies();
  const url = new URL(request.url);
  const token =
    url.searchParams.get('token') ||
    cookieStore.get(accessTokenCookieName)?.value;
  if (!token) {
    return new Response('Missing token', { status: 400 });
  }

  const req = await request.json();
  const base64Audio = req.audio;
  console.log('base64Audio', base64Audio);
  const uploadUrl = req.uploadUrl;
  console.log('uploadUrl', uploadUrl);

  const audio = Buffer.from(base64Audio, 'base64');
  console.log('audio123', audio);
  const contentType = 'video/mp4';
  console.log('contentType123', contentType);

  const testAudioResponse = await axios.get(
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    {
      headers: {
        Accept: 'video/mp4;charset=UTF-8'
      },
      responseType: 'blob'
    }
  );
  console.log('audio', testAudioResponse.data);
  const blob = new Blob([testAudioResponse.data], { type: 'video/mp4' });

  try {
    const uploadResponse = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': contentType
      },
      body: blob
    });
    console.log('uploadResponse', uploadResponse);
    if (!uploadResponse.ok) {
      console.error('Error uploading audio123:', uploadResponse.statusText);
      // return new Response('Internal Server Error', { status: 500 });
    }
  } catch (e) {
    console.log('Catch error uploading audio', e);
    // return NextResponse.json(uploadResponseData)
  }
  return new Response('OK', { status: 200 });
}
