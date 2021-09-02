import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import { useUser } from './User';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
    height: 50px;
    width: 50px;
  }
  h3,
  p {
    margin: 0;
  }
`;

export default function CartItem({ cartItem }) {
  const me = useUser();
  if (!me) {
    return null;
  }
  console.log({ cartItem });
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img src={product.photo.image.publicUrlTransformed} alt={product.name} />

      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)} -
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
    </CartItemStyles>
  );
}
