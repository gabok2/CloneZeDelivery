import { Container, ContainerFlatlist, Titulo } from "./styles";

import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";


interface CervejasProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
}

interface DateProps {
  cervejas: CervejasProps[];
}


export function Cervejas({ cervejas }: DateProps) {


  const navigation = useNavigation();

  function handleNavigateToDetalhes(cerveja: CervejasProps) {

    navigation.navigate('Detalhes', {
      id: cerveja.id,
      imagem: cerveja.imagem,
      preço: cerveja.preço,
      titulo: cerveja.titulo,
    })
  }



  return (
    <Container>
      <ContainerFlatlist>
        <Titulo>CERVEJAS</Titulo>

        <FlatList
          data={cervejas}
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