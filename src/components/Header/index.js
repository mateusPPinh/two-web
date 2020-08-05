/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Container, HeaderContent } from "./styles";

export default function Header() {
  return (
    <Container>
      <HeaderContent>
        <h1>DASHBOARD</h1>

        <div>
          <img
            src="https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
          <strong>Oi, Maria.</strong>
        </div>
      </HeaderContent>
    </Container>
  );
}