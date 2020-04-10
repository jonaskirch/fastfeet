import React, { useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import { lighten } from 'polished';
import colors from '~/styles/colors';

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    marginTop: 9,
    marginBottom: 20,
    height: 35,
  }),
  input: (provided, state) => ({
    ...provided,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    color: '#999',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999',
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? colors.primary
      : state.isFocused
      ? lighten(0.3, colors.primary)
      : null,
    color: state.isSelected ? '#FFF' : state.isFocused ? '#444' : '#999',
  }),
};

export default function Input({ name, label, ...rest }) {
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
        // cacheOptions
        defaultOptions
        styles={customStyles}
        placeholder="Selecione..."
        noOptionsMessage={() => 'Sem opções disponíveis'}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary75: colors.primary,
            primary50: colors.primary,
            primary25: colors.primary,
            primary: colors.primary,
          },
        })}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
}
