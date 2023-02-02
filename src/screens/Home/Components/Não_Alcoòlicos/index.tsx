import { Container, ContainerFlatlist, Titulo } from "./styles";

import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";


interface Não_AlcoòlicosProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;


}

interface DateProps {
  não_alcoólicos: Não_AlcoòlicosProps[];
}


export function Não_Alcoòlicos({ não_alcoólicos }: DateProps) {



  const navigation = useNavigation();

  function handleNavigateToDetalhes(não_alcoòlico: Não_AlcoòlicosProps) {

    navigation.navigate('Detalhes', {
      id: não_alcoòlico.id,
      imagem: não_alcoòlico.imagem,
      preço: não_alcoòlico.preço,
      titulo: não_alcoòlico.titulo,
    })
  }



  return (
    <Container>
      <ContainerFlatlist>
        <Titulo>NÂO ALCOÒLICOS</Titulo>

        <FlatList
          data={não_alcoólicos}
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
