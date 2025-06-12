import { Loader2 } from 'lucide-react';

import { cn } from '~/components/utils';

interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <Loader2 className="h-6 w-6 animate-spin" />
    </div>
  );
}
