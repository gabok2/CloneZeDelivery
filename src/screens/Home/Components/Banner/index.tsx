import { useEffect, useState } from "react";
import { Container, Titulo, Imagem } from "./styles";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native";

interface BannerProps {
  id: string;
  imagem: string;
}

interface LoadingProps {

  handleLoading: (isLoading: boolean) => void;
}

export function Banner({ handleLoading }: LoadingProps) {
  const [banner, setBanner] = useState<BannerProps[]>([]);

  useEffect(() => {
    firestore()
      .collection('banner')

      .get()
      .then(response => {
        handleLoading(false)
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as BannerProps[];
        setBanner(data)
      });
  }, []);

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