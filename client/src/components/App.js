import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import baseStyles from './../base-styles';
import Header from './Header';
import Main from './Main';

const StyledAppWrap = styled.div``;

class App extends React.Component {
  render() {
    baseStyles();

    return (
      <StyledAppWrap>
        <Helmet>
          <title>Marco Polo Dashboard</title>
        </Helmet>
        <Header />
        <Main />
      </StyledAppWrap>
    );
  }
}

export default App;
