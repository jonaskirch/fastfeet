import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdInsertPhoto } from 'react-icons/md';
import Avatar from '~/components/Avatar';
import api from '~/services/api';

import { Container, AddPhoto } from './styles';

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

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const resp = await api.post('files', data);
    const { id, url } = resp.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container avatarExists={preview || userName}>
      <label htmlFor="avatar">
        {preview || userName ? (
          <Avatar size={148} imageUri={preview} name={userName} />
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
