import { Container, ContainerFlatlist, Titulo } from "./styles";
import { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";

interface VinhosProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;


}

interface LoadingProps {

  handleLoading: (isLoading: boolean) => void;
}

export function Vinhos({ handleLoading }: LoadingProps) {
  const [vinhos, setVinhos] = useState<VinhosProps[]>([]);

  const navigation = useNavigation();

  function handleNavigateToDetalhes(vinhos: VinhosProps) {

    navigation.navigate('Detalhes', {
      id: vinhos.id,
      imagem: vinhos.imagem,
      preço: vinhos.preço,
      titulo: vinhos.titulo,
    })
  }

  useEffect(() => {
    firestore()
      .collection('vinhos')

      .get()
      .then(response => {
        handleLoading(false)
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as VinhosProps[];
        setVinhos(data)
      });
  }, []);

  return (
    <Container>
      <ContainerFlatlist>
        <Titulo>VINHOS</Titulo>

        <FlatList
          data={vinhos}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              key={item.id}
              imagem={item.imagem}
              titulo={item.titulo}
              button={() => handleNavigateToDetalhes(item)}
              preço={item.preço}
            />
          )}
          horizontal
        />

      </ContainerFlatlist>
    </Container>
  )

}