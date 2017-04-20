import React, { PropTypes } from 'react';

function LanguagePicker({ currentLocale, availableLocales, setLocale }) {
  const isSelectedLocale = (locale) => locale === currentLocale;

  return (
    <div>
      {availableLocales.map((locale) => {
        const handleClick = (event) => {
          event.preventDefault();
          setLocale(locale);
        };

        return (
          <span key={locale}>
            {
              isSelectedLocale(locale) ?
                <span>{locale}</span> :
                <a href={`?locale=${locale}`} onClick={handleClick}>{locale}</a>
           }
          </span>
        );
      })}
    </div>
  );
}

LanguagePicker.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLocale: PropTypes.func.isRequired,
};

export default LanguagePicker;
