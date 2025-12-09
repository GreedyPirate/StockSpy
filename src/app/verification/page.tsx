'use client';

import { useRouter } from 'next/navigation';
import { sendVerificationEmail, useSession } from '@/lib/betterAuth/authClient';
import { toast } from 'sonner';
export default function VerificationEmail() {
  const router = useRouter();
  const { data: sessionData } = useSession();

  const handleResend = async () => {
    if (!sessionData?.user?.email) return;
    await sendVerificationEmail({
      email: sessionData.user.email,
      callbackURL: '/'
    });
    toast.success('Verification email resent. Please check your inbox.');
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <img
            src="https://ik.imagekit.io/a6fkjou7d/logo.png?updatedAt=1756378431634"
            alt="Signalist Logo"
            width="150"
            height="auto"
            className="mx-auto"
          />
        </div>

        {/* Verification Card */}
        <div className="bg-[#141414] border border-[#30333A] rounded-lg p-8 shadow-xl">
          {/* Icon */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#050505] border border-[#30333A] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FDD458]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-[#FDD458] text-center mb-4">
            Check Your Email
          </h1>

          {/* Description */}
          <p className="text-[#CCDADC] text-center mb-6">
            We've sent a verification link to your email.
            Please check your inbox and click the link to activate your account.
          </p>

          {/* Resend Section */}
          <div className="mt-8 pt-6 border-t border-[#30333A]">
            <p className="text-[#9ca3af] text-sm text-center mb-4">
              Didn't receive the email? <button onClick={handleResend} className="text-[#FDD458] hover:underline">Resend</button>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/sign-in')}
              className="text-[#CCDADC] text-sm hover:text-[#FDD458] transition-colors"
            >
              Back to Sign In
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-xs text-[#6b7280]">
          <p>Signalist HQ, 200 Market Street, San Francisco, CA 94105</p>
          <p className="mt-1">© 2025 Signalist</p>
        </div>
      </div>
    </div>
  )
};