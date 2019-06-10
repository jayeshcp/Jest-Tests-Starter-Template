import kSum from '../kSum';

describe('kSum function test suite', () => {
  it('test1', () => {
    expect(kSum([1, 2, 3, 4], 12)).toBe(true);
  });

  it('test2', () => {
    expect(kSum([1, 2, 3, 4], 20)).toBe(false);
  });

  it('test3', () => {
    expect(kSum([1, 2, 3, 4, 5, 6, 7], 34)).toBe(false);
  });

  it('test4', () => {
    expect(kSum([1, 2, 3, 4, 5, 6, 7], 30)).toBe(true);
  });

  it('empty array', () => {
    expect(kSum([], 10)).toBe(false);
  });

  it('single element array', () => {
    expect(kSum([2], 2)).toBe(false);
  });

  it('exactly one match', () => {
    expect(kSum([2, 2], 4)).toBe(true);
  });
});