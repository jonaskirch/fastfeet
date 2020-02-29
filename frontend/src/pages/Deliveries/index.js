import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAdd, MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';
import api from '~/services/api';
import Button from '~/components/Button';
import SearchInput from '~/components/SearchInput';
import MenuButton, { MenuItem } from '~/components/MenuButton';
import Skeleton from '~/components/Skeleton';
import Pagination from '~/components/Paginator';
import {
  Container,
  Title,
  Toolbar,
  Footer,
  Deliveryman,
  Avatar,
  Status,
} from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function loadDeliveries() {
      try {
        setLoading(true);
        const resp = await api.get('deliveries', {
          params: {
            page,
            name: search,
          },
        });
        const { total, records } = resp.data;
        setTotalRecords(total);
        setDeliveries(records);
      } finally {
        setLoading(false);
      }
    }

    loadDeliveries();
  }, [page, search]);

  async function handleDelete(delivery) {
    if (window.confirm('Deseja realmente excluir este registro?')) {
      try {
        const resp = await api.delete(`/deliveryies/${delivery.id}`);
        const { id } = resp.data;
        const newList = delivery.filter(d => Number(d.id) !== Number(id));
        setDeliveries(newList);
      } catch {
        toast.error('Falha ao excluir encomenda');
      }
    }
  }

  function renderTable() {
    return (
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
          {deliveries.map(delivery => (
            <tr key={delivery.id}>
              <td>{delivery.id}</td>
              <td>{delivery.recipient.name}</td>
              <td>
                <Deliveryman>
                  <Avatar
                    src={
                      delivery.deliveryman.avatar &&
                      delivery.deliveryman.avatar.url
                    }
                  />
                  {delivery.deliveryman.name}
                </Deliveryman>
              </td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>
                <Status status={delivery.status}>{delivery.status}</Status>
              </td>
              <td>
                <div>
                  <MenuButton>
                    <MenuItem>
                      <Link to="/">
                        <MdRemoveRedEye color="#666" size={18} />
                        Visualizar
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to={`/delivery/${delivery.id}`}>
                        <MdEdit color="#4D85EE" size={18} />
                        Editar
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button
                        type="button"
                        onClick={() => handleDelete(delivery)}
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
      <Title>Gerenciando encomendas</Title>
      <Toolbar>
        <SearchInput
          placeholder="Busca por encomendas"
          onSearch={newSearch => setSearch(newSearch)}
        />
        <Button onClick={() => history.push('/delivery')}>
          <MdAdd color="#FFF" size={18} />
          CADASTRAR
        </Button>
      </Toolbar>
      {loading
        ? Array.from(new Array(20)).map((_, i) => (
            <Skeleton key={i} height="80px" radius="5px" margin="20px 0" />
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
