import Day from "./Day";

interface WeekProps {
	weekDates: Array<{
		date: number;
		month: number;
		year: number;
		isCurrentDay?: boolean;
	}>;
	weekIndex?: number;
}
export function Week({ weekDates, weekIndex }: WeekProps) {
	return (
			<div className={`week flex align-center justify-between h-full border-gray-300 border-b-1 ${weekIndex == 0 ? 'border-t-1' : ''}`}>
				{weekDates.map((dateInfo, index) => (
					<Day 
						key={`${dateInfo.year}-${dateInfo.month}-${dateInfo.date}`}
						{...dateInfo} 
						dayIndex={index}
					/>
				))}
			</div>
	);
}