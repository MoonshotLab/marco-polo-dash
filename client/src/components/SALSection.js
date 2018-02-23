import React from 'react';
import styled from 'styled-components';
import fetch from 'node-fetch';

import HiddenAnchor from './HiddenAnchor';
import SALReactionsTable from './SALReactionsTable';
import { StyledButtonList, StyledButtonListItem } from './SharedUI';

const StyledSALSection = styled.section``;

const getSalReactions = () => {
  return fetch('/log/sal/reaction').then(res => res.json());
};

class SALSection extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      currentChart: 'all'
    };
  }

  componentDidMount() {
    getSalReactions()
      .then(salData => {
        console.log(salData);
        this.setState({
          data: salData
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({
          data: []
        });
      });
  }

  switchChartMode(e, newChart = 'all') {
    e.preventDefault();

    this.setState({
      currentChart: newChart
    });
  }

  render() {
    return (
      <StyledSALSection>
        <HiddenAnchor id="sal" />
        <h2>S.A.L.</h2>
        <StyledButtonList>
          <StyledButtonListItem>
            <button onClick={e => this.switchChartMode(e, 'all')}>All</button>
          </StyledButtonListItem>
          <StyledButtonListItem>
            <button onClick={e => this.switchChartMode(e, 'feels')}>
              Feelings
            </button>
          </StyledButtonListItem>
          <StyledButtonListItem>
            <button onClick={e => this.switchChartMode(e, 'jokes')}>
              Jokes
            </button>
          </StyledButtonListItem>
        </StyledButtonList>

        {this.state.data && (
          <SALReactionsTable
            data={this.state.data}
            currentChart={this.state.currentChart}
          />
        )}
      </StyledSALSection>
    );
  }
}

export default SALSection;
