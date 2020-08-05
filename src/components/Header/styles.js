import styled, { keyframes } from 'styled-components';

const userAnimation = keyframes`
  from {
    transform: translateY(2em)
  }

  to {
    transform: translate(0px);
  }
`;

export const Container = styled.div`
  padding: 1rem 1rem;
  align-items: center;
`;

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #333;
    font-size: 1.5rem;
  }

 div {
   align-items: center;
   display: flex;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 2px solid #333;

    &:hover {
      animation: ${userAnimation} 0.2s linear;
    }
  }

  strong {
    margin-left: 1rem;
    color: #333;
  }
}
`;

