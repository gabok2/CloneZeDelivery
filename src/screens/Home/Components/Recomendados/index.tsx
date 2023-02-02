
import { Container, ContainerFlatlist, Titulo } from "./styles";

import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";



export interface Recomendados {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;

}

interface DateProps {
  titulos?: string;
  recomendados?: Recomendados[];
  semButton?: boolean;
}

export function Recomendados({ recomendados, titulos, semButton }: DateProps) {


  const navigation = useNavigation();

  function handleNavigateToDetalhes(recomendado: Recomendados) {

    navigation.navigate('Detalhes', {
      id: recomendado.id,
      imagem: recomendado.imagem,
      preço: recomendado.preço,
      titulo: recomendado.titulo,
    })

  }


  return (


    <Container>
      <ContainerFlatlist>
        <Titulo
          style={
            {
              fontSize: titulos ? 16 : 14,
              fontWeight: titulos ? '500' : 'normal',
            }
          }

        >{
            titulos ? titulos : 'RECOMENDADOS'
          }
        </Titulo>
        <FlatList
          data={recomendados}
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
              semButton={semButton}
            />
          )}
          horizontal
        />
      </ContainerFlatlist>
    </Container>




  )
}