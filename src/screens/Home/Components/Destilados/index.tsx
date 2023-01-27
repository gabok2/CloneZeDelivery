import { Container, ContainerFlatlist, Titulo } from "./styles";
import { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";

interface DestiladosProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
}

interface LoadingProps {

  handleLoading: (isLoading: boolean) => void;
}

export function Destilados({ handleLoading }: LoadingProps) {
  const [destilados, setDestilados] = useState<DestiladosProps[]>([]);

  const navigation = useNavigation();

  function handleNavigateToDetalhes(destilado: DestiladosProps) {

    navigation.navigate('Detalhes', {
      id: destilado.id,
      imagem: destilado.imagem,
      preço: destilado.preço,
      titulo: destilado.titulo,
    })
  }

  useEffect(() => {
    firestore()
      .collection('destilados')

      .get()
      .then(response => {
        handleLoading(false)
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as DestiladosProps[];
        setDestilados(data)
      });
  }, []);
  return (
    <Container>
      <ContainerFlatlist>
        <Titulo>DESTILADOS</Titulo>

        <FlatList
          data={destilados}
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