import ItemStyles from './styles/ItemStyles.js';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <div>{product.name}</div>
      <div>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
        />
      </div>
    </ItemStyles>
  );
}
