import { expect } from 'chai';
import sinon from 'sinon';
import champions from '../../../../../src/server/data/queries/champions';
import ChampionListType from '../../../../../src/server/data/types/ChampionListType';
import {
  optionsType,
} from '../../../../../src/server/data/types/constants';
import getChampionsResult from '../../../support/getChampionsResult';

describe('Queries/champions', () => {
  it('should define a type', () => {
    expect(champions.type).to.deep.equal(ChampionListType);
  });

  it('should define arguments', () => {
    expect(champions.args).to.be.an('object');
    expect(champions.args).to.have.property('options');
    expect(champions.args.options).to.deep.equal(optionsType);
  });

  describe('#resolve()', () => {
    let getChampionsStub;
    const options = [];

    beforeEach(() => {
      getChampionsStub = sinon.stub();
      champions.__Rewire__('lolApi', { getChampions: getChampionsStub });
    });

    afterEach(() => {
      champions.__ResetDependency__('lolApi');
    });

    it('should return the result of getChampionsResult with the map of champions turned into a list', async () => {
      getChampionsStub.resolves(getChampionsResult.withMap);

      const result = await champions.resolve(null, { options });
      expect(result).to.deep.equal(getChampionsResult.withArray);
    });

    it('should throw an error if the request is unsuccessful', async () => {
      let error;
      const errorMsg = 'failure of some sort';

      getChampionsStub.rejects(errorMsg);

      try {
        await champions.resolve(null, { options });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.defined;
      expect(error.message).to.equal('Unable to retrieve champions.');
    });
  });
});
