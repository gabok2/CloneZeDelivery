import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
export const Container = styled.View`
  width: 100%;
  height: 100px;
  background-color: #fff;
  margin-top: 15px;
 
`
export const Count= styled.Text`
  font-weight: 600;
`
export const ContainerCount= styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-radius: 10px;
border: 1px solid #dedede;
height: 45px;
padding: 0 10px;

`

export const CountSumNuber= styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-top: 20px;
  

`
export const CountSum6= styled(TouchableOpacity)`
  width: 105px;
  height: 35px;
  border-radius: 7px;
  background-color: #fff;
  border: 1px solid #dedede;
align-items: center;
justify-content: center;



`

export const CountSum6Text= styled.Text`
  font-weight: 600;
`

export const CountSum12= styled(TouchableOpacity)`
  width: 105px;
  height: 35px;
  border-radius: 7px;
  background-color: #fff;
  border: 1px solid #dedede;
align-items: center;
justify-content: center;

`

export const CountSum12Text= styled.Text`
  font-weight: 600;

`

export const CountSum15= styled(TouchableOpacity)`
   width: 105px;
  height: 35px;
  border-radius: 7px;
  background-color: #fff;
  border: 1px solid #dedede;
align-items: center;
justify-content: center;
`

export const CountSum15Text= styled.Text`
  font-weight: 600;
`