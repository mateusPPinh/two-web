import styled from 'styled-components';

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
   transition: transform 0.2s;

   &:hover {
      transform: translateX(1rem);
    }

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 2px solid #333;
    transition: border-radius 0.2s;

    &:hover {
      border-radius: 40%;
    }
  }

  strong {
    margin-left: 1rem;
    color: #333;
  }
}
`;

