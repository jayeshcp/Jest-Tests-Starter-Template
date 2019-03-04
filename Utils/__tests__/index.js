import Utils from '../index';

describe('Utils Test Suite', () => {
  const utils = new Utils();

  describe('add function test suite', () => {
    it('test1', () => {
      expect(utils.add(1, 2)).toEqual(3);
    });
  });

  describe('kSum function test suite', () => {
    it('test1', () => {
      expect(utils.kSum([1, 2, 3, 4], 12)).toBe(true);
    });

    it('test2', () => {
      expect(utils.kSum([1, 2, 3, 4], 20)).toBe(false);
    });

    it('test3', () => {
      expect(utils.kSum([1, 2, 3, 4, 5, 6, 7], 34)).toBe(false);
    });

    it('test4', () => {
      expect(utils.kSum([1, 2, 3, 4, 5, 6, 7], 30)).toBe(true);
    });

    it('empty array', () => {
      expect(utils.kSum([], 10)).toBe(false);
    });

    it('single element array', () => {
      expect(utils.kSum([2], 2)).toBe(false);
    });

    it('exactly one match', () => {
      expect(utils.kSum([2, 2], 4)).toBe(true);
    });
  });
});
