import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAdd, MdEdit, MdDeleteForever } from 'react-icons/md';
import api from '~/services/api';
import Button from '~/components/Button';
import SearchInput from '~/components/SearchInput';
import MenuButton, { MenuItem } from '~/components/MenuButton';
import Skeleton from '~/components/Skeleton';
import Pagination from '~/components/Paginator';
import { Container, Title, Toolbar, Footer } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function loadRecipients() {
      try {
        setLoading(true);
        const resp = await api.get('recipients', {
          params: {
            page,
            name: search,
          },
        });
        const { total, records } = resp.data;
        setTotalRecords(total);
        setRecipients(records);
      } finally {
        setLoading(false);
      }
    }

    loadRecipients();
  }, [page, search]);

  async function handleDelete(recipient) {
    if (window.confirm('Deseja realmente excluir este registro?')) {
      try {
        const resp = await api.delete(`/deliverymen/${recipient.id}`);
        const { id } = resp.data;
        const newList = recipient.filter(d => Number(d.id) !== Number(id));
        setRecipients(newList);
      } catch {
        toast.error('Falha ao excluir destinatário');
      }
    }
  }

  function renderTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map(recipient => (
            <tr key={recipient.id}>
              <td>{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>{recipient.street}</td>
              <td>
                <div>
                  <MenuButton>
                    <MenuItem>
                      <Link to={`/recipient/${recipient.id}`}>
                        <MdEdit color="#4D85EE" size={18} />
                        Editar
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button
                        type="button"
                        onClick={() => handleDelete(recipient)}
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
      <Title>Gerenciando destinatários</Title>
      <Toolbar>
        <SearchInput
          placeholder="Busca por destinatários"
          onSearch={newSearch => setSearch(newSearch)}
        />
        <Button onClick={() => history.push('/recipient')}>
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
