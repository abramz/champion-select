import { expect } from 'chai';
import sinon from 'sinon';
import withCdn from '../../../src/containers/withCdn';
import Fixture from '../support/component.fixture';

describe('<withCdn />', () => {
  function setup(state, props) {
    const invoke = sinon.stub().returnsArg(0);
    const connect = sinon.stub().returns(invoke);

    withCdn.__Rewire__('connect', connect);

    const result = withCdn(Fixture);

    expect(result).to.deep.equal(Fixture);

    expect(connect.callCount).to.equal(1);
    expect(invoke.callCount).to.equal(1);

    expect(connect).to.be.calledWithExactly(sinon.match.func);

    const mapStateToProps = connect.getCall(0).args[0];

    withCdn.__ResetDependency__('connect');

    return mapStateToProps(state, props);
  }

  const cdnUrl = '//123.com/1/2/3';
  const tests = [
    {
      title: 'should add no extra props if null is provided',
      props: null,
      expected: { cdnUrl },
    },
    {
      title: 'should add no extra props if an empty object is provided',
      props: {},
      expected: { cdnUrl },
    },
    {
      title: 'should add props if they are provided',
      props: { a: 'b', c: 'd', e: 'f', g: 'h', i: { j: 'k', l: ['m', 'n', 'o'] } },
      expected: { cdnUrl, a: 'b', c: 'd', e: 'f', g: 'h', i: { j: 'k', l: ['m', 'n', 'o'] } },
    },
  ];

  tests.forEach(({ title, props, expected }) => {
    it(title, () => {
      const resultProps = setup({ runtime: { cdnUrl } }, props);

      expect(resultProps).to.deep.equal(expected);
    });
  });
});
