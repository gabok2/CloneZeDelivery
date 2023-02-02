import firestore from '@react-native-firebase/firestore';
import {
  Container,
  Texto,
  AddItens,
  ContainerGelado,
  TextoGelado,
  ContainerBackground,
  Cupom,
  TextoCupom,
  Cashback,
  ContainerTexto,
  ContainerRow,
  TextoCashback,
  SubTextoCashback,
  SubTitulo,
  Comentarios,
  TextoComentário,
  InputComentario,
  ContainerInfo,
  BackgroundCashback,
  TotalPagamento,
  ContainerQuantidadeProdutos,
  TextoProdutos,
  TextoTotalProdutos,
  ContainerFrete,
  TextoFrete,
  TextoValorFrete,
  Circulo,
  Interrogação,
  Total,
  TextoTotal,
  TextoValorTotal,
  Button,
  TextoButton,
  TextoInformativo,
  ContainerSacolaVazia,
  Imagem,
  TextoSacolaVazia,
  SubTextoSacolaVazia,

} from "./styles";
import { ScrollView } from "react-native";
import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { useNavigation } from '@react-navigation/native';
import { CurrencyCircleDollar, Snowflake } from 'phosphor-react-native';
import { Recomendados } from '../Home/Components/Recomendados';
import { useCart } from '../../hooks/useCart';
import { Header } from '../../components/Header';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { FormatPrice } from '../../components/FormatPrice';



export interface SacolaProps {
  id?: string;
  imagem?: string;
  titulo?: string;
  preço?: number;
  quantidade?: number;
}



export function Sacola() {
  const { sacola, setSacola } = useCart();
  const { recomendados, size, total } = useCart();

  useEffect(() => {
    const subscriber = firestore()
      .collection('sacola')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as SacolaProps[];
        setSacola(data);
      });

    return () => subscriber();
  }, []);



  const navigation = useNavigation();


  function handleNavigateToHome() {
    navigation.navigate('Home')

  }

  return (
    <Container>
      {
        sacola.length > 0 && sacola ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <ContainerBackground>
              <ContainerGelado>
                <Snowflake size={24} color="#4CA7E4" weight="bold" />
                <TextoGelado>Suas bebidas já vão geladinhas!</TextoGelado>
              </ContainerGelado>
            </ContainerBackground>
            {
              sacola.map(item => (
                <Card
                  key={item.id}
                  id={item.id}
                  imagem={item.imagem}
                  titulo={item.titulo}
                  preço={item.preço}
                  quantidade={item.quantidade}
                />
              ))
            }
            <AddItens
              onPress={handleNavigateToHome}
            >
              <Texto>Adicionar mais produtos</Texto>
            </AddItens>
            <Recomendados semButton={true} titulos="QUE TAL PEDIR TAMBÉM" recomendados={recomendados} />


            <Header backColor={true} />


            <Cupom>
              <MaterialCommunityIcons name="ticket-percent" size={24} color="#bdbdbd" />
              <TextoCupom>Adicionar cupom de desconto</TextoCupom>
            </Cupom>

            <Cashback>
              <CurrencyCircleDollar size={24} color="#bdbdbd" weight="light" />
              <ContainerTexto>
                <ContainerRow>
                  <TextoCashback>Cashback</TextoCashback>
                  <BackgroundCashback>
                    <SubTextoCashback>Novo</SubTextoCashback>
                  </BackgroundCashback>
                </ContainerRow>
                <SubTitulo>Resgatar saldo: R$ 0,00</SubTitulo>
              </ContainerTexto>
            </Cashback>

            <Comentarios>
              <ContainerInfo>
                <MaterialIcons style={{ transform: [{ scaleX: -1 }] }} name="chat" size={24} color="#bdbdbd" />
                <TextoComentário>Instruções para o distribuidor?</TextoComentário>
              </ContainerInfo>
              <InputComentario
                multiline={true}
                numberOfLines={4}
                placeholder="Ex: Se possível, entregar tudo em temperatura ambiente.
            O interfone está quebrado, favor ligar quando chegar."
              >

              </InputComentario>
            </Comentarios>

            <TotalPagamento>
              <ContainerQuantidadeProdutos>
                <TextoProdutos>{size} produtos</TextoProdutos>
                <TextoTotalProdutos> {FormatPrice(total)}</TextoTotalProdutos>
              </ContainerQuantidadeProdutos>
              <ContainerFrete>
                <TextoFrete>Frete <Circulo><Interrogação>?</Interrogação></Circulo></TextoFrete>
                <TextoValorFrete>Grátis</TextoValorFrete>
              </ContainerFrete>
              <Total>
                <TextoTotal>Total a pagar</TextoTotal>
                <TextoValorTotal>{FormatPrice(total)}</TextoValorTotal>
              </Total>
              <Button>
                <TextoButton>SELECIONAR FORMA DE PAGAMENTO</TextoButton>
              </Button>
              <TextoInformativo>Venda proibida para menores de 18 anos.
                Apresente um documento com foto na entrega para comprovar sua idade (+18)
              </TextoInformativo>
            </TotalPagamento>
          </ScrollView>
        ) : <ContainerSacolaVazia>
          <Imagem resizeMode="contain" source={require("../../assets/sacola_vazia.png")} />
          <TextoSacolaVazia>Putz, está vazia!</TextoSacolaVazia>
          <SubTextoSacolaVazia>Você não possui nenhum produto na sua sacola</SubTextoSacolaVazia>
          <Button
            onPress={handleNavigateToHome}
          >
            <TextoButton>CONTINUAR COMPRANDO</TextoButton>
          </Button>
        </ContainerSacolaVazia>
      }

    </Container>

  )
}