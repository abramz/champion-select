import {
  getValidChampOpts,
  getValidItemOpts,
  getValidItemListOpts,
  checkId,
  checkLocale,
  checkVersion,
  __RewireAPI__ as ValidatorsRewireAPI,
} from '../../../src/LolApi/validators';
import { riot } from '../../../src/LolApi/constants';

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
      getValidChampOpts([]).should.equal('');
    });

    it('should return no options if non are valid', () => {
      Object.assign(replacedRiot, riot);
      getValidChampOpts(['foo', 'bar', 'baz']).should.equal('');
    });

    it('should return all options that are valid', () => {
      Object.assign(replacedRiot, riot);
      getValidChampOpts(['all', 'foo', 'blurb', 'bar', 'baz', 'partype']).should.equal('all,blurb,partype');
    });

    it('should throw an error if the options or keys provided are not arrays', () => {
      Object.assign(replacedRiot, riot, { champOpts: null });

      (() => {
        getValidChampOpts();
      }).should.throw(Error, /options argument/);

      (() => {
        getValidChampOpts([]);
      }).should.throw(Error, /validKeys argument/);
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
      getValidItemOpts([]).should.equal('');
    });

    it('should return no options if non are valid', () => {
      Object.assign(replacedRiot, riot);
      getValidItemOpts(['foo', 'bar', 'baz']).should.equal('');
    });

    it('should return all options that are valid', () => {
      Object.assign(replacedRiot, riot);
      getValidItemOpts(['all', 'foo', 'requiredChampion', 'bar', 'baz', 'stats']).should.equal('all,requiredChampion,stats');
    });

    it('should throw an error if the options or keys provided are not arrays', () => {
      Object.assign(replacedRiot, riot, { itemOpts: null });

      (() => {
        getValidItemOpts();
      }).should.throw(Error, /options argument/);

      (() => {
        getValidItemOpts([]);
      }).should.throw(Error, /validKeys argument/);
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
      getValidItemListOpts([]).should.equal('');
    });

    it('should return no options if non are valid', () => {
      Object.assign(replacedRiot, riot);
      getValidItemListOpts(['foo', 'bar', 'baz']).should.equal('');
    });

    it('should return all options that are valid', () => {
      Object.assign(replacedRiot, riot);
      getValidItemListOpts(['all', 'foo', 'requiredChampion', 'bar', 'baz', 'tree']).should.equal('all,requiredChampion,tree');
    });

    it('should throw an error if the options or keys provided are not arrays', () => {
      Object.assign(replacedRiot, riot, { itemListOpts: null });

      (() => {
        getValidItemListOpts();
      }).should.throw(Error, /options argument/);

      (() => {
        getValidItemListOpts([]);
      }).should.throw(Error, /validKeys argument/);
    });
  });

  describe('checkId', () => {
    const error = /Expected a numeric string./;

    it('should return true if the id is valid', () => {
      checkId('531').should.equal(true);
      checkId('124435235').should.equal(true);
    });

    it('should throw an error if the id is not provided', () => {
      (() => {
        checkId();
      }).should.throw(Error, error);
    });

    it('should throw an error if the id is not a number in string form', () => {
      (() => {
        checkId(13);
      }).should.throw(Error, error);

      (() => {
        checkId('fail');
      }).should.throw(Error, error);
    });
  });

  describe('checkLocale', () => {
    const error = /Expected a string that matches the pattern/;

    it('should return true if the locale is valid', () => {
      checkLocale('en_US').should.equal(true);
      checkLocale('zh_TW').should.equal(true);
    });

    it('should throw an error if the locale is not provided', () => {
      (() => {
        checkLocale();
      }).should.throw(Error, 'Error: No locale was provided.');
    });

    it('should throw an error if the locale is not a string', () => {
      (() => {
        checkLocale(12345);
      }).should.throw(Error, error);
    });

    it('should throw an error if the locale is not a string formatted like: "en_US"', () => {
      (() => {
        checkLocale('go_far');
      }).should.throw(Error, error);

      (() => {
        checkLocale('gof_ar');
      }).should.throw(Error, error);

      (() => {
        checkLocale('g_of');
      }).should.throw(Error, error);

      (() => {
        checkLocale('go_f');
      }).should.throw(Error, error);
    });
  });

  describe('checkVersion', () => {
    const error = /Expected a string that matches the pattern/;

    it('should return true if the version is valid', () => {
      checkVersion('1.1.1').should.equal(true);
      checkVersion('16.7.1').should.equal(true);
    });

    it('should throw an error if the version is not provided', () => {
      (() => {
        checkVersion();
      }).should.throw(Error, 'Error: No version was provided.');
    });

    it('should throw an error if the version is not a string formatted like: "16.12.10"', () => {
      (() => {
        checkVersion('x.4.1');
      }).should.throw(Error, error);

      (() => {
        checkVersion('v1.2');
      }).should.throw(Error, error);

      (() => {
        checkVersion('4.1');
      }).should.throw(Error, error);

      (() => {
        checkVersion('2');
      }).should.throw(Error, error);
    });
  });
});
