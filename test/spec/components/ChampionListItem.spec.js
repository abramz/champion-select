import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { images } from '../../../src/constants';
import { UnstyledChampionListItem } from '../../../src/components/ChampionListItem';
import Link from '../../../src/components/Link';
import champion from '../support/champion';

describe('<ChampionListItem />', () => {
  let wrapper;
  const version = '1.1.1';

  beforeEach(() => {
    wrapper = shallow(<UnstyledChampionListItem champion={champion} version={version} />);
    expect(wrapper).to.have.exactly(2).descendants(Link);
  });

  it('should display an image of the champion', () => {
    const ref = wrapper.find(Link).first();
    expect(ref).to.have.prop('to', '/champion/A');
    expect(ref).to.have.exactly(1).descendants('img');

    const imgRef = ref.find('img');
    expect(imgRef).to.have.prop('src', `${images.baseUrl}/1.1.1/img/group/A.png`);
    expect(imgRef).to.have.prop('alt', 'Abcd');
    expect(imgRef).to.have.prop('role', 'presentation');
  });

  it('should display the name of the champion', () => {
    const nameRef = wrapper.find(Link).last();
    expect(nameRef).to.have.prop('to', '/champion/A');
    expect(nameRef).to.have.prop('children', 'Abcd');
  });
});
