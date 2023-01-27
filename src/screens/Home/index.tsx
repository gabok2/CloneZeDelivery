
import { VStack, Center, FlatList } from "native-base";
import { useState } from "react";
import { View } from "react-native";
import { ButtonSacola } from "../../components/ButtonSacola";

import { Loading } from "../../components/Loading";
import { ModalItens } from "../../components/ModalItens";
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

export function Home() {
  const [loading, setLoading] = useState(false);
  console.log(loading)

  function handleLoading(isloading: boolean) {
    setLoading(isloading)
  }

  const { size } = useCart()
  const data = [
    { key: '1', component: <Cashback /> },
    { key: '2', component: <Destaques handleLoading={() => handleLoading(loading)} /> },
    { key: '3', component: <Categorias handleLoading={() => handleLoading(loading)} /> },
    { key: '4', component: <Promoções handleLoading={() => handleLoading(loading)} /> },
    { key: '5', component: <Recomendados handleLoading={() => handleLoading(loading)} /> },
    { key: '6', component: <Retornavel handleLoading={() => handleLoading(loading)} /> },
    { key: '7', component: <Banner handleLoading={() => handleLoading(loading)} /> },
    { key: '8', component: <Cervejas handleLoading={() => handleLoading(loading)} /> },
    { key: '9', component: <Destilados handleLoading={() => handleLoading(loading)} /> },
    { key: '10', component: <Não_Alcoòlicos handleLoading={() => handleLoading(loading)} /> },
    { key: '11', component: <Vinhos handleLoading={() => handleLoading(loading)} /> },
    { key: '12', component: <Comidinhas handleLoading={() => handleLoading(loading)} /> }
  ];
  return (
    <>

      {loading ? <Loading /> : (
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
            <ButtonSacola />
          </View>}
        </View>
      )}

    </>
  );
}