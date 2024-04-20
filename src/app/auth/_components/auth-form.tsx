'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { toast } from '@/components/ui/use-toast';

export function AuthForm() {
  const form = useForm();
  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false });
      toast({
        title: 'Magic Link Sent',
        description: 'Check your email for the magic link to login',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An Error occurred. Please try again.',
      });
    }
  });

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 dark:bg-gray-950'>
      <div className='flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900'>
        <Card className='w-full max-w-md p-6 space-y-4'>
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>
              Sign in with Magic Link
            </CardTitle>
            <CardDescription className='text-gray-500 dark:text-gray-400'>
              Enter your email to receive a magic link to sign in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <Label
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                  htmlFor='email'
                >
                  Email address
                </Label>
                <Input
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  id='email'
                  placeholder='example@email.com'
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
