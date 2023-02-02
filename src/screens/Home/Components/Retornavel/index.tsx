
import { Container, ContainerFlatlist, Titulo } from "./styles";

import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";


interface Retornavel {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
}

interface DateProps {
  retornavel: Retornavel[];
}

export function Retornavel({ retornavel }: DateProps) {


  const navigation = useNavigation();

  function handleNavigateToDetalhes(retornavel: Retornavel) {

    navigation.navigate('Detalhes', {
      id: retornavel.id,
      imagem: retornavel.imagem,
      preço: retornavel.preço,
      titulo: retornavel.titulo,
    })

  }




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
              id={item.id}
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