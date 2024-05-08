import UploadContainer from "@/components/upload-container";


export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
//   const cookieStore = cookies();
//   const token = cookieStore.get(accessTokenCookieName)?.value;

//   const userId = params.userId;
//   console.log("userId", userId);
//   const response = await fetch(`${process.env.NEXT_PUBLIC_CURRENT_URL}/api/user/analytics?userId=${userId}&token=${token}`);
//   console.log("response", response);
//   const result = await response.json();
  return (<UploadContainer />)
    
}