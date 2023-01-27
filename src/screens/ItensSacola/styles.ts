import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    flex: 1;
  background-color: #fff;
  align-items: center;
  padding: 24px;
  justify-content: center;
  align-items: center;
  
  
  
`

export const Imagem = styled.Image`
  width: 100%;
  height: 260px;

`

export const Titulo= styled.Text`
  font-size:14px;
  color: #818181;
  font-weight: 500;
`
export const Total= styled.Text`
  margin-top: 8px;
  color: #818181;
  font-weight: 500;
`

export const ButtonHome = styled(TouchableOpacity)``

export const Voltar =  styled.Text`
font-size: 15px;
  margin-top: 30px;
  color: #F1A332;
  font-weight: 500;
`