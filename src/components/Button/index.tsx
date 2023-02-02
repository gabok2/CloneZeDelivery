
import { FormatPrice } from "../FormatPrice";
import { Container, Titulo, Preço } from "./styles";
interface ButtonProps {
  preço?: number;
  titulo: string;
  onPress?: () => void;
  quantidade?: number;
}
export function Button({ preço, titulo, onPress, quantidade }: ButtonProps) {

  return (
    <Container
      onPress={onPress}
      center={!preço}

    >
      <Titulo
        font={!preço}
      >{titulo}</Titulo>
      {preço && <Preço>{FormatPrice(preço * quantidade)}</Preço>}

    </Container>
  );
}