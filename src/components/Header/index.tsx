import { CaretDown, MapPin } from "phosphor-react-native";
import { Container, Titulo, ContainerTexto, SubTitulo, ContainerMapTexto } from "./styles";
//comando pra gerar apk release
//cd android && ./gradlew assembleRelease

export function Header() {
  return (
    <Container >

      <ContainerMapTexto>
        <MapPin size={30} color="#666666" />
        <ContainerTexto>
          <Titulo>Receber agora em</Titulo>
          <SubTitulo numberOfLines={1}>Rua Pastor Martin Da Oliveira Silva Souza, 223  </SubTitulo>
        </ContainerTexto>
      </ContainerMapTexto>

      <CaretDown size={20} color="#fff" />

    </Container>
  )
}