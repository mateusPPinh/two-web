import React from "react";

import { Container, SectionTitle } from './styles';

import HeaderComponent from '../../components/Header';

export default function Main() {
  return (
    <Container>
      <HeaderComponent />

      <SectionTitle>
        O que você deseja fazer, Maria?
      </SectionTitle>
    </Container>
  );
}
