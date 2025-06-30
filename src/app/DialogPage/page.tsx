'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ChangeEvent, useState } from 'react';

const DialogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = () => {
    alert(`${name}을 제출하겠습니다.`);
    setIsOpen(false);
    setName('');
  };

  return (
    <div className="flex items-center justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setIsOpen(true)}>
            모달 열기
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="gap-5">
            <DialogTitle>모달 제목입니다.</DialogTitle>
            <DialogDescription className="gap-2">
              <input
                id="inputField"
                type="text"
                placeholder="여기에 입력하세요"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm transition duration-200 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleSubmit}>
              제출
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogPage;
