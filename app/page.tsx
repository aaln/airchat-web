import { FAQ } from "@/components/faq";
import { OTPForm } from "@/components/otp-form";
import { accessTokenCookieName } from "@/constants";
import { cookies } from 'next/headers';
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const cookieStore = cookies()
  const accessTokenCookie = cookieStore.get(accessTokenCookieName)
  if(accessTokenCookie) {
    return redirect("/stream");
  }
  return (
    <main className="flex min-h-screen flex-col gap-6 items-center justify-start pt-24 px-6 bg-black">
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/airchat.webp" width={150} height={43} alt="airchat logo"/>
        <div className="text-2xl font-bold text-red-400"><span className="line-through">Official</span> Web Client</div>
      </div>
      <OTPForm />
      <FAQ />
    </main>
  );
}
