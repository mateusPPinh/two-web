import React from "react";

import { Container, SectionContainer, RegisterUser } from './styles';
import HeaderComponent from '../../components/Header';

export default function Main() {
  return (
    <Container>
      <HeaderComponent />

      <SectionContainer>
        <h2>Cadastre aqui seus novos clientes.</h2>
      </SectionContainer>

      <RegisterUser>
        <legend>
          <p>Dados necessários</p>
        </legend>
        <form>
          <h3>Nome completo</h3>
          <input
            type="text"
            placeholder="E-mail"
            autoComplete="false"
          />

          <h3>CPF</h3>
          <input
            type="text"
            placeholder="E-mail"
            autoComplete="false"
          />

          <h3>Telefone</h3>
          <input
            type="text"
            placeholder="E-mail"
            autoComplete="false"
          />
        </form>
      </RegisterUser>
    </Container>
  );
}
