import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

interface ContainerProps {
  center?: boolean;
  font?: boolean;
}


          

export const Container = styled(TouchableOpacity)<ContainerProps>`
  margin-top: 30px;
  background-color: #FFCC00;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.center ? 'center' : 'space-between')};
  padding: 0 15px;
`

export const Titulo= styled.Text<ContainerProps>`
  font-weight: 600;
  font-size: ${(props) => (props.font ? '18px' : '15px')};
`
export const Preço= styled.Text`
   font-weight: 600;
`