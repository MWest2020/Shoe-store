export default function calcTotalPrice(cart) {
  // query cartItems
  // loop over price * quantity
  // add all via reduce
  // return total

  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
