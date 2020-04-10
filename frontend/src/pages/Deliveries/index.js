import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import {
  MdAdd,
  MdRemoveRedEye,
  MdEdit,
  MdDeleteForever,
  MdFilterList,
} from 'react-icons/md';
import api from '~/services/api';
import Button from '~/components/Button';
import SearchInput from '~/components/SearchInput';
import MenuButton, { MenuItem } from '~/components/MenuButton';
import Avatar from '~/components/Avatar';
import Skeleton from '~/components/Skeleton';
import Pagination from '~/components/Paginator';
import Modal from '~/components/Modal';
import EmptyContainer from '~/components/EmptyContainer';

import {
  Container,
  Title,
  Toolbar,
  Footer,
  Deliveryman,
  Status,
  FilterButton,
  ModalStyle,
} from './styles';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [deliveryView, setDeliveryView] = useState(null);

  useEffect(() => {
    async function loadDeliveries() {
      try {
        setLoading(true);
        const resp = await api.get('deliveries', {
          params: {
            page,
            product: search,
            onlyproblems: filter,
          },
        });
        const { total, records } = resp.data;
        setTotalRecords(total);
        setDeliveries(records);
        window.scrollTo(0, 0);
      } finally {
        setLoading(false);
      }
    }

    loadDeliveries();
  }, [page, search, filter]);

  async function handleDelete(deliveryId) {
    if (window.confirm('Deseja realmente excluir este registro?')) {
      try {
        const resp = await api.delete(`/deliveryies/${deliveryId}`);
        const { id } = resp.data;
        const newList = deliveries.filter(d => Number(d.id) !== Number(id));
        setDeliveries(newList);
      } catch {
        toast.error('Falha ao excluir encomenda');
      }
    }
  }

  function renderTable() {
    if (!deliveries) return null;
    if (deliveries.length === 0) return <EmptyContainer />;

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
                    size={32}
                    imageURL={
                      delivery.deliveryman.avatar &&
                      delivery.deliveryman.avatar.url
                    }
                    name={delivery.deliveryman.name}
                  />
                  <p>{delivery.deliveryman.name}</p>
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
                      <button
                        type="button"
                        onClick={() => setDeliveryView(delivery)}
                      >
                        <MdRemoveRedEye color="#666" size={18} />
                        Visualizar
                      </button>
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
                        onClick={() => handleDelete(delivery.id)}
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
    <>
      <Container>
        <Title>Gerenciando encomendas</Title>
        <Toolbar>
          <SearchInput
            placeholder="Busca por encomendas"
            onSearch={newSearch => setSearch(newSearch)}
          />
          <FilterButton active={filter} onClick={() => setFilter(!filter)}>
            <MdFilterList size={18} />
            {filter
              ? 'Desabilitar filtro de entregas com problemas'
              : 'Filtrar entregas com problemas'}
          </FilterButton>
          <Button onClick={() => history.push('/delivery')}>
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
      {deliveryView && (
        <Modal onCloseRequest={() => setDeliveryView(null)}>
          <ModalStyle>
            <span>Informações da encomenda</span>
            <p>
              {deliveryView.recipient.street}
              {deliveryView.recipient.number &&
                ` ,${deliveryView.recipient.number}`}
              {deliveryView.recipient.complement &&
                ` -${deliveryView.recipient.complement}`}
            </p>
            <p>{`${deliveryView.recipient.city} - ${deliveryView.recipient.state}`}</p>
            <p>{deliveryView.recipient.zipcode}</p>
            <hr />
            <span>Datas</span>
            <p>
              <strong>Retirada:</strong>
              {deliveryView.start_date &&
                format(
                  utcToZonedTime(parseISO(deliveryView.start_date), timezone),
                  'dd/MM/yyyy'
                )}
            </p>
            <p>
              <strong>Entrega:</strong>
              {deliveryView.end_date &&
                format(
                  utcToZonedTime(parseISO(deliveryView.end_date), timezone),
                  'dd/MM/yyyy'
                )}
            </p>
            {deliveryView.signature && (
              <>
                <hr />
                <span>Assinatura do destinatário</span>
                <img
                  src={deliveryView.signature && deliveryView.signature.url}
                  alt="assinatura"
                />
              </>
            )}
          </ModalStyle>
        </Modal>
      )}
    </>
  );
}
