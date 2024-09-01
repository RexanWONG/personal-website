'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function XRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://x.com/rexan_wong');
  }, [router]);

  return null;
}