import reducer, { defaultState } from 'redux/modules/duckName';
import deepFreeze from 'deep-freeze';

describe('(Redux) duckName', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
