import { getDateString } from '@/types/dates';

describe('getDateString() helper should', () => {
  it('return day of the week for the date within the last week', () => {
    // Arrange
    const date = new Date('2022-01-01');
    // Act
    const result = getDateString(date);
    // Assert
    expect(result).toBe('1/1/2022');
  });
});
