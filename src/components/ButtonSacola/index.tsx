import { Container, Sacola, Valor } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { Dimensions } from "react-native";
import { useCart } from "../../hooks/useCart";
import { FormatPrice } from "../FormatPrice";
import { ModalItens } from "../ModalItens";

const { width } = Dimensions.get("window");

type ButtonSacolaProps = TouchableOpacityProps & {
  navigateSacola: () => void;
}

export function ButtonSacola({ navigateSacola, ...rest }: ButtonSacolaProps) {
  const { size, total, setVisible, visible } = useCart();
  return (
    <Container {...rest} onPress={navigateSacola} style={{ width: width }}>
      <ModalItens visible={visible} onClose={() => setVisible(false)} />
      <Sacola>Ver Sacola ({size})</Sacola>
      <Valor>{FormatPrice(total)}</Valor>

    </Container>
  )
}