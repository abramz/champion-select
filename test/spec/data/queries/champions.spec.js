import { expect } from 'chai';
import sinon from 'sinon';
import champions from '../../../../src/data/queries/champions';
import ChampionListType from '../../../../src/data/types/ChampionListType';
import {
  localeType,
  optionsType,
} from '../../../../src/data/types/constants';
import getChampionsResult from '../../support/getChampionsResult';

describe('Queries/champions', () => {
  it('should define a type', () => {
    expect(champions.type).to.deep.equal(ChampionListType);
  });

  it('should define arguments', () => {
    expect(champions.args).to.be.an('object');
    expect(champions.args).to.have.property('locale');
    expect(champions.args).to.have.property('options');
    expect(champions.args.locale).to.deep.equal(localeType);
    expect(champions.args.options).to.deep.equal(optionsType);
  });

  describe('#resolve()', () => {
    let getChampionsStub;
    const locale = 'en_US';
    const options = [];

    beforeEach(() => {
      getChampionsStub = sinon.stub();
      champions.__Rewire__('LolApi', class LolApi {
        constructor() {
          this.getChampions = getChampionsStub;
        }
      });
    });

    afterEach(() => {
      champions.__ResetDependency__('lolApi');
    });

    it('should return the result of getChampionsResult with the map of champions turned into a list', async (done) => {
      getChampionsStub.resolves(getChampionsResult.withMap);

      try {
        const result = await champions.resolve(null, { locale, options });
        expect(result).to.deep.equal(getChampionsResult.withArray);
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should throw an error if the request is unsuccessful', async (done) => {
      let error;
      const errorMsg = 'failure of some sort';

      getChampionsStub.rejects(errorMsg);

      try {
        await champions.resolve(null, { locale, options });
        return done(new Error('champions.resolve() should have failed.'));
      } catch (err) {
        error = err;
      }

      try {
        expect(error.message).to.equal('Unable to retrieve champions.');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
