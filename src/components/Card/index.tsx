import { FormatPrice } from "../FormatPrice";
import { Feather } from "@expo/vector-icons"
import { Container, Image, Preço, Title, Button, ContainerGroup, Order } from "./styles";
import { useCart } from "../../hooks/useCart";
import { Loading } from "../Loading";
import { ModalItens } from "../ModalItens";
import { useEffect, useState } from "react";
interface CardProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
  semButton?: boolean;
  button: () => void;
}

export function Card({ imagem, titulo, preço, button, id, semButton }: CardProps) {
  const { visible } = useCart();
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    setLocalVisible(visible);
  }, [visible])
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
          {
            !semButton ? <Button
              onPress={() => setLocalVisible(true)}
            >
              <Feather name="plus" size={17} color="#000000" />
            </Button>
              : <></>
          }
        </ContainerGroup>
        <ModalItens preço={preço} imagem={imagem} id={id} titulo={titulo} visible={localVisible} onClose={() => setLocalVisible(false)} />
      </Container>

    </>
  );
}