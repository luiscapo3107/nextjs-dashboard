'use client';

import { lusitana } from '@/app/ui/fonts';
import { signIn } from '@/auth';
import { Button } from './button';

export default function LoginForm() {
  return (
    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
      <h1 className={`${lusitana.className} mb-3 text-2xl`}>
        Please log in to continue.
      </h1>
      <Button 
        className="mt-4 w-full"
        onClick={() => signIn('auth0', { callbackUrl: '/dashboard' })}
      >
        Sign in with Auth0
      </Button>
    </div>
  );
}
