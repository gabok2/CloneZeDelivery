import { Container, ContainerFlatlist, Titulo } from "./styles";
import { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native";
import { Card } from "../../../../components/Card";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../../../../components/Loading";

interface PromoçãoProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;

}

interface LoadingProps {

  handleLoading: (isLoading: boolean) => void;
}

export function Promoções({ handleLoading }: LoadingProps) {
  const [promoção, setPromoção] = useState<PromoçãoProps[]>([]);

  const navigation = useNavigation();

  function handleNavigateToDetalhes(promoção: PromoçãoProps) {
    navigation.navigate('Detalhes', {
      id: promoção.id,
      imagem: promoção.imagem,
      preço: promoção.preço,
      titulo: promoção.titulo,
    })
  }
  useEffect(() => {
    firestore()
      .collection('Promoções_Relâmpago')
      .get()
      .then(response => {
        handleLoading(false);
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as PromoçãoProps[];
        setPromoção(data)
      });
  }, []);
  return (
    <>
      <Container>
        <ContainerFlatlist>
          <Titulo>⚡️ PROMOÇÕES RELÂMPAGO</Titulo>
          <FlatList
            data={promoção}
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
    </>
  )
}