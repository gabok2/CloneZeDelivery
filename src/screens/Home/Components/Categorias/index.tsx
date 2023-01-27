
import { Container, CategoryContainer, Imagem, Titulo, Alinhar } from "./styles";
import { FlatList } from "react-native";
import { Loading } from "../../../../components/Loading";
import { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { useCart } from "../../../../hooks/useCart";

interface CategoriaProps {
  id: string;
  titulo: string;
  imagem: string;
}
interface LoadingProps {

  handleLoading: (isLoading: boolean) => void;
}
export function Categorias({ handleLoading }: LoadingProps) {
  const [categorias, setCategorias] = useState<CategoriaProps[]>([]);


  useEffect(() => {
    firestore()
      .collection('categorias')

      .get()
      .then(response => {
        handleLoading(false)
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as CategoriaProps[];
        setCategorias(data)
      });
  }, []);

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