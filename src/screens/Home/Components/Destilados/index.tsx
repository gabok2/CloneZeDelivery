import { Container, ContainerFlatlist, Titulo } from "./styles";

import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";

interface DestiladosProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
}

interface DateProps {
  destilados: DestiladosProps[];
}


export function Destilados({ destilados }: DateProps) {


  const navigation = useNavigation();

  function handleNavigateToDetalhes(destilado: DestiladosProps) {

    navigation.navigate('Detalhes', {
      id: destilado.id,
      imagem: destilado.imagem,
      preço: destilado.preço,
      titulo: destilado.titulo,
    })
  }


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