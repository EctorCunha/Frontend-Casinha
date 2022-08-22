import { createContext, useState } from 'react';

export const InterfaceContext = createContext();

const initialState = {
  globalLoading: false,
  globalMessage: {
    message: '',
    type: ''
  }
}

export function InterfaceProvider({ children }) {
  const [globalLoading, setGlobalLoading] = useState(initialState.globalLoading);
  const [globalMessage, setGlobalMessage] = useState(initialState.globalMessage);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  function addGlobalLoading() {
    setGlobalLoading(true);
  }

  function removeGlobalLoading() {
    setGlobalLoading(initialState.globalLoading);
  }

  function addGlobalMessage(message, type) {
    setGlobalMessage({ message, type });
  }

  function removeGlobalMessage() {
    setGlobalMessage(initialState.globalMessage);
  }

  function addCategories(data) {
    setCategories(data);
  }

  function addProducts(data) {
    setProducts(products);
  }

  const value = {
    globalLoading,
    addGlobalLoading,
    removeGlobalLoading,
    globalMessage,
    addGlobalMessage,
    removeGlobalMessage,
    categories,
    products,
    addCategories,
    addProducts
  }

  return (
    <InterfaceContext.Provider value={value}>{children}</InterfaceContext.Provider>
  );
}

