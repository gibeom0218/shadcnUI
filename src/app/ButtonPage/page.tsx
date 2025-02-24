'use client';
import { Button } from '@/components/ui/button';

const ButtonPage = () => {
  const handleClick = () => {
    alert('안녕 버튼 ui야');
  };

  return (
    <div className="flex flex-col">
      <Button onClick={handleClick}>안녕</Button>
      <Button
        className="!important border-2 border-blue-500 bg-blue-400 hover:bg-blue-100"
        onClick={handleClick}
      >
        커스터마이즈된 버튼
      </Button>
    </div>
  );
};

export default ButtonPage;
