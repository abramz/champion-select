import { expect } from 'chai';
import {
  mapStateToProps,
  mergeProps,
} from '../../../src/containers/CdnImage';

describe('<CdnImage />', () => {
  describe('mapStateToProps', () => {
    [
      {
        test: 'should return `src` url when `withVersion` is true',
        state: {
          runtime: {
            cdnUrl: 'http://test.url.io/test/path',
            versions: { testGroup: 'v1.2.3' },
          },
        },
        ownProps: {
          group: 'testGroup',
          image: 'testImage.jpg',
          withVersion: true,
        },
        expected: 'http://test.url.io/test/path/v1.2.3/img/testGroup/testImage.jpg',
      },
      {
        test: 'should return `src` url when `withVersion` is false',
        state: {
          runtime: {
            cdnUrl: 'http://test.url.io/test/path',
            versions: { testGroup: 'v1.2.3' },
          },
        },
        ownProps: {
          group: 'testGroup',
          image: 'extra/path/testImage.jpg',
          withVersion: false,
        },
        expected: 'http://test.url.io/test/path/img/testGroup/extra/path/testImage.jpg',
      },
      {
        test: 'should return `src` url when `withVersion` is not provided',
        state: {
          runtime: {
            cdnUrl: 'http://test.url.io/test/path',
            versions: { testGroup: 'v1.2.3' },
          },
        },
        ownProps: {
          group: 'testGroup',
          image: 'testImage.jpg',
        },
        expected: 'http://test.url.io/test/path/img/testGroup/testImage.jpg',
      },
    ].forEach(({ test, state, ownProps, expected }) => {
      it(test, () => {
        const actual = mapStateToProps(state, ownProps);

        expect(actual).to.haveOwnProperty('src');
        expect(actual.src).to.equal(expected);
      });
    });
  });

  describe('mergeProps', () => {
    const src = '//123.com/1/2/3';
    [
      {
        test: 'should add no extra props if no props are provided',
        ownProps: {},
        expected: { src },
      },
      {
        test: 'should add no extra props if no extra props are provided',
        ownProps: { group: 'foo', image: 'bar' },
        expected: { src },
      },
      {
        test: 'should add props if they are provided',
        ownProps: { group: 'foo', image: 'bar', withVersion: true, a: 'b', c: 'd', e: 'f', g: 'h', i: { j: 'k', l: ['m', 'n', 'o'] } },
        expected: { src, a: 'b', c: 'd', e: 'f', g: 'h', i: { j: 'k', l: ['m', 'n', 'o'] } },
      },
    ].forEach(({ test, ownProps, expected }) => {
      it(test, () => {
        const actual = mergeProps({ src }, null, ownProps);

        expect(actual).to.deep.equal(expected);
      });
    });
  });
});
