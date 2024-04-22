"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { setTokenInSessionStorage, useAuth } from "@/contexts/auth";
import { parsePhoneNumber } from 'libphonenumber-js';
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import 'react-phone-number-input/style.css';

export function OTPForm() {
  const [phone, setPhone] = useState<string>("");
  const [otpRequested, setOtpRequested] = useState<boolean>(false)
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [step1Response, setStep1Response] = useState<any>(null);
  const [tokensRequested, setTokensRequested] = useState<any>(null);
  const { accessToken, refreshToken } = useAuth();
  if(refreshToken) {
    window.location.href = '/activity';
  }
  useEffect(() => {
    async function requestTokens() {
      if(otp.length === 4) {
        setTokensRequested(true);
        setLoading(true);
        let formattedPhone = phone;
        if (!formattedPhone.startsWith('+')) {
          formattedPhone = `+${formattedPhone}`;
        }
        // localhost:3000/api/auth/step2?phone=+33695203844&locale=FR&otp=5682&token=4f154ee9-1e25-487b-85c7-b654f447f2eb
        // Determine the locale from the phone number using libphonenumber-js

        let locale = 'US'; // Default locale
        try {
          const phoneNumber = parsePhoneNumber(formattedPhone);
          if (phoneNumber) {
            locale = phoneNumber.country;
          }
        } catch (error) {
          console.error('Error determining the locale from the phone number:', error);
        }
        const response = await fetch(`/api/auth/step2?phone=${encodeURIComponent(formattedPhone)}&otp=${otp}&locale=${locale}&token=${step1Response.authSessionToken.token}`);
        const data = await response.json();
        if(data.error) {
          setOtp("")
          alert(`There was an error processing the OTP code. Please try again ${JSON.stringify(data)}`);
          return;
        }
        setTokenInSessionStorage("accessToken", data.credential.accessToken.token);
        setTokenInSessionStorage("refreshToken", data.credential.refreshToken.token);
        setLoading(false);
        window.location.href = '/feed';
 
      }
    }
    requestTokens();
    
  }, [otp]);
  return (
    <Card className="w-full max-w-lg flex flex-col items-center gap-3 w-[580px] h-[400px] bg-white text-black border border-transparent shadow-xl rounded-xl ">
      <CardHeader className="flex flex-col items-center space-y-2">
        <div className="text-center font-helvetica font-bold">To login, enter your phone number.</div>
        <div className="text-center font-helvetica">You’ll be sent a one time verification code.</div>
      </CardHeader>
      <CardContent className="w-full flex flex-col gap-8">
        <div className="w-full flex gap-4">
          <Label className="text-sm w-[200px] text-black">
            Phone number (including area code):
          </Label>
          <Input

            className="w-full text-black bg-white"
            required type="tel"
            placeholder="+19171234567"
            value={phone}
            onChange={(e?: any) => setPhone(e.target.value)}
            />
        </div>
        <Button className="w-full bg-black text-white" variant="primary" disabled={false} 
          onClick={async () => {
            setLoading(true);
            setOtpRequested(true);
            setTimeout(() => {
              setLoading(false)
            }, 3000);
            let formattedPhone = phone;
            if (!formattedPhone.startsWith('+')) {
              formattedPhone = `+${formattedPhone}`;
            }
            const response = await fetch(`/api/auth/step1?phone=${encodeURIComponent(formattedPhone)}`);
            const data = await response.json();
            console.log(data);
            if(data.error) {
              setOtpRequested(false);
              alert(`There was an error requesting the OTP code. Please try again later or use a different number. ${JSON.stringify(data)}`);
            }
            setStep1Response(data);
          }}
        >
        {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900">
          <LoaderIcon />
        </div> : (otpRequested ? "Code Sent" : "Request one time code")}
        </Button>
        { otpRequested && <div className="grid gap-2">
          <Card>
            <div className="p-4 flex flex-col bg-black items-center justify-center gap-2">
              <InputOTP maxLength={4} onChange={setOtp} value={otp} disabled={otp.length === 4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>

            
              {loading && <div className="animate-spin rounded-full h-5 w-5 border-b-2">
                <LoaderIcon />
              </div>}

              {/* <Button className="w-full w-[200px]" disabled={loading}>Submit OTP</Button> */}
            </div>
          </Card>
        </div>}
      </CardContent>
    </Card>
  )
}
