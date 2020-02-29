import React, { useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import { lighten } from 'polished';
import colors from '~/styles/colors';

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    marginBottom: 20,
    height: 30,
  }),
  input: (provided, state) => ({
    ...provided,
    height: 30,
    display: 'flex',
    alignItems: 'center',
  }),
  // singleValue: (provided, state) => ({
  //   ...provided,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? colors.primary
      : state.isFocused
      ? lighten(0.3, colors.primary)
      : null,
  }),
};

export default function Input({ name, label, loadOptions, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'select.state.value.value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <AsyncSelect
        id={fieldName}
        ref={inputRef}
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        styles={customStyles}
        placeholder="Selecione..."
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
}
