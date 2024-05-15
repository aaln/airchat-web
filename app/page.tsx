import { FAQ } from '@/components/faq';
import { Header } from '@/components/header';
import { OTPForm } from '@/components/otp-form';

export default function Page() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col gap-6 items-center justify-start pt-24 px-6 bg-black'>
        <div className='flex flex-col justify-center items-center gap-4'>
          {/* <Image src="/airchat.webp" width={150} height={43} alt="airchat logo"/> */}
          <div className='text-2xl font-bold text-red-400'>
            Login to the <span className='line-through'>Official</span> Web
            Client
          </div>
        </div>
        <OTPForm />
        <FAQ />
      </main>
    </>
  );
}
