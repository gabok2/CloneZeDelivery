import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #FAFAFA;
  
  
`;

export const AddItens = styled.TouchableOpacity`
  background-color: #fff;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
 
`

export const Texto = styled.Text`
  color: #666666;
  font-size: 14px;
  
  margin-bottom: 10px;
`

export const ContainerBackground = styled.View`
   background-color: #fff;
  width: 100%;
  padding:0  20px;
  align-items: center;
  justify-content: center;
`

export const ContainerGelado= styled.View`
  margin-top: 20px;
    width: 100%;
  height:50px;
  border-radius: 8px;
  background-color: #DEF0FE;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`
export const TextoGelado= styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #000;
`

export const Cupom = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  margin-top: 10px;
  background-color: #fff;
  padding: 30px 30px;
  
  
`

export const TextoCupom = styled.Text`
   color: #bdbdbd;
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
`

export const Cashback= styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  margin-top: 10px;
  background-color: #fff;
  padding: 30px 30px;
  align-items: center;
`

export const Comentarios= styled.View`
  width: 100%;
  height: 200px;
  
  margin-top: 10px;
  background-color: #fff;
  padding: 30px 30px;
  
`

export const TextoComentário= styled.Text`
  color: #bdbdbd;
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
`

export const InputComentario= styled.TextInput`
margin-top: 10px;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #cdcdcd;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
`

export const ContainerInfo= styled.View`
  flex-direction: row;
`

export const ContainerTexto= styled.View`
  flex-direction: column;
  margin-left: 10px;
`

export const ContainerRow= styled.View`
  flex-direction: row;
`

export const TextoCashback= styled.Text`
  color: #4d4d4d;
  font-size: 16px;
  font-weight: 600;
`

export const SubTextoCashback= styled.Text`
  color: #fff;
  height: 20px;
  
`

export const BackgroundCashback= styled.View`
margin-left: 10px;
  background-color: #34CD7C;
  width: 42px;
  height: 100%;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

export const SubTitulo= styled.Text`
  color: #4d4d4d;
  font-size: 14px;
  font-weight: 600;

`
export const TotalPagamento= styled.View`
  width: 100%;
  min-height: 220px;
  margin-top: 10px;
  background-color: #fff;
  padding: 30px 30px;
`
export const TextoProdutos= styled.Text`
  color: #666666;;
  
  font-size: 14px;
`
export const TextoTotalProdutos= styled.Text`
   color: #666666;
  font-size: 14px;

`

export const ContainerQuantidadeProdutos= styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 100%;
`
export const ContainerFrete= styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
`

export const TextoFrete= styled.Text`
      color: #666666;
 
  font-size: 14px;
`
export const TextoValorFrete= styled.Text`
     color: #666666;
  
  font-size: 14px;
`
export const Circulo= styled.View`
  
  border-radius: 999px;
  background-color: #989898;
  align-items: center;
  padding:0 5px;
 
`

export const Interrogação= styled.Text`
  color: #fff;
  font-size: 12px;
`

export const Total= styled.View`
   flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 100%;
`

export const TextoTotal= styled.Text`
    color: #666666;
    font-weight: 600;
  font-size: 14px;
`

export const TextoValorTotal= styled.Text`
    color: #000;
  font-weight: 500;
  font-size: 17px;
`

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #FFCC00;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TextoButton= styled.Text`
font-weight: 500;
font-size: 15px;

`
export const TextoInformativo= styled.Text`
margin-top: 10px;
  color: #4d4d4d;
  font-size: 15px;
  font-weight: 400;
 
`

export const ContainerSacolaVazia= styled.View`
flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`
export const Imagem= styled.Image`
  width: 100%;
  height: 260px;
`

export const TextoSacolaVazia= styled.Text`
  color: #999999;
  font-size: 16px;
`
export const SubTextoSacolaVazia= styled.Text`
   color: #999999;
  font-size: 16px;
`