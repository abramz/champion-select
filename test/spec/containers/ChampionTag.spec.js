import { expect } from 'chai';
import sinon from 'sinon';
import { ADD_CHAMPION_TAG, REMOVE_CHAMPION_TAG } from '../../../src/constants/ActionTypes';
import {
  mapStateToProps,
  mapDispatchToProps,
  __RewireAPI__ as RewireAPI,
} from '../../../src/containers/ChampionTag';

describe('ChampionTag', () => {
  describe('mapStateToProps', () => {
    const allTheTags = ['a', 'b', 'c', 'd'];
    function setup(championTags, filter) {
      const result = mapStateToProps({ championTags }, { filter });
      expect(result.filter).to.equal(filter, 'mapStateToProps should always return the filter as is');

      return result.checked;
    }

    it('should set checked to true if the tag is in the list of tags', () => {
      const result = setup(allTheTags, 'a');
      expect(result).to.be.true;
    });

    it('should set checked to false if the tag is not in the list of tags', () => {
      const result = setup(allTheTags, 'z');
      expect(result).to.be.false;
    });

    it('should set checked to false if the list of tags is empty', () => {
      const result = setup([], 'a');
      expect(result).to.be.false;
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatchSpy;

    beforeEach(() => {
      dispatchSpy = sinon.spy();
      RewireAPI.__Rewire__('dispatch', dispatchSpy);
    });

    afterEach(() => {
      RewireAPI.__ResetDependency__('dispatch');
    });

    describe('#onChange()', () => {
      it('should dispatch the ADD_CHAMPION_TAG action if the checkbox is checked', () => {
        const filter = 'test add filter';
        const { onChange } = mapDispatchToProps(dispatchSpy, { filter });
        onChange({ target: { checked: true } });

        expect(dispatchSpy).to.have.been.calledWithExactly({ tag: filter, type: ADD_CHAMPION_TAG });
      });

      it('should dispatch the REMOVE_CHAMPION_TAG action if the checkbox is not checked', () => {
        const filter = 'test remove filter';
        const { onChange } = mapDispatchToProps(dispatchSpy, { filter });
        onChange({ target: { checked: false } });

        expect(dispatchSpy).to.have.been.calledWithExactly({ tag: filter, type: REMOVE_CHAMPION_TAG });
      });
    });
  });
});
