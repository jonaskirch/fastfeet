import React from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import Button from '~/components/Button';

import { Container, Header, Title, Row } from './styles';

export default function Query() {
  return (
    <Container>
      <Header>
        <Title>Cadastro de destinatário</Title>
        <div>
          <Button>
            <MdKeyboardArrowLeft color="#FFF" size={18} />
            VOLTAR
          </Button>
          <Button>
            <MdDone color="#FFF" size={18} />
            SALVAR
          </Button>
        </div>
      </Header>
      <form>
        <label>Nome</label>
        <input />
        <Row>
          <div style={{ flex: 1 }}>
            <label>Teste 1</label>
            <input />
          </div>
          <div>
            <label>Teste 2</label>
            <input />
          </div>
          <div>
            <label>Teste 3 </label>
            <input />
          </div>
        </Row>
        <label>Teste</label>
        <input />
      </form>
    </Container>
  );
}
