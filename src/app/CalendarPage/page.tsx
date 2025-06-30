import CalendarType from '@/app/CalendarPage/_components/calendar-type';

const CalendarPage = () => {
  return (
    <main className="flex-grow">
      <CalendarType calendarType="single" />
      <CalendarType calendarType="range" />
    </main>
  );
};

export default CalendarPage;
