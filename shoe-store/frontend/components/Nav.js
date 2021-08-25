import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser, CURRENT_USER_QUERY } from './User';
import SignOut from './SignOut.js';

export default function Nav() {
  const user = useUser(CURRENT_USER_QUERY);
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/order">Order</Link>
          <Link href="/account">Account</Link>
          <SignOut />
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
