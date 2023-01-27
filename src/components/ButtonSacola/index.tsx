import { Container, Sacola, Valor } from "./styles";

import { Dimensions } from "react-native";
import { useCart } from "../../hooks/useCart";
import { FormatPrice } from "../FormatPrice";

const { width } = Dimensions.get("window");

export function ButtonSacola() {
  const { size, total } = useCart();
  return (
    <Container style={{ width: width }}>
      <Sacola>Ver Sacola ({size})</Sacola>
      <Valor>{FormatPrice(total)}</Valor>

    </Container>
  )
}