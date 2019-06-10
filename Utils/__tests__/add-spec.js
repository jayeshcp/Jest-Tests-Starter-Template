import add from '../add';

describe('add function test suite', () => {
  it('test1', () => {
    expect(add(1, 2)).toEqual(3);
  });

  it('test2', () => {
    expect(add(2, 2)).toEqual(4);
  });

  it('test3', () => {
    expect(add(undefined, 3)).toEqual(NaN);
  });

  it('test4', () => {
    expect(add(-10, 4)).toEqual(-6);
  });
});
