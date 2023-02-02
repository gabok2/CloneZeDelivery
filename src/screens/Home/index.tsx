
import { useNavigation } from "@react-navigation/native";
import { VStack, Center, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { ButtonSacola } from "../../components/ButtonSacola";
import firestore from '@react-native-firebase/firestore';

import { Loading } from "../../components/Loading";
import { useCart } from "../../hooks/useCart";
import { Banner } from "./Components/Banner";
import { Cashback } from "./Components/Cashback";
import { Categorias } from "./Components/Categorias";
import { Cervejas } from "./Components/Cervejas";
import { Comidinhas } from "./Components/Comidinhas";
import { Destaques } from "./Components/destaques";
import { Destilados } from "./Components/Destilados";
import { Não_Alcoòlicos } from "./Components/Não_Alcoòlicos";
import { Promoções } from "./Components/Promoções";
import { Recomendados } from "./Components/Recomendados";
import { Retornavel } from "./Components/Retornavel";
import { Vinhos } from "./Components/Vinhos";

export interface HomeProps {
  id: string;
  imagem: string;
  titulo: string;
  preço: number;
  quantidade?: number;

}

export function Home() {
  const [loading, setLoading] = useState(true);
  const
    { recomendados,
      setRecomendados,
      cervejas,
      setCervejas,
      comidinhas,
      setComidinhas,
      destilados,
      setDestilados,
      vinhos,
      setVinhos,
      retornavel,
      setRetornavel,
      promoções,
      setPromoções,
      não_alcoòlicos,
      setNão_alcoòlicos,
      categorias,
      setCategorias,



    } = useCart();
  const [destaques, setDestaques] = useState<HomeProps[]>([]);

  const [banner, setBanner] = useState<HomeProps[]>([]);



  useEffect(() => {
    const loadData = async () => {
      const promoçõesSnapshot = await firestore()
        .collection('Promoções_Relâmpago')
        .get();
      const recomendadosSnapshot = await firestore()
        .collection('recomendados')
        .get();

      const destaquesSnapshot = await firestore()
        .collection('destaques')
        .get();

      const categoriasSnapshot = await firestore()
        .collection('categorias')
        .get();

      const retornavelSnapshot = await firestore()
        .collection('retornavel')
        .get();

      const bannerSnapshot = await firestore()
        .collection('banner')
        .get();

      const cervejasSnapshot = await firestore()
        .collection('cervejas')
        .get();

      const destiladosSnapshot = await firestore()
        .collection('destilados')
        .get();

      const não_alcoòlicosSnapshot = await firestore()
        .collection('Não_Alcoòlicos')
        .get();

      const vinhosSnapshot = await firestore()
        .collection('vinhos')
        .get();

      const comidinhasSnapshot = await firestore()
        .collection('comidinhas')
        .get();

      const dataPromo = promoçõesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setPromoções(dataPromo);


      const dataRecomo = recomendadosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setRecomendados(dataRecomo);

      const dataDestaques = destaquesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setDestaques(dataDestaques);

      const dataCategorias = categoriasSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setCategorias(dataCategorias);

      const dataRetornavel = retornavelSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setRetornavel(dataRetornavel);

      const dataBanner = bannerSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setBanner(dataBanner);

      const dataCervejas = cervejasSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setCervejas(dataCervejas);

      const dataDestilados = destiladosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setDestilados(dataDestilados);

      const dataNão_alcoòlicos = não_alcoòlicosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setNão_alcoòlicos(dataNão_alcoòlicos);

      const dataVinhos = vinhosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setVinhos(dataVinhos);

      const dataComidinhas = comidinhasSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeProps[];

      setComidinhas(dataComidinhas);

      setLoading(false);
    };

    loadData();
  }, []);

  const navigation = useNavigation();
  function HandleNavigateSacola() {
    navigation.navigate('Sacola')
  }

  const { size } = useCart()
  const data = [
    { key: '1', component: <Cashback /> },
    { key: '2', component: <Destaques destaques={destaques} /> },
    { key: '3', component: <Categorias categorias={categorias} /> },
    { key: '4', component: <Promoções promoções={promoções} /> },
    { key: '5', component: <Recomendados recomendados={recomendados} /> },
    { key: '6', component: <Retornavel retornavel={retornavel} /> },
    { key: '7', component: <Banner banner={banner} /> },
    { key: '8', component: <Cervejas cervejas={cervejas} /> },
    { key: '9', component: <Destilados destilados={destilados} /> },
    { key: '10', component: <Não_Alcoòlicos não_alcoólicos={não_alcoòlicos} /> },
    { key: '11', component: <Vinhos vinhos={vinhos} /> },
    { key: '12', component: <Comidinhas comidinhas={comidinhas} /> }
  ];

  return (
    <>

      {
        loading ? <Loading /> : (
          <View style={{ flex: 1 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={item => item.key}
              renderItem={({ item }) => (
                <VStack flex={1} bgColor={"gray.100"} >
                  <Center>
                    {item.component}
                  </Center>
                </VStack>
              )}
            />
            {size > 0 && <View style={{ position: "absolute", bottom: 0, zIndex: 1 }}>
              <ButtonSacola navigateSacola={HandleNavigateSacola} />
            </View>}
          </View>
        )
      }

    </>
  );
}