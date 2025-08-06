export function getMonthInfo(month: number, year: number) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  
  return {
    firstDayOfWeek: firstDay.getDay(),
    daysInMonth: lastDay.getDate(),
    monthName: firstDay.toLocaleDateString('en-US', { month: 'long' }),
    year: year
  };
}

export function generateCalendarWeeks(month: number, year: number) {
  const monthInfo = getMonthInfo(month, year);
  const weeks = [];
  
  let currentDate = 1;
  
  // Generate weeks
  for (let week = 0; week < 5; week++) { // Max 5 weeks in a month view
    const weekDates = [];
    
    for (let day = 0; day < 7; day++) {
      if (week === 0 && day < monthInfo.firstDayOfWeek) {
        // Previous month days
        const prevMonth = month === 1 ? 12 : month - 1;
        const prevYear = month === 1 ? year - 1 : year;
        const prevMonthDays = new Date(prevYear, prevMonth, 0).getDate();
        
        weekDates.push({
          date: prevMonthDays - (monthInfo.firstDayOfWeek - day - 1),
          month: prevMonth,
          year: prevYear,
          isCurrentMonth: false
        });
      } else if (currentDate <= monthInfo.daysInMonth) {
        // Current month days
        weekDates.push({
          date: currentDate,
          month: month,
          year: year,
          isCurrentMonth: true
        });
        currentDate++;
      } else {
        // Next month days
        const nextMonth = month === 12 ? 1 : month + 1;
        const nextYear = month === 12 ? year + 1 : year;
        
        weekDates.push({
          date: currentDate - monthInfo.daysInMonth,
          month: nextMonth,
          year: nextYear,
          isCurrentMonth: false
        });
        currentDate++;
      }
    }
    
    weeks.push(weekDates);
  }
  
  return weeks;
}