import {
  difference, availablePerDay, availablePerYear, nFormatter,
} from './date';

describe('Date', () => {
  it('the remaining amount for the month', () => {
    expect(difference(
      [
        { value: 1500 },
        { value: 1000 },
      ],
      [
        { value: 500 },
        { value: 500 },
      ],
    )).toBe('1500');
  });

  it('remaining amount for the day', () => {
    expect(availablePerDay(1000, 50, 31)).toBe('16');
  });

  it('accumulate over the year', () => {
    expect(availablePerYear(1000, 50)).toBe('6000');
  });

  it('should valid transform more than 100', () => {
    expect(nFormatter(123)).toBe('123');
  });
  it('should valid transform more than 1 000', () => {
    expect(nFormatter(1234)).toBe('1.2k');
    expect(nFormatter(1234)).toContain('k');
  });
  it('should valid transform more than 1 000 000', () => {
    expect(nFormatter(7654321)).toBe('7.7M');
    expect(nFormatter(7654321)).toContain('M');
  });
  it('should valid transform more than 1 000 000 000', () => {
    expect(nFormatter(9876543211)).toBe('9.9G');
    expect(nFormatter(9876543211)).toContain('G');
  });
  it('should valid transform large value', () => {
    expect(nFormatter(2E18)).toBe('2E');
  });
});
