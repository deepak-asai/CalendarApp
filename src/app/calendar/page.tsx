import { useCalendarStore } from "@/stores/calendarStore";
import { Week } from "./components/Week";
import { generateCalendarWeeks } from "./services/generateWeekDates";
import { useEffect } from "react";

export default function CalendarPage() {
  const weeks = generateCalendarWeeks(7, 2025);
  const {
    events,
    loadEventsForMonth
  } = useCalendarStore();

  useEffect(() => {
    loadEventsForMonth(2025, 7);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {weeks.map((weekDates, index) => (
        <Week key={index} weekDates={weekDates} weekIndex={index} />
      ))}
    </div>
  );
}