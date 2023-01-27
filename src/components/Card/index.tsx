import { FormatPrice } from "../FormatPrice";
import { Feather } from "@expo/vector-icons"
import { Container, Image, Preço, Title, Button, ContainerGroup, Order } from "./styles";
import { useCart } from "../../hooks/useCart";
import { Loading } from "../Loading";
import { ModalItens } from "../ModalItens";
import { useState } from "react";



interface CardProps {
  imagem: string;
  titulo: string;
  preço: number;
  button: () => void;



}


export function Card({ imagem, titulo, preço, button }: CardProps) {
  const { loading } = useCart()
  const [modalVisible, setModalVisible] = useState(false);

  function OpenModal() {
    setModalVisible(true)
  }

  function CloseModal() {
    setModalVisible(false)
  }

  return (
    <>
      <Container
        onPress={button}
      >
        <Image source={{ uri: imagem }} />
        <Order>
          <Title
            numberOfLines={2}
          >
            {titulo}
          </Title>
        </Order>
        <ContainerGroup>
          <Preço> {FormatPrice(preço)}</Preço>
          <Button

          >
            <Feather name="plus" size={17} color="#000000" />
          </Button>
        </ContainerGroup>
      </Container>

    </>
  );
}