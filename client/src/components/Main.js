import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';

const StyledMain = styled.main`
  margin-top: 60px;
  max-width: 800px;
  margin: 60px auto 0;
  padding: 2em;
`;

class Main extends React.Component {
  render() {
    return (
      <StyledMain>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </StyledMain>
    );
  }
}

export default Main;
