import { CaretDown, MapPin, NotePencil } from "phosphor-react-native";
import { Container, Titulo, ContainerTexto, SubTitulo, ContainerMapTexto } from "./styles";
//comando pra gerar apk release
//cd android && ./gradlew assembleRelease
interface HeaderProps {
  backColor?: boolean;
}
export function Header({ backColor }: HeaderProps) {
  return (
    <Container
      style={{
        backgroundColor: backColor ? '#fff' : '#000',
        marginTop: backColor ? 10 : 0,
        height: backColor ? 110 : 60,
      }}

    >

      <ContainerMapTexto>
        <MapPin size={30} color="#666666" />
        <ContainerTexto>
          <Titulo
            style={{
              color: backColor ? '#4d4d4d' : '#fff',

            }}
          >
            Receber agora em
          </Titulo>
          <SubTitulo
            style={{
              color: backColor ? '#696868' : '#E8C013',
            }}
            numberOfLines={1}>Rua Pastor Martin Da Oliveira Silva Souza, 223  </SubTitulo>
        </ContainerTexto>
      </ContainerMapTexto>

      {
        backColor ? <NotePencil size={20} color="#696868" weight="light" /> : <CaretDown size={20} color={'#fff'} />

      }
    </Container>
  )
}