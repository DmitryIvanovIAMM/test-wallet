import { daysOfWeek, getDateString } from '@/types/dates';

describe('getDateString() helper should', () => {
  it('return date ISO string for the date not within the last week', () => {
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateString = getDateString(date);
      expect(daysOfWeek.includes(dateString)).toBe(true);
    }
  });

  it('return day of the week for the date within the last week', () => {
    const date = new Date('2022-01-01');
    const dateString = getDateString(date);
    expect(dateString).toBe('1/1/2022');
  });

  // this not specified in test task
  it('return date ISO string for the date in future', () => {
    const dateFuture = new Date('2037-01-01');
    const resultDateFuture = getDateString(dateFuture);
    expect(resultDateFuture).toBe('Thursday');
  });
});
