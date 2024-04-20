'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

export function AuthForm() {
  const form = useForm();
  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data);
    await signIn('email', { email: data.email });
  });

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 dark:bg-gray-950'>
      <div className='mx-auto w-full max-w-md space-y-6'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
            Sign In
          </h1>
          <p className='text-gray-500 dark:text-gray-400'>
            Enter your email to sign in.
          </p>
        </div>
        <Card>
          <CardContent className='space-y-4'>
            <form onSubmit={handleSubmit} className='space-y-2'>
              <div>
                <Label className='sr-only' htmlFor='email'>
                  Email
                </Label>
                <Input
                  id='email'
                  placeholder='example@email.com'
                  required
                  type='email'
                  {...form.register('email')}
                />
              </div>
              <Button className='w-full' type='submit'>
                Send Magic Link
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
