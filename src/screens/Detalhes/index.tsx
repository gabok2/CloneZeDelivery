import {
  Container,
  Header,
  ContainerGelo,
  TextoGelo,
  Imagem,
  Titulo,
  Preço,
  Linha,
} from "./styles";
import { useRoute } from "@react-navigation/native";
import { ArrowLeft, Snowflake } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FormatPrice } from "../../components/FormatPrice";

import { Dimensions } from "react-native";
import { AddSacola } from "../../components/AddSacola";
import { Button } from "../../components/Button";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";


const { width } = Dimensions.get("window");

export type DetalhesProps = {
  id?: string;
  imagem: string;
  titulo: string;
  preço: number;

}

export function Detalhes() {
  const { addProductToCart } = useCart();
  const [quantidade, setQuantidade] = useState(1)
  const { imagem, preço, titulo, id } = useRoute().params as DetalhesProps;

  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }

  function handleQuantidade(quant: number) {
    setQuantidade(quantidade + quant)
  }

  function handleRemoveQuantidade(quant: number) {
    setQuantidade(quantidade - quant)
  }

  function handleAddToCart() {
    addProductToCart({ id, imagem, preço, titulo, quantidade })
  }

  function handleNavigateToSacola() {
    navigation.navigate('ItensSacola')
    handleAddToCart()
  }

  const n = quantidade
  const texto = `ADICIONAR (${n})`
  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={handleNavigateToHome}
        >
          <ArrowLeft size={25} color="#000" weight="bold" />
        </TouchableOpacity>
        <ContainerGelo>
          <Snowflake size={20} color="#4CA7E4" weight="bold" />
          <TextoGelo> GELADA </TextoGelo>
        </ContainerGelo>
      </Header>

      <Imagem resizeMode="contain" source={{ uri: imagem }} />

      <Linha style={{ width: width }}></Linha>

      <Titulo>{titulo}</Titulo>
      <Preço>{FormatPrice(preço)}</Preço>

      <AddSacola
        quantidade={quantidade}
        handleQuantidade={handleQuantidade}
        handleRemoveQuantidade={handleRemoveQuantidade}
      />

      <Button
        quantidade={quantidade}
        onPress={handleNavigateToSacola}
        preço={preço}
        titulo={texto}
      />

    </Container>
  )
}