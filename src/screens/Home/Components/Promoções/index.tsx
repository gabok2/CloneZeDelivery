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

interface DateProps {
  promoções?: PromoçãoProps[];
}

export function Promoções({ promoções }: DateProps) {

  const navigation = useNavigation();

  function handleNavigateToDetalhes(promoção: PromoçãoProps) {
    navigation.navigate('Detalhes', {
      id: promoção.id,
      imagem: promoção.imagem,
      preço: promoção.preço,
      titulo: promoção.titulo,
    })
  }

  return (
    <>
      <Container>
        <ContainerFlatlist>
          <Titulo>⚡️ PROMOÇÕES RELÂMPAGO</Titulo>
          <FlatList
            data={promoções}
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
    </>
  )
}