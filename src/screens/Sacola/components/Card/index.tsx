import { Minus, Plus, TrashSimple } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FormatPrice } from "../../../../components/FormatPrice";
import firestore from '@react-native-firebase/firestore';
import {
  Background,
  Container,
  Imagem,
  ContainerColumn,
  Titulo,
  Preço,
  ContainerButton,
  Quantidade,
  ContainerRow,
} from "./styles";
import { useCart } from "../../../../hooks/useCart";
import { ModalItens } from "../../../../components/ModalItens";



interface CardProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
  quantidade: number;
}
export function Card({ id, imagem, titulo, preço, quantidade }: CardProps) {
  const [quantidades, setQuantidade] = useState(quantidade);
  const { visible } = useCart();
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    setLocalVisible(visible);
  }, [visible])


  useEffect(() => {

    firestore()
      .collection('sacola')
      .doc(id)
      .update({ quantidade: quantidades })

  }, [quantidades]);



  function handleRemoveItem() {
    firestore()
      .collection('sacola')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Item removido com sucesso!');
      });
  }



  function handlAddQuantidade() {
    setQuantidade(prevState => prevState + 1);
  }

  function handlRemoveQuantidade() {
    setQuantidade(prevState => prevState - 1);
  }

  return (
    <Background>

      <Container style={{
        elevation: 1
      }} >
        <Imagem
          source={{ uri: imagem }} />
        <ContainerColumn>

          <ContainerRow>
            <Titulo
              style={{
                marginTop: titulo.length < 22 ? 20 : 15,
              }}
              numberOfLines={2}>{titulo}
            </Titulo>
            <TouchableOpacity
              onPress={() => setLocalVisible(true)}
            >
              <TrashSimple style={{ marginTop: 10 }} size={20} color="#acacac" />
            </TouchableOpacity>
          </ContainerRow>
          <ModalItens remover={handleRemoveItem} esconder={true} id={id} titulo={titulo} visible={localVisible} onClose={() => setLocalVisible(false)} />
          <Preço


          >{FormatPrice(preço)}</Preço>
          <ContainerButton
            style={
              {
                marginTop: titulo.length < 22 ? 16 : 4,
              }
            }
          >
            <TouchableOpacity
              onPress={handlRemoveQuantidade}
              disabled={quantidades <= 1}
            >
              <Minus size={17} weight="bold" color={quantidades <= 1 ? '#d4d1d1' : '#FFCC00'} />
            </TouchableOpacity>

            <Quantidade>{quantidades}</Quantidade>

            <TouchableOpacity
              onPress={handlAddQuantidade}
            >
              <Plus size={17} color="#FFCC00" />
            </TouchableOpacity>

          </ContainerButton>
        </ContainerColumn>



      </Container>

    </Background>
  )
}