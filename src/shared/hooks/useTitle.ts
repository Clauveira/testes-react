import { useContext } from 'react';
import { TitleContext } from "../contexts";

export const useTitle = () => {
    return useContext(TitleContext);
  }
  
  export const useSetTitle = (title: string) => {
    return useContext(TitleContext).setTitle(title);
  }