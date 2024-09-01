'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function XRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://hk.linkedin.com/in/rexanwong');
  }, [router]);

  return null;
}