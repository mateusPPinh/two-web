import React from "react";

import { Container, SectionContainer } from './styles';
import HeaderComponent from '../../components/Header';

export default function Main() {
  return (
    <Container>
      <HeaderComponent />

      <SectionContainer>
        <h2>O que você deseja fazer?</h2>
      </SectionContainer>
    </Container>
  );
}
