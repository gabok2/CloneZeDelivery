
import { Container, CategoryContainer, Imagem, Titulo, Alinhar } from "./styles";
import { FlatList } from "react-native";
interface CategoriaProps {
  id?: string;
  titulo?: string;
  imagem?: string;
}
interface DateProps {
  categorias?: CategoriaProps[];
}
export function Categorias({ categorias }: DateProps) {

  return (
    <>
      <Container >
        <FlatList
          data={categorias}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryContainer
              key={item.id}
            >
              <Imagem resizeMode="contain" source={{ uri: item.imagem }} />
              <Alinhar>
                <Titulo>{item.titulo}</Titulo>
              </Alinhar>
            </CategoryContainer>
          )}
          horizontal
        />


      </Container>
    </>
  );
}