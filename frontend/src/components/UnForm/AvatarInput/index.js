import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useField } from '@rocketseat/unform';
import { MdInsertPhoto } from 'react-icons/md';
import api from '~/services/api';

import { Container, AddPhoto, AvatarName } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const { defaultValue: userName } = useField('name');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  const initialsName = useMemo(() => {
    if (!userName) return '';
    const slices = userName.toUpperCase().split(' ');
    const initials = slices.reduce((prev, current) => {
      prev += current.substr(0, 1);
      return prev;
    }, '');
    return initials;
  }, [userName]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const resp = await api.post('files', data);
    const { id, url } = resp.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="" />
        ) : userName ? (
          <AvatarName nameSize={initialsName.length}>{initialsName}</AvatarName>
        ) : (
          <AddPhoto>
            <MdInsertPhoto color="#ddd" size={40} />
            Adicionar Foto
          </AddPhoto>
        )}
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
