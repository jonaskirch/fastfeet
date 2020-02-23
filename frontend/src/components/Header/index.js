import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '~/assets/logo.png';
import { Container, MenuItem } from './styles';

const pages = [
  {
    name: 'ENCOMENDAS',
    link: '/delivery',
  },
  {
    name: 'ENTREGADORES',
    link: '/deliveryman',
  },
  {
    name: 'DESTINATÁRIOS',
    link: '/recipient',
  },
  {
    name: 'PROBLEMAS',
    link: '/problem',
  },
];

export default function Header() {
  const location = useLocation();

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
        <span>Nome do usuário</span>
        <Link to="/delivery">sair do sistema</Link>
      </aside>
    </Container>
  );
}
