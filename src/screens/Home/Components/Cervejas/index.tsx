import { Container, ContainerFlatlist, Titulo } from "./styles";
import { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";


interface CervejasProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
}

interface LoadingProps {

  handleLoading: (isLoading: boolean) => void;
}

export function Cervejas({ handleLoading }: LoadingProps) {
  const [cerveja, setCerveja] = useState<CervejasProps[]>([]);

  const navigation = useNavigation();

  function handleNavigateToDetalhes(cerveja: CervejasProps) {

    navigation.navigate('Detalhes', {
      id: cerveja.id,
      imagem: cerveja.imagem,
      preço: cerveja.preço,
      titulo: cerveja.titulo,
    })
  }

  useEffect(() => {
    firestore()
      .collection('cervejas')

      .get()
      .then(response => {
        handleLoading(false)
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as CervejasProps[];
        setCerveja(data)
      });
  }, []);

  return (
    <Container>
      <ContainerFlatlist>
        <Titulo>CERVEJAS</Titulo>

        <FlatList
          data={cerveja}
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