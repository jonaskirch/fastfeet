import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAdd, MdEdit, MdDeleteForever } from 'react-icons/md';
import api from '~/services/api';
import Button from '~/components/Button';
import SearchInput from '~/components/SearchInput';
import MenuButton, { MenuItem } from '~/components/MenuButton';
import Avatar from '~/components/Avatar';
import Skeleton from '~/components/Skeleton';
import Pagination from '~/components/Paginator';
import { Container, Title, Toolbar, Footer } from './styles';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function loadDeliverymen() {
      try {
        setLoading(true);
        const resp = await api.get('deliverymen', {
          params: {
            page,
            name: search,
          },
        });
        const { total, records } = resp.data;
        setTotalRecords(total);
        setDeliverymen(records);
      } finally {
        setLoading(false);
      }
    }

    loadDeliverymen();
  }, [page, search]);

  async function handleDelete(deliveryman) {
    if (window.confirm('Deseja realmente excluir este registro?')) {
      try {
        const resp = await api.delete(`/deliverymen/${deliveryman.id}`);
        const { id } = resp.data;
        const newList = deliverymen.filter(d => Number(d.id) !== Number(id));
        setDeliverymen(newList);
      } catch {
        toast.error('Falha ao excluir entregador');
      }
    }
  }

  function renderTable() {
    return (
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
                <Avatar
                  imageURL={deliveryman.avatar && deliveryman.avatar.url}
                  name={deliveryman.name}
                  size={32}
                />
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
    );
  }

  return (
    <Container>
      <Title>Gerenciando entregadores</Title>
      <Toolbar>
        <SearchInput
          placeholder="Busca por entregadores"
          onSearch={newSearch => setSearch(newSearch)}
        />
        <Button onClick={() => history.push('/deliveryman')}>
          <MdAdd color="#FFF" size={18} />
          CADASTRAR
        </Button>
      </Toolbar>
      {loading
        ? Array.from(new Array(20)).map((_, i) => (
            <Skeleton key={i} height="60px" radius="4px" margin="20px 0" />
          ))
        : renderTable()}

      <Footer>
        <Pagination
          activePage={page}
          totalRecords={totalRecords}
          limitPage={20}
          onChange={newPage => setPage(newPage)}
        />
      </Footer>
    </Container>
  );
}
