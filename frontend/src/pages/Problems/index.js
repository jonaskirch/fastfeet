import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';
import api from '~/services/api';
import MenuButton, { MenuItem } from '~/components/MenuButton';
import Skeleton from '~/components/Skeleton';
import Pagination from '~/components/Paginator';
import { Container, Title, Footer } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProblems() {
      try {
        setLoading(true);
        const resp = await api.get('deliveries/problems', {
          params: {
            page,
          },
        });
        const { total, records } = resp.data;
        setTotalRecords(total);
        setProblems(records);
      } finally {
        setLoading(false);
      }
    }

    loadProblems();
  }, [page]);

  async function handleCancel(deliveryId) {
    if (window.confirm('Deseja realmente cancelar e encomenda?')) {
      try {
        const resp = await api.post(`problem/${deliveryId}/canceldelivery`);
        // const { id } = resp.data;
        // const newList = problems.filter(d => Number(d.id) !== Number(id));
        // setProblems(newList);
      } catch {
        toast.error('Falha ao cancelar encomenda');
      }
    }
  }

  function renderTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map(problem => (
            <tr key={problem.id}>
              <td>{problem.delivery_id}</td>
              <td>{problem.description}</td>
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
                      <button
                        type="button"
                        onClick={() => handleCancel(problem.delivery_id)}
                      >
                        <MdDeleteForever color="#DE3B3B" size={18} />
                        Cancelar encomenda
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
      <Title>Problemas na entrega</Title>
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
