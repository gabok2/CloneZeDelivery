import { useState, useEffect } from "react";
import { Container, ContainerFlatlist, Titulo } from "./styles";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";


interface Retornavel {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
}
interface LoadingProps {

  handleLoading: (isLoading: boolean) => void;
}
export function Retornavel({ handleLoading }: LoadingProps) {
  const [retornavel, setRetornavel] = useState<Retornavel[]>([]);

  const navigation = useNavigation();

  function handleNavigateToDetalhes(retornavel: Retornavel) {

    navigation.navigate('Detalhes', {
      id: retornavel.id,
      imagem: retornavel.imagem,
      preço: retornavel.preço,
      titulo: retornavel.titulo,
    })

  }


  useEffect(() => {
    firestore()
      .collection('retornavel')

      .get()
      .then(response => {
        handleLoading(false)
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as Retornavel[];
        setRetornavel(data)
      });
  }, []);

  return (
    <Container>

      <ContainerFlatlist>
        <Titulo>CERVEJAS RETORNÁVEIS</Titulo>

        <FlatList
          data={retornavel}
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