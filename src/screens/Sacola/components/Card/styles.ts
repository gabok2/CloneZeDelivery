import styled from "styled-components/native";


export const Background = styled.View`
  background-color: #fff;
  width: 100%;
  padding:3px 20px;
  align-items: center;
  justify-content: center;
  
 
  
`;

export const Container = styled.View`
  
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  
  padding: 10px 0px;
  border-radius: 10px;
  border: 1px solid #efefef;
  border-top-width: 0.5px;
  border-bottom-width: 0.2px;
  border-left-width: 0.2px;
  border-right-width: 0.2px;
  min-height: 128px;
  
  width: 100%;
  
  
  
  
`

export const Imagem = styled.Image`
margin-top: 10px;
  width:110px;
  height: 110px;
  margin-left: 20px;
 

`
export const ContainerRow= styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

`
export const ContainerColumn= styled.View`
  flex-direction: column;
  padding: 8px;
  height: 118px;
 
 width: 206px;
 
  
`
export const Titulo= styled.Text`
  
  font-size: 14px;
  min-width: 166px;
  max-width: 166px;
  
 

 
  color: #999999;
  
`
export const Preço= styled.Text`
  
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  
  
`

export const ContainerButton= styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #efefef;
  max-width: 140px;
  height: 40px;
  padding: 10px;
 
  margin: 8px 0;
  

  
`
export const Quantidade= styled.Text``