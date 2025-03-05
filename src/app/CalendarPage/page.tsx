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

export const CalendarPage = () => {
  const [selectedSingleDate, setSelectedSingleDate] = useState<
    Date | undefined
  >(undefined);
  const [selectedRangeDate, setSelectedRangeDate] = useState<
    DateRange | undefined
  >(undefined);

  return (
    <div className="flex h-screen items-center justify-center gap-8">
      {/* ✅ 단일 날짜 선택 모달 */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">단일 날짜 선택</Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm p-4">
          <DialogHeader>
            <DialogTitle>단일 날짜 선택</DialogTitle>
            <DialogDescription>원하는 날짜를 선택하세요.</DialogDescription>
          </DialogHeader>

          {/* ✅ 단일 날짜 선택 캘린더 */}
          <Calendar
            mode="single"
            selected={selectedSingleDate}
            onSelect={setSelectedSingleDate}
            className="rounded-md border p-2"
          />

          {/* ✅ 선택한 날짜를 Footer에 표시 */}
          <DialogFooter>
            <p className="text-sm text-muted-foreground">
              {selectedSingleDate
                ? `선택한 날짜: ${format(selectedSingleDate, 'yyyy-MM-dd')}`
                : '선택된 날짜 없음'}
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ✅ 범위 날짜 선택 모달 */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">범위 날짜 선택</Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm p-4">
          <DialogHeader>
            <DialogTitle>범위 날짜 선택</DialogTitle>
            <DialogDescription>원하는 날짜를 선택하세요.</DialogDescription>
          </DialogHeader>

          {/* ✅ 범위 날짜 선택 캘린더 */}
          <Calendar
            mode="range"
            selected={selectedRangeDate}
            onSelect={setSelectedRangeDate}
            className="rounded-md border p-2"
          />

          {/* ✅ 선택한 날짜 범위를 Footer에 표시 */}
          <DialogFooter>
            <p className="text-sm">
              {selectedRangeDate?.from
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
    </div>
  );
};

export default CalendarPage;
