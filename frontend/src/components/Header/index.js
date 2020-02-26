import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logo from '~/assets/logo.png';
import { signOut } from '~/store/modules/auth/actions';
import { Container, MenuItem } from './styles';

const pages = [
  {
    name: 'ENCOMENDAS',
    link: '/deliveries',
  },
  {
    name: 'ENTREGADORES',
    link: '/deliverymen',
  },
  {
    name: 'DESTINATÁRIOS',
    link: '/recipients',
  },
  {
    name: 'PROBLEMAS',
    link: '/problems',
  },
];

export default function Header() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const location = useLocation();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="FastFeet" />
        <nav>
          <ul>
            {pages.map(page => (
              <Link key={page.name} to={page.link}>
                <MenuItem
                  active={
                    location.pathname === page.link ||
                    location.pathname.startsWith(`${page.link}/`)
                  }
                >
                  {page.name}
                </MenuItem>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <aside>
        <span>{user.name}</span>
        <button type="button" onClick={handleSignOut}>
          sair do sistema
        </button>
      </aside>
    </Container>
  );
}
