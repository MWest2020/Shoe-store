import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format:'woff2';
    font-weight: normal;
    font-style: normal;

  }

  *, *:before, *:after {
    box-sizing: inherit;
    
  }


  body {
    /* radnika_next or: */
    font-family:  --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  
  }

  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover{
    text-decoration: underline;

  }

  button {
    /* may need to copy from family */
    font-family: inherit;
  }

  html{
    box-sizing: border-box;
    
    --red: hsl(0, 100%, 50%);
    --black: hsl(0, 50%, 0%);
    --grey: hsl(0, 0%, 37%);
    --gray: string(--grey);
    --lightgrey: hsl(25, 0% , 60%);
    --lightgray: string(--gray);
    --offwhite: hsl(100, 100%, 95%);
    --maxWidth: 100px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0, 09);
    
    
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}

// Changing this to InnerStyles.propTypes destroys the centering
Layout.propTypes = {
  children: PropTypes.any,
};
