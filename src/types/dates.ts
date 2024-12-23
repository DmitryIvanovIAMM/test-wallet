export const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const getDateString = (date: Date | string) => {
  const incomingDate = new Date(date);
  const lastWeekDate = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);

  return incomingDate > lastWeekDate
    ? daysOfWeek[incomingDate.getDay()]
    : incomingDate.toLocaleDateString();
};

export const getDateTimeString = (date: Date | string) => {
  const incomingDate = new Date(date);

  return `${incomingDate.toLocaleDateString()}, ${incomingDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })}`;
};
