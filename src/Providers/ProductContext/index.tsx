import { createContext, ReactNode, useEffect, useState } from 'react';
import { AxiosError } from 'types-axios';
import api from '../../services/api';

// eslint-disable-next-line no-use-before-define
export const ProductsContext = createContext({} as IProductContext);

interface iDefaultProviderProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface IProductContext {
  products: IProduct[];
}

export const ProductsProvider = ({ children }: iDefaultProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProductList = async () => {
    try {
      const token = localStorage.getItem('@TOKEN');
      const response = await api.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // eslint-disable-next-line no-console
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      const currentError = error as AxiosError;
      // eslint-disable-next-line no-console
      console.log(currentError);
    }
  };

  useEffect(() => {
   
    getProductList();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
