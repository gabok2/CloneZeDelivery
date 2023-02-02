import styled from "styled-components/native";

export const Container = styled.View`
 flex: 1;
  background-color: #fff;
  align-items: center;
  
  
`;

export const Input = styled.View`
  width: 328px;
  height: 40px;
  border: 1px solid #c1c1c1;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  justify-content: space-between;

`;

export const Texto = styled.Text`
  margin-left: 20px;
  color: #999999;
  font-size: 14px;
  min-width: 166px;
  max-width: 166px;
`;

export const Preço = styled.Text`
  margin-left: 20px;
  font-size: 15px;
  color: #333333;
  font-weight:500;
  
`

export const ContainerFlatlist = styled.View`
  
  
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #efefef;
  margin: 10px 0px;
  min-height: 120px;

  width: 328px;

`

export const Imagem= styled.Image`
  
  width:110px;
  height: 110px;

`

export const Button = styled.TouchableOpacity`
  width: 38px;
  height: 38px;
  background-color:  #FFCC00;
  border-radius: 999px;
  justify-content: center;
  align-items: center;

`

export const ContainerRow= styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;

`

export const ContainerColumn= styled.View`
  flex-direction: column;
  justify-content: space-between;
 
  width: 206px;
  height: 110px;
 
  
  

`
export const GroupRow= styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 

`

export const ContainerCategorias= styled.View`
margin: 5px 5px;
padding: 8px;
 min-width: 160px;
 max-width: 160px;
  min-height: 45px;
  max-height: 45px;
  border-radius: 10px;
  border: 1px solid #efefef;
  flex-direction: row;
  
  align-items: center;
`
export const ContainerCategoria= styled.View`
  margin-top: 30px;
`

  export const ImagemCategorias= styled.Image`
    width: 30px;
    height: 30px;
    margin-right: 10px;
  `

  export const TextoCategorias= styled.Text`
    color: #999999;
  `

  
