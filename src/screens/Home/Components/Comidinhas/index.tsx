import { Container, ContainerFlatlist, Titulo } from "./styles";
import { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";

interface ComidinhasProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
}

interface LoadingProps {

  handleLoading: (isLoading: boolean) => void;
}

export function Comidinhas({ handleLoading }: LoadingProps) {
  const [comidinhas, setComidinhas] = useState<ComidinhasProps[]>([]);

  const navigation = useNavigation();

  function handleNavigateToDetalhes(comidinhas: ComidinhasProps) {

    navigation.navigate('Detalhes', {
      id: comidinhas.id,
      imagem: comidinhas.imagem,
      preço: comidinhas.preço,
      titulo: comidinhas.titulo,
    })
  }

  useEffect(() => {
    firestore()
      .collection('comidinhas')
      .get()
      .then(response => {
        handleLoading(false)
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as ComidinhasProps[];
        setComidinhas(data)
      });
  }, []);

  return (
    <Container>
      <ContainerFlatlist>
        <Titulo>COMIDINHAS</Titulo>

        <FlatList
          data={comidinhas}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              key={item.id}
              imagem={item.imagem}
              preço={item.preço}
              titulo={item.titulo}
              button={() => handleNavigateToDetalhes(item)}
            />
          )}
          horizontal
        />
      </ContainerFlatlist>
    </Container>
  )


}