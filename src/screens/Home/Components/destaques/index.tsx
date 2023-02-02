import { useState, useEffect } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Loading } from "../../../../components/Loading";
import firestore from '@react-native-firebase/firestore';
import { Imagem } from "./imagem";
import { useCart } from "../../../../hooks/useCart";


interface OnBoardingItemProps {
  id: string;
  imagem: string;
}

interface DestaquesProps {
  destaques: OnBoardingItemProps[];
}


export function Destaques({ destaques }: DestaquesProps) {

  const [activeIndex, setActiveIndex] = useState(0);




  return (
    <>

      <FlatList
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          setActiveIndex(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width)
        }}
        data={destaques}
        pagingEnabled
        keyExtractor={item => item.imagem}
        renderItem={({ item }) => (
          <Imagem
            url={item.imagem}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {
        destaques.length > 1 ?

          <View style={styles.dotsContainer}>
            {destaques.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, { backgroundColor: index === activeIndex ? "#ffc400" : "#b3b2b2eb", }]}
              />
            ))}

          </View>
          : null
      }

    </>

  );
}

export const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 10,
    alignSelf: 'center'
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginHorizontal: 4,
  }
});