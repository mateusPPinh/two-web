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
          <input
            type="text"
            placeholder="Nome completo"
            autoComplete="false"
          />

          <input
            type="email"
            placeholder="Melhor e-mail"
            autoComplete="false"
          />

          <div className="field_group">
            <input
              type="number"
              placeholder="CPF"
              autoComplete="false"
            />

            <input
              type="number"
              placeholder="Telefone"
              autoComplete="false"
            />

            <input
              type="number"
              placeholder="CEP"
              autoComplete="false"
            />
          </div>
        </form>
      </RegisterUser>
    </Container>
  );
}
