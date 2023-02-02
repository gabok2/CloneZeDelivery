import { Container, ContainerFlatlist, Titulo } from "./styles";

import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";

interface ComidinhasProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
}

interface DateProps {
  comidinhas: ComidinhasProps[];
}

export function Comidinhas({ comidinhas }: DateProps) {

  const navigation = useNavigation();

  function handleNavigateToDetalhes(comidinhas: ComidinhasProps) {

    navigation.navigate('Detalhes', {
      id: comidinhas.id,
      imagem: comidinhas.imagem,
      preço: comidinhas.preço,
      titulo: comidinhas.titulo,
    })
  }



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