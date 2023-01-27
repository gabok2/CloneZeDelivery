import { Button } from "../../components/Button";
import { Container, Imagem, Titulo, Total, ButtonHome, Voltar } from "./styles";

import { ScrollView } from "react-native";
import { Recomendados } from "../Home/Components/Recomendados";
import { useNavigation } from "@react-navigation/native";

import { useCart } from "../../hooks/useCart";
import { FormatPrice } from "../../components/FormatPrice";
import { Loading } from "../../components/Loading";

export function ItensSacola() {
  const { size, total, loading } = useCart();
  const navigation = useNavigation();


  function handleNavigateToHome() {
    navigation.navigate('Home')
    navigation.setOptions({ animation: 'default' });
  }
  return (
    <>


      {loading ? <Loading /> : (
        <ScrollView
        >
          <Container>
            <Imagem resizeMode="contain" source={require("../../assets/sacola.png")} />

            <Titulo>Você possui {size} produto na sacola</Titulo>
            <Total>Total de {FormatPrice(total)}</Total>
            <Button
              titulo="VER SACOLA"
              onPress={() => { }}
            />

            <ButtonHome
              onPress={handleNavigateToHome}
            >
              <Voltar>Continuar comprando</Voltar>
            </ButtonHome>

          </Container>
          <Recomendados />

        </ScrollView>
      )}



    </>

  );
}