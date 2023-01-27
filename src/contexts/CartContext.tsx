import { createContext, ReactNode, useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface CartItem {
  id?: string;
  titulo: string;
  preço: number;
  imagem?: string;
  quantidade?: number;
}

interface CartContextData {
  loading: boolean;
  size: number;
  total: number;
  addProductToCart: (product: CartItem) => void;

}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(0);
  const [total, setTotal] = useState(0);




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
        size,
        total,
        addProductToCart,

      }}
    >
      {children}
    </CartContext.Provider>
  );
}
