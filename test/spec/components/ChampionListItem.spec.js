import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { images } from '../../../src/config';
import { UnstyledChampionListItem } from '../../../src/components/ChampionListItem';
import Link from '../../../src/components/Link';

describe('ChampionListItem', () => {
  let wrapper;
  const champion = {
    key: 'key str',
    name: 'name str',
    image: {
      group: 'group str',
      full: 'full.png',
    },
  };
  const version = '1.1.1';

  beforeEach(() => {
    wrapper = shallow(<UnstyledChampionListItem champion={champion} version={version} />);
    expect(wrapper).to.have.exactly(2).descendants(Link);
  });

  it('should display an image of the champion', () => {
    const ref = wrapper.find(Link).first();
    expect(ref).to.have.prop('to', '/champion/key str');
    expect(ref).to.have.exactly(1).descendants('img');

    const imgRef = ref.find('img');
    expect(imgRef).to.have.prop('src', `${images.baseUrl}/1.1.1/img/group str/full.png`);
    expect(imgRef).to.have.prop('alt', 'name str');
    expect(imgRef).to.have.prop('role', 'presentation');
  });

  it('should display the name of the champion', () => {
    expect(wrapper.find(Link).last()).to.have.prop('to', '/champion/key str');
  });
});
