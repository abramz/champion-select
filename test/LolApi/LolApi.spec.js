import LolApi from '../../src/LolApi';
import {
  checkId,
  checkLocale,
  getValidChampOpts,
  getValidItemListOpts,
  getValidItemOpts,
  makeFetch,
  makeFetchFail,
} from '../support/LolApi/mocks';

describe('LolApi', () => {
  let lolApi;

  beforeEach(() => {
    LolApi.__Rewire__('checkId', checkId);
    LolApi.__Rewire__('checkLocale', checkLocale);
    LolApi.__Rewire__('getValidChampOpts', getValidChampOpts);
    LolApi.__Rewire__('getValidItemListOpts', getValidItemListOpts);
    LolApi.__Rewire__('getValidItemOpts', getValidItemOpts);
    LolApi.__Rewire__('makeFetch', makeFetch);
    lolApi = new LolApi();
  });

  afterEach(() => {
    LolApi.__ResetDependency__('checkId');
    LolApi.__ResetDependency__('checkLocale');
    LolApi.__ResetDependency__('getValidChampOpts');
    LolApi.__ResetDependency__('getValidItemListOpts');
    LolApi.__ResetDependency__('getValidItemOpts');
    LolApi.__ResetDependency__('makeFetch');
  });

  describe('getChampion', () => {
    it('should return the result of makeFetch', async (done) => {
      try {
        const result = await lolApi.getChampion({ id: 'success', locale: 'success', options: ['success'] });
        result.should.equal('fetch success');
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should throw an error if the id is not valid.');

    it('should throw an error if the locale is not valid.');

    it('should throw an error if makeFetch throws an error', async (done) => {
      let error;
      LolApi.__Rewire__('makeFetch', makeFetchFail);

      try {
        await lolApi.getChampion({ id: 'success', locale: 'success' });
        return done(new Error('getChampion should have failed'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.be.defined;
        error.message.should.equal('fetch fail');
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  describe('getChampions', () => {
    it('should return the result of makeFetch', async (done) => {
      try {
        const result = await lolApi.getChampions({ locale: 'success', options: ['success'] });
        result.should.equal('fetch success');
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should throw an error if the locale is not valid.');

    it('should throw an error if makeFetch throws an error', async (done) => {
      let error;
      LolApi.__Rewire__('makeFetch', makeFetchFail);

      try {
        await lolApi.getChampions({ locale: 'success' });
        return done(new Error('getChampions should have failed'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.be.defined;
        error.message.should.equal('fetch fail');
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  describe('getItem', () => {
    it('should return the result of makeFetch', async (done) => {
      try {
        const result = await lolApi.getItem({ id: 'success', locale: 'success', options: ['success'] });
        result.should.equal('fetch success');
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should throw an error if the id is not valid.');

    it('should throw an error if the locale is not valid.');

    it('should throw an error if makeFetch throws an error', async (done) => {
      let error;
      LolApi.__Rewire__('makeFetch', makeFetchFail);

      try {
        await lolApi.getItem({ id: 'success', locale: 'success' });
        return done(new Error('getItem should have failed'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.be.defined;
        error.message.should.equal('fetch fail');
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  describe('getItems', () => {
    it('should return the result of makeFetch', async (done) => {
      try {
        const result = await lolApi.getItems({ locale: 'success', options: ['success'] });
        result.should.equal('fetch success');
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should throw an error if the locale is not valid.');

    it('should throw an error if makeFetch throws an error', async (done) => {
      let error;
      LolApi.__Rewire__('makeFetch', makeFetchFail);

      try {
        await lolApi.getItems({ locale: 'success' });
        return done(new Error('getItems should have failed'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.be.defined;
        error.message.should.equal('fetch fail');
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  describe('getLanguageStrings', () => {
    it('should return the result of makeFetch', async (done) => {
      try {
        const result = await lolApi.getLanguageStrings({ locale: 'success' });
        result.should.equal('fetch success');
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should throw an error if the locale is not valid.');

    it('should throw an error if makeFetch throws an error', async (done) => {
      let error;
      LolApi.__Rewire__('makeFetch', makeFetchFail);

      try {
        await lolApi.getLanguageStrings({ locale: 'success' });
        return done(new Error('getLanguageStrings should have failed'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.be.defined;
        error.message.should.equal('fetch fail');
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  describe('getLanguages', () => {
    it('should return the result of makeFetch', async (done) => {
      try {
        const result = await lolApi.getLanguages();
        result.should.equal('fetch success');
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should throw an error if makeFetch throws an error', async (done) => {
      let error;
      LolApi.__Rewire__('makeFetch', makeFetchFail);

      try {
        await lolApi.getLanguages();
        return done(new Error('getLanguages should have failed'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.be.defined;
        error.message.should.equal('fetch fail');
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  describe('getMaps', () => {
    it('should return the result of makeFetch', async (done) => {
      try {
        const result = await lolApi.getMaps({ locale: 'success' });
        result.should.equal('fetch success');
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should throw an error if the locale is not valid.');

    it('should throw an error if makeFetch throws an error', async (done) => {
      let error;
      LolApi.__Rewire__('makeFetch', makeFetchFail);

      try {
        await lolApi.getMaps({ id: 'success', locale: 'success' });
        return done(new Error('getMaps should have failed'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.be.defined;
        error.message.should.equal('fetch fail');
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  describe('getServer', () => {
    it('should return the result of makeFetch', async (done) => {
      try {
        const result = await lolApi.getServer();
        result.should.equal('fetch success');
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should throw an error if makeFetch throws an error', async (done) => {
      let error;
      LolApi.__Rewire__('makeFetch', makeFetchFail);

      try {
        await lolApi.getServer();
        return done(new Error('getServer should have failed'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.be.defined;
        error.message.should.equal('fetch fail');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
