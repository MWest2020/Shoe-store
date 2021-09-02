import Link from 'next/link';

import NavStyles from './styles/NavStyles';
import { useUser, CURRENT_USER_QUERY } from './User';
import SignOut from './SignOut.js';
import { useCart } from '../lib/cartState';

// try out fontawesome

export default function Nav() {
  const user = useUser(CURRENT_USER_QUERY);
  const { openCart } = useCart();

  return (
    <NavStyles>
      <Link href="/products">Products</Link>

      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/order">Order</Link>
          <Link href="/account">Account</Link>
          <SignOut />

          <button type="button" onClick={openCart}>
            My Cart
          </button>
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
