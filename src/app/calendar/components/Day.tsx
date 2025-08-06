interface DayProps {
    date: number;
    month: number;
    year: number;
    dayIndex?: number;
}

export default function Day({ date, month, year, dayIndex }: DayProps) {
  return (
    <div className={`min-w-[70px] min-h-[70px] flex justify-center pt-[10px] w-full h-full border-gray-300 border-l-1 ${dayIndex === 6 ? 'border-r-1' : ''}`}>
      <h1>{date}</h1>
    </div>
  );
}