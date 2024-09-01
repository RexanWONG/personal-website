'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GitHubRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://github.com/rexanwong');
  }, [router]);

  return null;
}