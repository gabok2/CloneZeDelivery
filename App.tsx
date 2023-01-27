
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import { useState } from 'react';
import { CartProvider } from './src/contexts/CartContext';
import { useCart } from './src/hooks/useCart';

export default function App() {



  return (
    <NativeBaseProvider

    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0e0e0e"
      />
      <CartProvider>

        <Routes />



      </CartProvider>
    </NativeBaseProvider>
  );
}


