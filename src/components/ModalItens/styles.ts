import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";

export const ContainerModal = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  
`;

export const Titulo = styled.Text`
  
  margin-bottom: 10px;
  font-size: 16px;
  color: #333333;
  font-weight: 500;
  
`;

export const Sacola = styled.Text`
  margin-bottom: 10px;
  font-size: 15px;
  color: #999999;
  font-weight: 500;
`

export const Informação = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  color: #999999;
  font-weight: 500;
  margin-bottom:20px;
`

export const Test = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`

export const Icon = styled(TouchableOpacity)`

`;


export const CorContainerModal = styled.View`
  padding: 20px;
  align-items: center;
  
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #fff;
  height:37%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export const ContainerRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content:flex-end;

  
  

  
`

