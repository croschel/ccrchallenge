import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #2851D3;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-right: 10%;
  margin-bottom: 120px;
`;

export const Header = styled.Text`
  font-size: 60px;
  color: #fff;
`;
export const Info = styled.Text`
  padding: 30px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 35px;
  margin: 0 0 30px 0;

`;
export const NextButton = styled(RectButton)`
  background: #22222A;
  padding: 15px 40px;
  border: none;
  border-radius: 20px;
  margin-top: 50px;
`;

export const Inside = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
`;
