import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ChampionList from '../../../src/components/ChampionList';

describe('ChampionList', () => {
  let insertCss;

  function setup(champions, version) {
    insertCss = sinon.spy();
    const context = { insertCss };

    return shallow(<ChampionList champions={champions} version={version} />, { context });
  }

  it('should render', () => {
    const champion = {
      key: 'key str',
      name: 'name str',
      image: {
        group: 'group str',
        full: 'full.png',
      },
    };
    const version = '1.1.1';

    const component = setup([champion], version);

    (() => component.html()).should.not.throw();
    insertCss.should.have.been.called;
  });
});
