import { FAQ } from "@/components/faq";
import Image from "next/image";
import { OTPForm } from "../components/otp-form";
export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col gap-6 items-center justify-start pt-24 px-6 bg-black">
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/airchat.webp" width={150} height={43} alt="airchat logo"/>
        <div className="text-2xl font-bold text-red-400"><span className="line-through">Official</span> Web Client</div>
      </div>
      <OTPForm />
      <FAQ />
      {/* <div className="fixed top-4 right-4 flex items-center rounded-md bg-blue-500 px-4 py-2 text-white shadow-md">
        <ShieldIcon className="mr-2 h-5 w-5" />
        <span>We do not send any secret keys to the server</span>
      </div>
       */}
    </main>
  );
}
