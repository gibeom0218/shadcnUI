'use client';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useState } from 'react';

const OtpPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState('');

  const handleComplete = (value: string) => {
    setOtp(value);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <InputOTP
        maxLength={6}
        onComplete={handleComplete}
        inputMode="numeric"
        pattern="\d*"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-80 rounded-xl bg-white p-6 text-center shadow-xl">
            <h2 className="mb-4 text-xl font-semibold">OTP 입력 완료</h2>
            <p className="mb-4 text-gray-700">
              입력한 OTP는 <strong>{otp}</strong>입니다.
            </p>
            <button
              onClick={handleCloseModal}
              className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default OtpPage;
