import dynamic from 'next/dynamic';

const UploadContainer = dynamic(() => import('@/components/upload-container'));

export default async function Page() {
  return <>{/* <UploadContainer /> */}</>;
}
