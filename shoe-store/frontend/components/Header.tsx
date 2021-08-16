import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav.js";

const Logo = styled.div`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  background: var(--red);
  /* z-index: 2; */

  a {
    color: var(--offWhite);
    text-decoration: none;
  }
`;

const HeaderStyle = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;

    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <div className="bar">
        <Logo>
          <Link href="/">LOGO</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">LINKS</div>
    </HeaderStyle>
  );
}
