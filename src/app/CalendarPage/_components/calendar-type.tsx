'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';

interface CalendarTypeProps {
  calendarType: 'single' | 'range';
}

const CalendarType = ({ calendarType }: CalendarTypeProps) => {
  const [selectedSingleDate, setSelectedSingleDate] = useState<
    Date | undefined
  >(undefined);
  const [selectedRangeDate, setSelectedRangeDate] = useState<
    DateRange | undefined
  >(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSelect = () => {
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
          {calendarType === 'single' ? '단일 날짜 선택' : '범위 날짜 선택'}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm p-4">
        <DialogHeader>
          <DialogTitle>
            {calendarType === 'single' ? '단일 날짜 선택' : '범위 날짜 선택'}
          </DialogTitle>
          <DialogDescription>원하는 날짜를 선택하세요.</DialogDescription>
        </DialogHeader>

        {/* ✅ 캘린더 모드에 따라 다르게 렌더링 */}
        {calendarType === 'single' ? (
          <Calendar
            mode="single"
            selected={selectedSingleDate}
            onSelect={setSelectedSingleDate}
            className="rounded-md border p-2"
          />
        ) : (
          <Calendar
            mode="range"
            selected={selectedRangeDate}
            onSelect={setSelectedRangeDate}
            className="rounded-md border p-2"
          />
        )}

        <Button variant="default" onClick={handleSelect}>
          선택 완료
        </Button>

        <DialogFooter>
          <p className="text-sm text-muted-foreground">
            {calendarType === 'single'
              ? selectedSingleDate
                ? `선택한 날짜: ${format(selectedSingleDate, 'yyyy-MM-dd')}`
                : '선택된 날짜 없음'
              : selectedRangeDate?.from
                ? `선택한 범위: ${format(selectedRangeDate.from, 'yyyy-MM-dd')} ~ ${
                    selectedRangeDate.to
                      ? format(selectedRangeDate.to, 'yyyy-MM-dd')
                      : '미정'
                  }`
                : '선택된 날짜 없음'}
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarType;
