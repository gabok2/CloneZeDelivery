import { Container } from "./styles";
import { Dimensions, Image } from "react-native";
const { width } = Dimensions.get('window');


interface OnBoardingItemProps {
  url: string;


}


export function Imagem({ url }: OnBoardingItemProps) {
  return (
    <Container  >
      <Image style={{ width: width, height: 320, backgroundColor: '#fff' }} resizeMode="center" source={{ uri: url }} />

    </Container>
  )

}

