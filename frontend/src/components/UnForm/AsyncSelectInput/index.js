import React, { useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import colors from '~/styles/colors';

const customStyles = {
  control: provided => ({
    ...provided,
    height: 45,
    marginBottom: 9,
    marginTop: 9,
  }),
  input: provided => ({
    ...provided,
    color: '#999',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#999',
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
      <div>
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
              primary75: colors.primary75,
              primary50: colors.primary50,
              primary25: colors.primary25,
              primary: colors.primary,
            },
          })}
          {...rest}
        />
      </div>

      {error && <span className="error">{error}</span>}
    </>
  );
}
