import CalendarType from '@/app/CalendarPage/_components/calendar-type';

const CalendarPage = () => {
  return (
    <main className="flex flex-grow items-center justify-center">
      <CalendarType calendarType="single" />
      <CalendarType calendarType="range" />
    </main>
  );
};

export default CalendarPage;
