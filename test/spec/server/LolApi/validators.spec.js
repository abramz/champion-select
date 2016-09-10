import { expect } from 'chai';
import {
  getValidChampOpts,
  getValidItemOpts,
  getValidItemListOpts,
  checkId,
  checkLocale,
  checkVersion,
  __RewireAPI__ as ValidatorsRewireAPI,
} from '../../../../src/server/LolApi/validators';
import { riot } from '../../../../src/server/LolApi/constants';

describe('LolApi/validators', () => {
  describe('getValidChampOpts', () => {
    const replacedRiot = {};

    beforeEach(() => {
      ValidatorsRewireAPI.__Rewire__('riot', replacedRiot);
    });

    afterEach(() => {
      ValidatorsRewireAPI.__ResetDependency__('riot');
    });

    it('should return no options if non are provided', () => {
      Object.assign(replacedRiot, riot);
      expect(getValidChampOpts([])).to.equal('');
    });

    it('should return no options if non are valid', () => {
      Object.assign(replacedRiot, riot);
      expect(getValidChampOpts(['foo', 'bar', 'baz'])).to.equal('');
    });

    it('should return all options that are valid', () => {
      Object.assign(replacedRiot, riot);
      expect(getValidChampOpts(['all', 'foo', 'blurb', 'bar', 'baz', 'partype'])).to.equal('all,blurb,partype');
    });

    it('should throw an error if the options or keys provided are not arrays', () => {
      Object.assign(replacedRiot, riot, { champOpts: null });

      expect(() => {
        getValidChampOpts();
      }).to.throw(Error, /options argument/);

      expect(() => {
        getValidChampOpts([]);
      }).to.throw(Error, /validKeys argument/);
    });
  });

  describe('getValidItemOpts', () => {
    const replacedRiot = {};

    beforeEach(() => {
      ValidatorsRewireAPI.__Rewire__('riot', replacedRiot);
    });

    afterEach(() => {
      ValidatorsRewireAPI.__ResetDependency__('riot');
    });

    it('should return no options if non are provided', () => {
      Object.assign(replacedRiot, riot);
      expect(getValidItemOpts([])).to.equal('');
    });

    it('should return no options if non are valid', () => {
      Object.assign(replacedRiot, riot);
      expect(getValidItemOpts(['foo', 'bar', 'baz'])).to.equal('');
    });

    it('should return all options that are valid', () => {
      Object.assign(replacedRiot, riot);
      expect(getValidItemOpts(['all', 'foo', 'requiredChampion', 'bar', 'baz', 'stats'])).to.equal('all,requiredChampion,stats');
    });

    it('should throw an error if the options or keys provided are not arrays', () => {
      Object.assign(replacedRiot, riot, { itemOpts: null });

      expect(() => {
        getValidItemOpts();
      }).to.throw(Error, /options argument/);

      expect(() => {
        getValidItemOpts([]);
      }).to.throw(Error, /validKeys argument/);
    });
  });

  describe('getValidItemListOpts', () => {
    const replacedRiot = {};

    beforeEach(() => {
      ValidatorsRewireAPI.__Rewire__('riot', replacedRiot);
    });

    afterEach(() => {
      ValidatorsRewireAPI.__ResetDependency__('riot');
    });

    it('should return no options if non are provided', () => {
      Object.assign(replacedRiot, riot);
      expect(getValidItemListOpts([])).to.equal('');
    });

    it('should return no options if non are valid', () => {
      Object.assign(replacedRiot, riot);
      expect(getValidItemListOpts(['foo', 'bar', 'baz'])).to.equal('');
    });

    it('should return all options that are valid', () => {
      Object.assign(replacedRiot, riot);
      expect(getValidItemListOpts(['all', 'foo', 'requiredChampion', 'bar', 'baz', 'tree'])).to.equal('all,requiredChampion,tree');
    });

    it('should throw an error if the options or keys provided are not arrays', () => {
      Object.assign(replacedRiot, riot, { itemListOpts: null });

      expect(() => {
        getValidItemListOpts();
      }).to.throw(Error, /options argument/);

      expect(() => {
        getValidItemListOpts([]);
      }).to.throw(Error, /validKeys argument/);
    });
  });

  describe('checkId', () => {
    const error = /Expected a numeric string./;

    it('should return true if the id is valid', () => {
      expect(checkId('531')).to.be.true;
      expect(checkId('124435235')).to.be.true;
    });

    it('should throw an error if the id is not provided', () => {
      expect(() => {
        checkId();
      }).to.throw(Error, error);
    });

    it('should throw an error if the id is not a number in string form', () => {
      expect(() => {
        checkId(13);
      }).to.throw(Error, error);

      expect(() => {
        checkId('fail');
      }).to.throw(Error, error);
    });
  });

  describe('checkLocale', () => {
    const error = /Expected a string that matches the pattern/;

    it('should return true if the locale is valid', () => {
      expect(checkLocale('en_US')).to.be.true;
      expect(checkLocale('zh_TW')).to.be.true;
    });

    it('should throw an error if the locale is not provided', () => {
      expect(() => {
        checkLocale();
      }).to.throw(Error, 'No locale was provided.');
    });

    it('should throw an error if the locale is not a string', () => {
      expect(() => {
        checkLocale(12345);
      }).to.throw(Error, error);
    });

    it('should throw an error if the locale is not a string formatted like: "en_US"', () => {
      expect(() => {
        checkLocale('go_far');
      }).to.throw(Error, error);

      expect(() => {
        checkLocale('gof_ar');
      }).to.throw(Error, error);

      expect(() => {
        checkLocale('g_of');
      }).to.throw(Error, error);

      expect(() => {
        checkLocale('go_f');
      }).to.throw(Error, error);
    });
  });

  describe('checkVersion', () => {
    const error = /Expected a string that matches the pattern/;

    it('should return true if the version is valid', () => {
      expect(checkVersion('1.1.1')).to.equal(true);
      expect(checkVersion('16.7.1')).to.equal(true);
    });

    it('should throw an error if the version is not provided', () => {
      expect(() => {
        checkVersion();
      }).to.throw(Error, 'No version was provided.');
    });

    it('should throw an error if the version is not a string formatted like: "16.12.10"', () => {
      expect(() => {
        checkVersion('x.4.1');
      }).to.throw(Error, error);

      expect(() => {
        checkVersion('v1.2');
      }).to.throw(Error, error);

      expect(() => {
        checkVersion('4.1');
      }).to.throw(Error, error);

      expect(() => {
        checkVersion('2');
      }).to.throw(Error, error);
    });
  });
});
