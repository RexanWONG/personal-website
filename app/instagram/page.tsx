'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InstagramRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://instagram.com/rexanwonger');
  }, [router]);

  return null;
}