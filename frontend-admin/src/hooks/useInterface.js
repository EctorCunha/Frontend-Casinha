import { useContext } from "react";
import { InterfaceContext } from '../context/InterfaceContext';

export function useInterface() {
  const context = useContext(InterfaceContext);
  if (context === undefined) {
    throw new Error(
      'useInterfaceData deve ser usado dentro de InterfaceDataProvider'
    );
  }
  return context;
}
