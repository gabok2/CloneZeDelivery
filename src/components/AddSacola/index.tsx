import { Minus, Plus } from "phosphor-react-native";
import {
  Container,
  ContainerCount,
  Count,
  CountSumNuber,
  CountSum6,
  CountSum6Text,
  CountSum12,
  CountSum12Text,
  CountSum15,
  CountSum15Text,

} from "./styles";
import { TouchableOpacity } from "react-native";
import { useCart } from "../../hooks/useCart";
import { Loading } from "../Loading";

interface AddSacolaProps {
  quantidade: number;
  handleQuantidade: (quantidade: number) => void;
  handleRemoveQuantidade: (quantidade: number) => void;
}

export function AddSacola({ quantidade, handleQuantidade, handleRemoveQuantidade }: AddSacolaProps) {
  const { loading } = useCart()


  return (

    <Container>
      <ContainerCount>
        <TouchableOpacity
          onPress={() => handleRemoveQuantidade(1)}
          disabled={quantidade <= 1}
        >
          <Minus size={17} weight="bold" color={quantidade <= 1 ? '#d4d1d1' : '#FFCC00'} />

        </TouchableOpacity>

        <Count>{quantidade}</Count>

        <TouchableOpacity
          onPress={() => handleQuantidade(1)}
        >
          <Plus size={17} weight="bold" color="#FFCC00" />
        </TouchableOpacity>
      </ContainerCount>



      <CountSumNuber>
        <CountSum6
          onPress={() => handleQuantidade(6)}

        >
          <CountSum6Text>+ 6 un.</CountSum6Text>

        </CountSum6>

        <CountSum12
          onPress={() => handleQuantidade(12)}
        >
          <CountSum12Text>+ 12 un.</CountSum12Text>
        </CountSum12>




        <CountSum15
          onPress={() => handleQuantidade(15)}
        >
          <CountSum15Text>+ 15 un.</CountSum15Text>
        </CountSum15>


      </CountSumNuber>

    </Container>



  );
}