import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { IProduct } from '../../../Providers/ProductContext';


interface iProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: iProductCardProps) => (
  <StyledProductCard>
    <div className='imageBox'>
      <img src={product.img} alt={product.name} />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
        {product.name}
      </StyledTitle>
      <StyledParagraph className='category'>{product.category}</StyledParagraph>
      <StyledParagraph className='price'>R$ {product.price}</StyledParagraph>
      <StyledButton $buttonSize='medium' $buttonStyle='green'>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
);

export default ProductCard;
