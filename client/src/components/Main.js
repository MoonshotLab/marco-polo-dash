import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';

const StyledMain = styled.main`
  margin-top: 60px;
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
