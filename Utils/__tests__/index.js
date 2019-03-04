import Utils from '../index';

describe('Utils Test Suite', () => {
  const utils = new Utils();
  
  it('test1', () => {
    expect(utils.add(1, 2)).toEqual(3);
  });
});
