import { expect } from 'chai';
import LolApi from '../../../src/LolApi';
import {
  checkId,
  checkLocale,
  getValidChampOpts,
  getValidItemListOpts,
  getValidItemOpts,
  makeFetchSuccess,
  makeFetchFail,
} from '../support/LolApi/mocks';
import serverSuccess from '../support/LolApi/serverSuccess';

describe('LolApi', () => {
  let lolApi;

  beforeEach(() => {
    LolApi.__Rewire__('checkId', checkId);
    LolApi.__Rewire__('checkLocale', checkLocale);
    LolApi.__Rewire__('getValidChampOpts', getValidChampOpts);
    LolApi.__Rewire__('getValidItemListOpts', getValidItemListOpts);
    LolApi.__Rewire__('getValidItemOpts', getValidItemOpts);
  });

  afterEach(() => {
    LolApi.__ResetDependency__('checkId');
    LolApi.__ResetDependency__('checkLocale');
    LolApi.__ResetDependency__('getValidChampOpts');
    LolApi.__ResetDependency__('getValidItemListOpts');
    LolApi.__ResetDependency__('getValidItemOpts');
    LolApi.__ResetDependency__('makeFetch');
  });

  describe('#getChampion()', () => {
    describe('success', () => {
      beforeEach(() => {
        LolApi.__Rewire__('makeFetch', makeFetchSuccess);
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
        LolApi.__Rewire__('makeFetch', makeFetchFail);
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
        LolApi.__Rewire__('makeFetch', makeFetchSuccess);
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
        LolApi.__Rewire__('makeFetch', makeFetchFail);
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
        LolApi.__Rewire__('makeFetch', makeFetchSuccess);
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
        LolApi.__Rewire__('makeFetch', makeFetchFail);
        lolApi = new LolApi();
      });

      it('should throw an error if makeFetch throws an error', async () => {
        let error;
        LolApi.__Rewire__('makeFetch', makeFetchFail);

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
        LolApi.__Rewire__('makeFetch', makeFetchSuccess);
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
        LolApi.__Rewire__('makeFetch', makeFetchFail);
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
        LolApi.__Rewire__('makeFetch', makeFetchSuccess);
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
        LolApi.__Rewire__('makeFetch', makeFetchFail);
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
        LolApi.__Rewire__('makeFetch', makeFetchSuccess);
        lolApi = new LolApi();
      });

      it('should return the result of makeFetch', async () => {
        const result = await lolApi.getLanguages();
        expect(result).to.equal('fetch success');
      });
    });

    describe('failure', () => {
      beforeEach(() => {
        LolApi.__Rewire__('makeFetch', makeFetchFail);
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
        LolApi.__Rewire__('makeFetch', makeFetchSuccess);
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
        LolApi.__Rewire__('makeFetch', makeFetchFail);
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
        LolApi.__Rewire__('makeFetch', makeFetchSuccess);
        lolApi = new LolApi();
      });

      it('should return the result of makeFetch', async () => {
        const result = await lolApi.getServer();
        expect(result).to.deep.equal(serverSuccess);
      });
    });

    describe('failure', () => {
      beforeEach(() => {
        LolApi.__Rewire__('makeFetch', makeFetchFail);
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
