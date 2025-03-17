import CalendarType from '@/components/CalendarType';

const CalendarPage = () => {
  return (
    <div className="flex h-screen items-center justify-center gap-8">
      <CalendarType calendarType="single" />
      <CalendarType calendarType="range" />
    </div>
  );
};

export default CalendarPage;
