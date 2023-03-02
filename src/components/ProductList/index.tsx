import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ProductsContext } from '../../Providers/ProductContext';

const ProductList = () => {
  const { products } = useContext(ProductsContext);
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
