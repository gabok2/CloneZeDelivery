import { AddSacola } from '../AddSacola'
import { Button } from '../Button'
import { Modal, TouchableOpacity, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { Container } from './styles';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useRoute } from '@react-navigation/native';


type ModalProps = {
  id?: string;
  imagem: string;
  titulo: string;
  preço: number;



}

const { width } = Dimensions.get('window')
export function ModalItens({ id, imagem, preço, titulo }: ModalProps) {

  return (
    <>
      <Container style={{ width: width }}>
        <Modal

          animationType="fade"
          transparent
          onRequestClose={close}
        >
        </Modal>
        <Text style={{ color: "#fff" }}>{titulo}</Text>

      </Container>

    </>
  )
}