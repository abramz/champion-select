import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import LanguagePicker from '../../../src/components/LanguagePicker';
import locales from '../support/locales';

describe('<LanguagePicker />', () => {
  let setLocaleSpy;
  function setup(currentLocale, availableLocales) {
    setLocaleSpy = sinon.spy();

    return shallow(
      <LanguagePicker
        currentLocale={currentLocale}
        availableLocales={availableLocales}
        setLocale={setLocaleSpy}
      />
    );
  }

  it('should render all of the available locales', () => {
    const wrapper = setup('en_US', locales);

    expect(wrapper.children().length).to.equal(locales.length);
    // locales.length + 1 because we have 1 `span` for each locale plus a `span` for the current locale
    expect(wrapper).to.have.exactly(locales.length + 1).descendants('span');
    // locales.length - 1 because the current locale is rendered with a `span` not an `a`
    expect(wrapper).to.have.exactly(locales.length - 1).descendants('a');
  });

  it('should render an empty div if there are no available locales', () => {
    const wrapper = setup('en_US', []);

    expect(wrapper.children().length).to.equal(0);
  });

  locales.forEach((locale, index) => {
    const isCurrentLocale = locale === 'en_US';
    const tag = isCurrentLocale ? 'span' : 'a';
    const count = isCurrentLocale ? 2 : 1; // span wrappin a span if it is current
    it(`should render ${locale} with ${isCurrentLocale ? 'a' : 'an'} \`${tag}\` tag`, () => {
      const wrapper = setup('en_US', locales);
      const childRef = wrapper.childAt(index);

      expect(childRef).to.have.text(locale);
      expect(childRef).to.have.exactly(count).descendants(tag);

      if (!isCurrentLocale) {
        expect(childRef.find(tag)).to.have.prop('href', `?locale=${locale}`);
      }
    });
  });

  describe('#onClick()', () => {
    let preventDefaultSpy;

    beforeEach(() => {
      preventDefaultSpy = sinon.spy();
    });

    it('should prevent the default action and call setLocale when a languae is picked', () => {
      const wrapper = setup('en_US', ['es_ES']);
      wrapper.find('a').simulate('click', { preventDefault: preventDefaultSpy });

      expect(setLocaleSpy).to.have.been.calledWith('es_ES');
      expect(preventDefaultSpy).to.have.been.calledOnce;
    });
  });
});
