import { useState, useEffect } from "react";
import { Container, ContainerFlatlist, Titulo } from "./styles";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../../../hooks/useCart";
import { Loading } from "../../../../components/Loading";


export interface Recomendados {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;

}

interface LoadingProps {

  handleLoading?: (isLoading: boolean) => void;
}
export function Recomendados({ handleLoading }: LoadingProps) {
  const [recomendados, setRecomendados] = useState<Recomendados[]>([]);

  const navigation = useNavigation();

  function handleNavigateToDetalhes(recomendado: Recomendados) {

    navigation.navigate('Detalhes', {
      id: recomendado.id,
      imagem: recomendado.imagem,
      preço: recomendado.preço,
      titulo: recomendado.titulo,
    })

  }
  useEffect(() => {
    firestore()
      .collection('recomendados')

      .get()
      .then(response => {

        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as Recomendados[];
        setRecomendados(data)

      });
  }, []);

  return (



    <Container>
      <ContainerFlatlist>
        <Titulo>RECOMENDADOS PARA VOCÊ</Titulo>
        <FlatList
          data={recomendados}
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