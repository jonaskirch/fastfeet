import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAdd, MdEdit, MdDeleteForever } from 'react-icons/md';
import api from '~/services/api';
import Button from '~/components/Button';
import InputSearch from '~/components/InputSearch';
import MenuButton, { MenuItem } from '~/components/MenuButton';
import { Container, Title, Avatar } from './styles';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [search, setSearch] = useState('');
  const history = useHistory();

  useEffect(() => {
    async function loadDeliverymen() {
      const resp = await api.get(
        search ? `deliverymen?name=${search}` : 'deliverymen'
      );
      setDeliverymen(resp.data);
    }

    loadDeliverymen();
  }, [search]);

  function handleRegister() {
    history.push('/deliveryman');
  }

  async function handleDelete(deliveryman) {
    try {
      const resp = await api.delete(`/deliverymen/${deliveryman.id}`);
      const { id } = resp.data;
      const newList = deliverymen.filter(d => Number(d.id) !== Number(id));
      setDeliverymen(newList);
    } catch {
      toast.error('Falha ao excluir entregador');
    }
  }

  function handleSearch(newSearch) {
    setSearch(newSearch);
  }

  return (
    <Container>
      {console.tron.log('render')}
      <Title>Gerenciando entregadores</Title>
      <div>
        <InputSearch
          placeholder="Busca por entregadores"
          onSearch={handleSearch}
        />
        <Button onClick={handleRegister}>
          <MdAdd color="#FFF" size={18} />
          CADASTRAR
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map(deliveryman => (
            <tr key={deliveryman.id}>
              <td>{deliveryman.id}</td>
              <td>
                <Avatar />
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <div>
                  <MenuButton>
                    <MenuItem>
                      <Link to={`/deliveryman/${deliveryman.id}`}>
                        <MdEdit color="#4D85EE" size={18} />
                        Editar
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button
                        type="button"
                        onClick={() => handleDelete(deliveryman)}
                      >
                        <MdDeleteForever color="#DE3B3B" size={18} />
                        Excluir
                      </button>
                    </MenuItem>
                  </MenuButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}