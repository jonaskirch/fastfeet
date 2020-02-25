import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import Button from '~/components/Button';
import InputSearch from '~/components/InputSearch';
import MenuButton, { MenuItem } from '~/components/MenuButton';

import { Container, Title, Status } from './styles';

export default function Delivery({ history }) {
  function handleRegister() {
    history.push('/delivery');
  }

  return (
    <Container>
      <Title>Gerenciando encomendas</Title>
      <div>
        <InputSearch placeholder="Busca por encomendas" />
        <Button onClick={handleRegister}>
          <MdAdd color="#FFF" size={18} />
          CADASTRAR
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Jonas Kirch</td>
            <td>John Lenon</td>
            <td>Lajeado</td>
            <td>Rio Grande do Sul</td>
            <td>
              <div>
                <Status>ENTREGUE</Status>
              </div>
            </td>
            <td>
              <div>
                <MenuButton>
                  <MenuItem>
                    <MdAdd color="#333" size={18} />
                    <Link to="/recipient">Visualizar</Link>
                  </MenuItem>
                  <MenuItem>
                    <MdAdd color="#333" size={18} />
                    <Link to="/recipient">Editar</Link>
                  </MenuItem>
                  <MenuItem>
                    <MdAdd color="#333" size={18} />
                    <Link to="/recipient">Cancelar encomenda</Link>
                  </MenuItem>
                </MenuButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Jonas Kirch</td>
            <td>John Lenon</td>
            <td>Lajeado</td>
            <td>Rio Grande do Sul</td>
            <td>ENTREGUE</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Jonas Kirch</td>
            <td>John Lenon</td>
            <td>Lajeado</td>
            <td>Rio Grande do Sul</td>
            <td>ENTREGUE</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Jonas Kirch</td>
            <td>John Lenon</td>
            <td>Lajeado</td>
            <td>Rio Grande do Sul</td>
            <td>ENTREGUE</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
