
import { useEffect, useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { FormatPrice } from '../../components/FormatPrice';
import { AntDesign } from '@expo/vector-icons';
import { useCart } from '../../hooks/useCart';
import {
  Container,
  Preço,
  Texto,
  ContainerFlatlist,
  Imagem,
  Button,
  ContainerRow,
  ContainerColumn,
  GroupRow,
  Input,
  ContainerCategorias,
  ImagemCategorias,
  TextoCategorias,
  ContainerCategoria,



} from "./styles";
import { ButtonSacola } from '../../components/ButtonSacola';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';



interface Props {
  id?: string;
  imagem?: string;
  titulo?: string;
  preço?: number;
  recomendados?: [];
  cervejas?: [];
  comidinhas?: [];
  destilados?: [];
  vinhos?: [];
  retornavel?: [];
  promoções?: [];
  não_alcoòlicos?: [];
  categorias?: [];



}

export function Buscar() {
  const {
    recomendados,
    cervejas,
    comidinhas,
    destilados,
    vinhos,
    retornavel,
    promoções,
    não_alcoòlicos,
    size,




  } = useCart();

  const [items, setItems] = useState<Props[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<Props[]>([]);
  const [categoriasItems, setCategoriasItems] = useState<Props[]>([]);

  function handleLimparString() {
    setSearchTerm('');
  }



  const navigation = useNavigation();

  function HandleNavigateSacola() {
    navigation.navigate('Sacola');
  }

  useEffect(() => {

    setItems([
      ...recomendados,
      ...cervejas,
      ...comidinhas,
      ...destilados,
      ...vinhos,
      ...retornavel,
      ...promoções,
      ...não_alcoòlicos,
    ]);


  }, []);


  useEffect(() => {
    const uniqueItems = items.reduce((acc, item) => {
      const normalizedTitle = item.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      acc[normalizedTitle] = item;
      return acc;
    }, {});

    const filteredUniqueItems = Object.values(uniqueItems).filter((item) => {
      const normalizedTitle = item.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return (
        normalizedTitle.toLowerCase() === searchTerm.toLowerCase() ||
        normalizedTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredItems(filteredUniqueItems);
  }, [searchTerm, items]);


  useEffect(() => {
    firestore()
      .collection('categorias')
      .get()
      .then(response => {
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as Props[];

        setCategoriasItems(data);
      })
  }, []);


  return (

    <Container>

      <Input

      >
        <AntDesign name="search1" size={17} color={"#ababab"} />
        <TextInput
          style={{ flex: 1, marginLeft: 30 }}
          placeholder="Busque o que você precisa"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />

        {
          searchTerm.length > 0 ?
            <TouchableOpacity
              onPress={handleLimparString}
            >
              <AntDesign name="close" size={20} color="#CACACA" />

            </TouchableOpacity>
            :
            <></>
        }
      </Input>

      {
        searchTerm.length > 0 ?
          <FlatList
            style={{ marginBottom: 60 }}
            showsVerticalScrollIndicator={false}
            data={filteredItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ContainerFlatlist>
                <ContainerRow>
                  <Imagem source={{ uri: item.imagem }} />
                  <ContainerColumn>
                    <Texto
                      numberOfLines={2}
                    >{item.titulo}</Texto>
                    <GroupRow>
                      <Preço> {FormatPrice(item.preço)}</Preço>
                      <Button style={{ marginBottom: 10, marginRight: 10 }}>
                        <Feather name="plus" size={17} color="#000000" />
                      </Button>
                    </GroupRow>
                  </ContainerColumn>
                </ContainerRow>

              </ContainerFlatlist>
            )}
          />

          :


          <ContainerCategoria>
            <FlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              data={categoriasItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ContainerCategorias>
                  <ImagemCategorias source={{ uri: item.imagem }} />
                  <TextoCategorias>{item.titulo}</TextoCategorias>
                </ContainerCategorias>

              )}
            />
          </ContainerCategoria>

      }
      {size > 0 && <View style={{ position: "absolute", bottom: 0, zIndex: 1 }}>
        <ButtonSacola navigateSacola={HandleNavigateSacola} />
      </View>}

    </Container>
  );
}