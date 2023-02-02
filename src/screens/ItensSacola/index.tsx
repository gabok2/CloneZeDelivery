import { Button } from "../../components/Button";
import { Container, Imagem, Titulo, Total, ButtonHome, Voltar } from "./styles";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useCart } from "../../hooks/useCart";
import { FormatPrice } from "../../components/FormatPrice";

import { Recomendados } from "../Home/Components/Recomendados";
import { Loading } from "../../components/Loading";
import { useEffect } from "react";

export function ItensSacola() {

  const { size, total, recomendados, loading, setLoading } = useCart();

  const navigation = useNavigation();


  function handleNavigateToHome() {
    navigation.navigate('Home')
  }


  function HandleNavigateSacola() {
    navigation.navigate('Sacola')
  }

  useEffect(() => {
    if (size && total) {
      setLoading(false);
    }
  }, [size, total]);
  return (
    <>

      {
        loading ? <Loading /> : (
          <ScrollView
          >
            <Container>
              <Imagem resizeMode="contain" source={require("../../assets/sacola.png")} />

              <Titulo>Você possui {size} produto na sacola</Titulo>
              <Total>Total de {FormatPrice(total)}</Total>
              <Button
                titulo="VER SACOLA"
                onPress={HandleNavigateSacola}
              />

              <ButtonHome
                onPress={handleNavigateToHome}
              >
                <Voltar>Continuar comprando</Voltar>
              </ButtonHome>

            </Container>
            <Recomendados recomendados={recomendados} />

          </ScrollView>
        )
      }

    </>

  );
}