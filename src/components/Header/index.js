import React from 'react';

import { Container, HeaderContent } from "./styles";

export default function Header() {
  return (
    <Container>
      <HeaderContent>
        <img
          src="https://api.adorable.io/avatars/100/abott@adorable.png"
          alt="Provisory Logo"
        />

        <div>
          <img
            className="user_profile"
            src="https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="Admin Picture"
          />
          <strong>Oi, Maria.</strong>
        </div>
      </HeaderContent>
    </Container>
  );
}