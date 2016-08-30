import sinon from 'sinon';
import {
  stripApiKey,
  makeFetch,
  __RewireAPI__ as UtilsRewireAPI,
} from '../../../src/LolApi/utils';
import { riot } from '../../../src/LolApi/constants';
import utilsMocks from '../support/LolApi/utils';

const apiKey = riot.apiKey;

describe('LolApi/utils', () => {
  describe('stripApiKey', () => {
    const { negativeTests } = utilsMocks.stripApiKey;

    before(() => {
      negativeTests.should.be.an('array');
      negativeTests.length.should.be.above(0);
    });

    it('should remove the api key query param', () => {
      let test = 'api_key=foo';
      let result = stripApiKey(test);
      result.should.equal('api_key=<REDACTED>');

      test = 'api_key=bar&';
      result = stripApiKey(test);
      result.should.equal('api_key=<REDACTED>&');

      test = '?api_key=baz';
      result = stripApiKey(test);
      result.should.equal('?api_key=<REDACTED>');

      test = '?api_key=bot&';
      result = stripApiKey(test);
      result.should.equal('?api_key=<REDACTED>&');

      test = '?api_key=d29ac70e-8f41-4dd4-b393-c72a72039e9c&';
      result = stripApiKey(test);
      result.should.equal('?api_key=<REDACTED>&');

      test = 'https://foo.bar?api_key=d29ac70e-8f41-4dd4-b393-c72a72039e9c&baz=bot';
      result = stripApiKey(test);
      result.should.equal('https://foo.bar?api_key=<REDACTED>&baz=bot');
    });

    it('should remove only the api key query param', () => {
      // i can iterate through the negative tests because i expect the input to be the output
      negativeTests.forEach((test) => {
        const result = stripApiKey(test);
        result.should.equal(test);
      });
    });
  });

  describe('makeFetch', () => {
    let fetch;

    const {
      championSuccess,
      requestError,
    } = utilsMocks.makeFetch;

    beforeEach(() => {
      fetch = sinon.stub();
      UtilsRewireAPI.__Rewire__('fetch', fetch);
    });

    afterEach(() => {
      UtilsRewireAPI.__ResetDependency__('fetch');
    });

    it('should return the response json on success only route is provided', async (done) => {
      try {
        fetch.withArgs(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${apiKey}`)
          .resolves({
            ok: true,
            json: sinon.stub()
              .resolves(championSuccess),
          });

        const result = await makeFetch('champion');
        result.should.deep.equal(championSuccess);
        done();
      } catch (error) {
        done(error); // no errors should be thrown
      }
    });

    it('should return the response json on success when route and locale are provided', async (done) => {
      try {
        fetch.withArgs(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${apiKey}&locale=en_US`)
          .resolves({
            ok: true,
            json: sinon.stub()
              .resolves(championSuccess),
          });

        const result = await makeFetch('champion', 'en_US');
        result.should.deep.equal(championSuccess);
        done();
      } catch (error) {
        done(error); // no errors should be thrown
      }
    });

    it('should return the response json on success when route, locale, and version are provided', async (done) => {
      try {
        fetch.withArgs(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${apiKey}&locale=en_US&version=5.12.1`)
          .resolves({
            ok: true,
            json: sinon.stub()
              .resolves(championSuccess),
          });

        const result = await makeFetch('champion', 'en_US', '5.12.1');
        result.should.deep.equal(championSuccess);
        done();
      } catch (error) {
        done(error); // no errors should be thrown
      }
    });

    it('should return the response json on success when route, locale, version, and query are provided', async (done) => {
      try {
        fetch.withArgs(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${apiKey}&locale=en_US&version=5.12.1&champData=foo`)
          .resolves({
            ok: true,
            json: sinon.stub()
              .resolves(championSuccess),
          });

        const result = await makeFetch('champion', 'en_US', '5.12.1', 'champData=foo');
        result.should.deep.equal(championSuccess);
        done();
      } catch (error) {
        done(error); // no errors should be thrown
      }
    });

    it('should return the response json on success when route and query are provided', async (done) => {
      try {
        fetch.withArgs(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${apiKey}&champData=foo`)
          .resolves({
            ok: true,
            json: sinon.stub()
              .resolves(championSuccess),
          });

        const result = await makeFetch('champion', null, null, 'champData=foo');
        result.should.deep.equal(championSuccess);
        done();
      } catch (error) {
        done(error); // no errors should be thrown
      }
    });

    it('should throw an error, with stripped API key, if the fetch does', async (done) => {
      let error;

      try {
        fetch.withArgs(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/fail?api_key=${apiKey}`)
          .rejects(new Error('failure :(, api_key=abcd'));

        await makeFetch('fail');
        return done(new Error('makeFetch should have failed.'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.equal('failure :(, api_key=<REDACTED>');
        done();
      } catch (err) {
        done(err);
      }
    });

    it('should throw an error, with stripped API key, if the response does', async (done) => {
      let error;

      try {
        fetch.withArgs(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/fail?api_key=${apiKey}`)
          .resolves({
            ok: false,
            json: sinon.stub()
              .rejects(new Error('failure :(, api_key=abcd')),
          });

        await makeFetch('fail');
        return done(new Error('makeFetch should have failed.'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.equal('failure :(, api_key=<REDACTED>');
        done();
      } catch (err) {
        done(err);
      }
    });

    it('should throw an error, with stripped API key, if the request errors', async (done) => {
      let error;
      try {
        fetch.withArgs(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/fail?api_key=${apiKey}`)
          .resolves({
            ok: false,
            json: sinon.stub()
              .resolves(requestError),
          });

        await makeFetch('fail');
        return done(new Error('makeFetch should have failed.'));
      } catch (err) {
        error = err;
      }

      try {
        error.message.should.equal('Error: request to "https://global.api.pvp.net/api/lol/static-data/na/v1.2/fail?api_key=<REDACTED>" failed with status: "404|Not Found".');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
