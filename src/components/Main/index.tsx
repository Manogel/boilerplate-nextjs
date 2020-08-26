import React from 'react';

import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components',
}) => {
  return (
    <S.Container>
      <S.Logo src="/img/logo.svg" alt="Logo - React Avançado" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para tela com um código"
      />
    </S.Container>
  );
};

export default Main;
