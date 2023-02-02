import { createContext, ReactNode, useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { HomeProps } from '../screens/Home';
import { SacolaProps } from '../screens/Sacola';

interface CartItem {
  id?: string;
  titulo: string;
  preço: number;
  imagem?: string;
  quantidade?: number;
}

interface CartContextData {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  size: number;
  total: number;
  addProductToCart: (product: CartItem) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;

  recomendados: HomeProps[];
  setRecomendados: (recomendados: HomeProps[]) => void;
  cervejas: HomeProps[];
  setCervejas: (cervejas: HomeProps[]) => void;
  destilados: HomeProps[];
  setDestilados: (destilados: HomeProps[]) => void;

  não_alcoòlicos: HomeProps[];
  setNão_alcoòlicos: (não_alcoòlicos: HomeProps[]) => void;

  vinhos: HomeProps[];
  setVinhos: (vinhos: HomeProps[]) => void;
  comidinhas: HomeProps[];
  setComidinhas: (comidinhas: HomeProps[]) => void;
  promoções: HomeProps[];
  setPromoções: (promoções: HomeProps[]) => void;
  retornavel: HomeProps[];
  setRetornavel: (retornavel: HomeProps[]) => void;
  categorias: HomeProps[];
  setCategorias: (categorias: HomeProps[]) => void;

  sacola: SacolaProps[];
  setSacola: (sacola: SacolaProps[]) => void;




}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(0);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);
  const [recomendados, setRecomendados] = useState<HomeProps[]>([]);
  const [cervejas, setCervejas] = useState<HomeProps[]>([]);
  const [destilados, setDestilados] = useState<HomeProps[]>([]);
  const [não_alcoòlicos, setNão_alcoòlicos] = useState<HomeProps[]>([]);
  const [vinhos, setVinhos] = useState<HomeProps[]>([]);
  const [comidinhas, setComidinhas] = useState<HomeProps[]>([]);
  const [promoções, setPromoções] = useState<HomeProps[]>([]);
  const [retornavel, setRetornavel] = useState<HomeProps[]>([]);
  const [categorias, setCategorias] = useState<HomeProps[]>([]);
  const [sacola, setSacola] = useState<SacolaProps[]>([]);






  // Get the size of cart and total from Firestore
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('sacola')
      .onSnapshot((querySnapshot) => {
        setLoading(false);

        let total = 0;
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          total += data.quantidade * data.preço;
        });
        setSize(querySnapshot.size);
        setTotal(total);
      });
    return () => unsubscribe();
  }, []);




  function addProductToCart(product: CartItem) {
    firestore()
      .collection('sacola')
      .doc(product.id)
      .get()
      .then((doc) => {
        setLoading(false);
        if (doc.exists) {
          const existingQuantity = doc.data()?.quantidade;
          // Use separate variables for new and existing quantities
          const newQuantity = product.quantidade;
          const totalQuantity = existingQuantity + newQuantity;

          // Update the quantity in Firestore
          firestore()
            .collection('sacola')
            .doc(product.id)
            .update({
              quantidade: totalQuantity,
            })
            .then(() => {
              setLoading(false);
              console.log('Pedido atualizado!');
            });
        } else {
          // Add the new product to Firestore
          firestore()
            .collection('sacola')
            .doc(product.id)
            .set({
              id: product.id,
              titulo: product.titulo,
              preço: product.preço,
              imagem: product.imagem,
              quantidade: product.quantidade,
            })
            .then(() => {
              setLoading(false);
              console.log('Pedido adicionado!');
            });
        }
      });
  }
  return (
    <CartContext.Provider
      value={{
        loading,
        setLoading,
        size,
        total,
        addProductToCart,
        visible,
        setVisible,
        recomendados,
        setRecomendados,
        cervejas,
        setCervejas,
        destilados,
        setDestilados,
        não_alcoòlicos,
        setNão_alcoòlicos,
        vinhos,
        setVinhos,
        comidinhas,
        setComidinhas,
        promoções,
        setPromoções,
        retornavel,
        setRetornavel,
        categorias,
        setCategorias,
        sacola,
        setSacola,



      }}
    >
      {children}
    </CartContext.Provider>
  );
}
