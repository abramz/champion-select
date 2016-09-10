import { expect } from 'chai';
import { LolApi, __RewireAPI__ as RewireAPI } from '../../../../src/server/LolApi';
import {
  checkId,
  checkLocale,
  getValidChampOpts,
  getValidItemListOpts,
  getValidItemOpts,
  makeFetchSuccess,
  makeFetchFail,
} from '../../support/LolApi/mocks';
import serverSuccess from '../../support/LolApi/serverSuccess';

describe('LolApi', () => {
  let lolApi;

  beforeEach(() => {
    RewireAPI.__Rewire__('checkId', checkId);
    RewireAPI.__Rewire__('checkLocale', checkLocale);
    RewireAPI.__Rewire__('getValidChampOpts', getValidChampOpts);
    RewireAPI.__Rewire__('getValidItemListOpts', getValidItemListOpts);
    RewireAPI.__Rewire__('getValidItemOpts', getValidItemOpts);
  });

  afterEach(() => {
    RewireAPI.__ResetDependency__('checkId');
    RewireAPI.__ResetDependency__('checkLocale');
    RewireAPI.__ResetDependency__('getValidChampOpts');
    RewireAPI.__ResetDependency__('getValidItemListOpts');
    RewireAPI.__ResetDependency__('getValidItemOpts');
    RewireAPI.__ResetDependency__('makeFetch');
  });

  describe('#getChampion()', () => {
    describe('success', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchSuccess);
        lolApi = new LolApi();
      });

      it('should return the result of makeFetch', async () => {
        const result = await lolApi.getChampion({ id: 'success', locale: 'success', options: ['success'] });
        expect(result).to.equal('fetch success');
      });
    });

    it('should throw an error if the id is not valid.');

    it('should throw an error if the locale is not valid.');

    describe('failure', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchFail);
        lolApi = new LolApi();
      });

      it('should throw an error if makeFetch throws an error', async() => {
        let error;

        try {
          await lolApi.getChampion({ id: 'success', locale: 'success' });
        } catch (err) {
          error = err;
        }

        expect(error).to.be.defined;
        expect(error.message).to.be.defined;
        expect(error.message).to.equal('fetch fail');
      });
    });
  });

  describe('#getChampions()', () => {
    describe('success', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchSuccess);
        lolApi = new LolApi();
      });

      it('should return the result of makeFetch', async() => {
        const result = await lolApi.getChampions({ locale: 'success', options: ['success'] });
        expect(result).to.equal('fetch success');
      });
    });

    it('should throw an error if the locale is not valid.');

    describe('failure', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchFail);
        lolApi = new LolApi();
      });

      it('should throw an error if makeFetch throws an error', async () => {
        let error;

        try {
          await lolApi.getChampions({ locale: 'success' });
        } catch (err) {
          error = err;
        }

        expect(error).to.be.defined;
        expect(error.message).to.be.defined;
        expect(error.message).to.equal('fetch fail');
      });
    });
  });

  describe('#getItem()', () => {
    describe('success', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchSuccess);
        lolApi = new LolApi();
      });

      it('should return the result of makeFetch', async () => {
        const result = await lolApi.getItem({ id: 'success', locale: 'success', options: ['success'] });
        expect(result).to.equal('fetch success');
      });
    });

    it('should throw an error if the id is not valid.');

    it('should throw an error if the locale is not valid.');

    describe('failure', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchFail);
        lolApi = new LolApi();
      });

      it('should throw an error if makeFetch throws an error', async () => {
        let error;
        RewireAPI.__Rewire__('makeFetch', makeFetchFail);

        try {
          await lolApi.getItem({ id: 'success', locale: 'success' });
        } catch (err) {
          error = err;
        }

        expect(error).to.be.defined;
        expect(error.message).to.be.defined;
        expect(error.message).to.equal('fetch fail');
      });
    });
  });

  describe('#getItems()', () => {
    describe('success', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchSuccess);
        lolApi = new LolApi();
      });

      it('should return the result of makeFetch', async () => {
        const result = await lolApi.getItems({ locale: 'success', options: ['success'] });
        expect(result).to.equal('fetch success');
      });
    });

    it('should throw an error if the locale is not valid.');

    describe('failure', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchFail);
        lolApi = new LolApi();
      });

      it('should throw an error if makeFetch throws an error', async () => {
        let error;

        try {
          await lolApi.getItems({ locale: 'success' });
        } catch (err) {
          error = err;
        }

        expect(error).to.be.defined;
        expect(error.message).to.be.defined;
        expect(error.message).to.equal('fetch fail');
      });
    });
  });

  describe('#getLanguageStrings()', () => {
    describe('success', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchSuccess);
        lolApi = new LolApi();
      });

      it('should return the result of makeFetch', async () => {
        const result = await lolApi.getLanguageStrings({ locale: 'success' });
        expect(result).to.equal('fetch success');
      });

      it('should throw an error if the locale is not valid.');
    });

    describe('failure', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchFail);
        lolApi = new LolApi();
      });

      it('should throw an error if makeFetch throws an error', async () => {
        let error;

        try {
          await lolApi.getLanguageStrings({ locale: 'success' });
        } catch (err) {
          error = err;
        }

        expect(error).to.be.defined;
        expect(error.message).to.be.defined;
        expect(error.message).to.equal('fetch fail');
      });
    });
  });

  describe('#getLanguages()', () => {
    describe('success', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchSuccess);
        lolApi = new LolApi();
      });

      it('should return the result of makeFetch', async () => {
        const result = await lolApi.getLanguages();
        expect(result).to.equal('fetch success');
      });
    });

    describe('failure', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchFail);
        lolApi = new LolApi();
      });

      it('should throw an error if makeFetch throws an error', async () => {
        let error;

        try {
          await lolApi.getLanguages();
        } catch (err) {
          error = err;
        }

        expect(error).to.be.defined;
        expect(error.message).to.be.defined;
        expect(error.message).to.equal('fetch fail');
      });
    });
  });

  describe('#getMaps()', () => {
    describe('success', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchSuccess);
        lolApi = new LolApi();
      });

      it('should return the result of makeFetch', async () => {
        const result = await lolApi.getMaps({ locale: 'success' });
        expect(result).to.equal('fetch success');
      });

      it('should throw an error if the locale is not valid.');
    });

    describe('failure', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchFail);
        lolApi = new LolApi();
      });

      it('should throw an error if makeFetch throws an error', async () => {
        let error;

        try {
          await lolApi.getMaps({ id: 'success', locale: 'success' });
        } catch (err) {
          error = err;
        }

        expect(error).to.be.defined;
        expect(error.message).to.be.defined;
        expect(error.message).to.equal('fetch fail');
      });
    });
  });

  describe('#getServer()', () => {
    describe('success', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchSuccess);
        lolApi = new LolApi();
      });

      it('should return the result of makeFetch', async () => {
        const result = await lolApi.getServer();
        expect(result).to.deep.equal(serverSuccess);
      });
    });

    describe('failure', () => {
      beforeEach(() => {
        RewireAPI.__Rewire__('makeFetch', makeFetchFail);
        lolApi = new LolApi();
      });

      it('should throw an error if makeFetch throws an error', async () => {
        let error;

        try {
          await lolApi.getServer();
        } catch (err) {
          error = err;
        }

        expect(error).to.be.defined;
        expect(error.message).to.be.defined;
        expect(error.message).to.equal('fetch fail');
      });
    });
  });
});
