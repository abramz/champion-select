import React, { PropTypes } from 'react';

export function Checkbox({ checked, className, filter, onChange }) {
  const id = `checkbox-tag-${filter}`;

  return (
    <div className={className}>
      <input id={id} name={id} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={id}>{`  ${filter}`}</label>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
