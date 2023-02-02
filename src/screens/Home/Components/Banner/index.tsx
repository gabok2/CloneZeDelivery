
import { Container, Titulo, Imagem } from "./styles";

import { FlatList } from "react-native";

interface BannerProps {
  id: string;
  imagem: string;
}

interface DateProps {
  banner: BannerProps[];
}

export function Banner({ banner }: DateProps) {

  return (
    <Container>
      <Titulo>DESTAQUES</Titulo>
      <FlatList
        data={banner}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Imagem resizeMode="contain" source={{ uri: item.imagem }} />
        )}
        horizontal
      />

    </Container>
  )
}