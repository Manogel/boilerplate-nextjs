import React from 'react';

import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Logo src="/img/logo.svg" alt="Logo - React Avançado" />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para tela com um código"
      />
    </S.Container>
  );
};

export default Main;
