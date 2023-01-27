import styled from "styled-components/native";
import { TouchableOpacity} from "react-native";

export const Container = styled(TouchableOpacity)`
  width: 135px;
  height: 208px;
  border-radius: 10px;
  border: 1px solid #efefef;
  justify-content:center;
  margin: 0 3px;
  padding: 10px;
`
export const Image = styled.Image`
  width:100px;
  height: 100px;
  margin-bottom: 5px;
  `
export const Title = styled.Text`
color: #ACACAC;
`
export const Preço = styled.Text`
font-weight:600;
`
export const Button = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  background-color:  #FFCC00;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
export const ContainerGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  
  flex:1;
`
export const Order = styled.View`
justify-content: center;
height: 40px;
`