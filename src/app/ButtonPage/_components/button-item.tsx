'use client';

import { Button } from '@/components/ui/button';

interface ButtonItemProps {
  label: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  className?: string;
}

export const ButtonItem = ({
  label,
  variant = 'default',
  className,
}: ButtonItemProps) => {
  const handleClick = () => alert(`${label} 버튼`);

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm font-semibold">{variant}</span>
      <Button variant={variant} className={className} onClick={handleClick}>
        {label}
      </Button>
    </div>
  );
};
