import React from 'react';
import { View, Text } from 'react-native';

import truck from '~/assets/truck.png';
import { Container, Content, Logo, Header, Info, NextButton, Inside } from './styles';

const Home = () => {
  return (
    <Container>
      <Content>
        <Logo source={truck} />
        <Header>Bem-vindo</Header>
        <Info>
          Estamos aqui para te ajudar a fazer o que
          você mais ama com segurança, saúde e diversão!
        </Info>
        <NextButton><Inside>Próximo</Inside></NextButton>
      </Content>
    </Container>
  );
}

export default Home;