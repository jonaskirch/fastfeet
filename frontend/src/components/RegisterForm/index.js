import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import Button from '~/components/Button';

import { Container, Form, Header, Title, Toolbar, FormContent } from './styles';

export default function RegisterForm({
  title,
  initialData,
  schema,
  onSubmit,
  onBack,
  children,
}) {
  if (!initialData) return null;

  return (
    <Container>
      <Form schema={schema} initialData={initialData} onSubmit={onSubmit}>
        <Header>
          <Title>{title}</Title>
          <Toolbar>
            <Button type="submit">
              <MdDone color="#FFF" size={18} />
              SALVAR
            </Button>
            <Button onClick={onBack}>
              <MdKeyboardArrowLeft color="#FFF" size={18} />
              VOLTAR
            </Button>
          </Toolbar>
        </Header>
        <FormContent>{children}</FormContent>
      </Form>
    </Container>
  );
}

RegisterForm.propTypes = {
  title: PropTypes.string.isRequired,
  initialData: PropTypes.shape({}).isRequired,
  schema: PropTypes.instanceOf(Yup.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
