import { AddSacola } from '../AddSacola'
import { Button } from '../Button'
import { Modal } from 'react-native';
import { Dimensions } from 'react-native';
import {
  ContainerModal,
  Titulo,
  CorContainerModal,
  ContainerRow,
  Icon,
  Test,
  Informação,
  Sacola,

} from './styles';

import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';


interface ModalItensProps {
  visible: boolean;
  onClose: () => void;
  titulo?: string;
  id?: string;
  preço?: number;
  imagem?: string;
  esconder?: boolean;
  remover?: () => void;
}

const { width } = Dimensions.get('window')
export function ModalItens({ visible, onClose, titulo, id, imagem, preço, esconder, remover }: ModalItensProps) {
  const { addProductToCart } = useCart();
  const [quantidade, setQuantidade] = useState(1)

  function handleQuantidade(quant: number) {
    setQuantidade(quantidade + quant)
  }

  function handleRemoveQuantidade(quant: number) {
    setQuantidade(quantidade - quant)
  }
  function handleAddToCart() {
    addProductToCart({ id, imagem, preço, titulo, quantidade })
    onClose()
  }
  function handleRemoveToCart() {
    remover()
    onClose()
  }
  const n = quantidade
  const texto = esconder ? 'REMOVER PRODUTO' : n > 1 ? `ADICIONAR (${n})` : `ADICIONAR (${n})`
  return (
    <>
      <Modal
        visible={visible}
        animationType="none"
        transparent
        onRequestClose={onClose}
      >
        <ContainerModal style={{ width: width }}>
          <CorContainerModal style={{
            justifyContent: esconder ? 'flex-start' : 'center',
            width: width
          }}>

            <ContainerRow>
              {
                esconder ?
                  <Test>

                    <Sacola
                      style={{
                        marginLeft: 50,
                      }}
                    >Sacola</Sacola>
                  </Test>
                  :
                  <Test>

                    <Titulo>{titulo}</Titulo>
                  </Test>
              }

              <Icon onPress={onClose}>
                <AntDesign name="close" size={24} color="#CACACA" />
              </Icon>
            </ContainerRow>

            {
              esconder ? <><Informação>Você deseja remover este produto?</Informação><Titulo>{titulo}</Titulo></>
                : <></>
            }

            {
              !esconder ? <AddSacola quantidade={quantidade} handleQuantidade={handleQuantidade} handleRemoveQuantidade={handleRemoveQuantidade} /> : <></>
            }

            <Button onPress={
              esconder ? handleRemoveToCart : handleAddToCart
            } quantidade={quantidade} preço={preço} titulo={texto} />

          </CorContainerModal>
        </ContainerModal>
      </Modal>


    </>
  )
}