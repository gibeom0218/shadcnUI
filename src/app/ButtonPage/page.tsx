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

const ButtonItem = ({
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

const ButtonPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="mb-6 text-2xl font-bold">Button Variants</h1>

      <div className="grid w-full max-w-md gap-4">
        <ButtonItem label="디폴트" />
        <ButtonItem label="삭제" variant="destructive" />
        <ButtonItem label="테두리 버튼" variant="outline" />
        <ButtonItem label="보조 버튼" variant="secondary" />
        <ButtonItem label="투명 버튼" variant="ghost" />
        <ButtonItem label="링크 버튼" variant="link" />
        <ButtonItem
          label="커스터마이즈 버튼"
          className="border-2 border-blue-500 bg-blue-400 text-white hover:bg-blue-300"
        />
      </div>
    </div>
  );
};

export default ButtonPage;
