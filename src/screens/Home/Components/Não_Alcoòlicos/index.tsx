import { Container, ContainerFlatlist, Titulo } from "./styles";
import { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../../../hooks/useCart";

interface Não_AlcoòlicosProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;


}

interface LoadingProps {

  handleLoading: (isLoading: boolean) => void;
}
export function Não_Alcoòlicos({ handleLoading }: LoadingProps) {
  const [não_alcoòlicos, setNão_Alcoòlicos] = useState<Não_AlcoòlicosProps[]>([]);


  const navigation = useNavigation();

  function handleNavigateToDetalhes(não_alcoòlicos: Não_AlcoòlicosProps) {

    navigation.navigate('Detalhes', {
      id: não_alcoòlicos.id,
      imagem: não_alcoòlicos.imagem,
      preço: não_alcoòlicos.preço,
      titulo: não_alcoòlicos.titulo,
    })
  }

  useEffect(() => {
    firestore()
      .collection('Não_Alcoòlicos')

      .get()
      .then(response => {
        handleLoading(false)
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as Não_AlcoòlicosProps[];
        setNão_Alcoòlicos(data)
      });
  }, []);

  return (
    <Container>
      <ContainerFlatlist>
        <Titulo>NÂO ALCOÒLICOS</Titulo>

        <FlatList
          data={não_alcoòlicos}
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
