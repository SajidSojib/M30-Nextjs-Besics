import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function AnalyticsLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div>
        <Button asChild>
          <Link href="/dashboard2/analytics1/weekly">Weekly</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard2/analytics1/monthly">Monthly</Link>
        </Button>
      </div>
      {children}
    </div>
  );
}
