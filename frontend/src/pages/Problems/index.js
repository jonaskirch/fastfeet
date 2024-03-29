import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';
import api from '~/services/api';
import MenuButton, { MenuItem } from '~/components/MenuButton';
import Skeleton from '~/components/Skeleton';
import Pagination from '~/components/Paginator';
import Modal from '~/components/Modal';
import EmptyContainer from '~/components/EmptyContainer';

import { Container, Title, Footer, ModalStyle } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState(null);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const [problemView, setProblemView] = useState('');

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
        window.scrollTo(0, 0);
      } finally {
        setLoading(false);
      }
    }

    loadProblems();
  }, [page]);

  async function handleCancel(problemId) {
    if (window.confirm('Deseja realmente cancelar e encomenda?')) {
      try {
        await api.post(`problem/${problemId}/canceldelivery`);
        const newList = problems.filter(
          p => Number(p.id) !== Number(problemId)
        );
        setProblems(newList);
      } catch {
        toast.error('Falha ao cancelar encomenda');
      }
    }
  }

  function renderTable() {
    if (!problems) return null;
    if (problems.length === 0) return <EmptyContainer />;

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
                      <button
                        type="button"
                        onClick={() => setProblemView(problem.description)}
                      >
                        <MdRemoveRedEye color="#666" size={18} />
                        Visualizar
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        type="button"
                        onClick={() => handleCancel(problem.id)}
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
    <>
      <Container>
        <Title>Problemas na entrega</Title>
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
      {problemView && (
        <Modal onCloseRequest={() => setProblemView('')}>
          <ModalStyle>
            <span>VISUALZIAR PROBLEMA</span>
            <p>{problemView}</p>
          </ModalStyle>
        </Modal>
      )}
    </>
  );
}
