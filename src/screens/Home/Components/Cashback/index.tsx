import {
  Container, Imagem,
  ContainerCashback,
  TitleCashback,
  ContainerSubTitle,
  Saldo,
  SubTitle,
} from "./styles";


export function Cashback() {
  return (
    <Container>
      <Imagem source={require('../../../../assets/cashback.jpg')} />
      <ContainerCashback>
        <TitleCashback>Cashback</TitleCashback>
        <ContainerSubTitle>
          <Saldo>
            Saldo: R$ 0,00
          </Saldo>
          <SubTitle>
            Saiba mais
          </SubTitle>
        </ContainerSubTitle>
      </ContainerCashback>
    </Container>
  );
}