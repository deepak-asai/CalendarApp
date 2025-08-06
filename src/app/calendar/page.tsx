import { Week } from "./components/Week";
import { generateCalendarWeeks } from "./services/generateWeekDates";

export default function CalendarPage() {
  const weeks = generateCalendarWeeks(7, 2025);
  return (
    <div className="w-full h-full flex flex-col justify-between">
      {weeks.map((weekDates, index) => (
        <Week key={index} weekDates={weekDates} weekIndex={index} />
      ))}
    </div>
  );
}