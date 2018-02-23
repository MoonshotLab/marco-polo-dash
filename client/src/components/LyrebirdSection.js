import React from 'react';
import styled from 'styled-components';
import fetch from 'node-fetch';

import HiddenAnchor from './HiddenAnchor';
import LyrebirdUtterancesTable from './LyrebirdUtterancesTable';
import { StyledButtonList, StyledButtonListItem } from './SharedUI';

const StyledLyrebirdSection = styled.section``;

const getAllUtterances = () => {
  return fetch('/log/lyrebird/utterance').then(res => res.json());
};

class LyrebirdSection extends React.Component {
  constructor() {
    super();

    this.state = {
      utterances: [],
      currentChart: 'all'
    };
  }

  componentDidMount() {
    getAllUtterances()
      .then(utterances => {
        console.log(utterances);
        this.setState({
          utterances: utterances
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({
          utterances: []
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
      <StyledLyrebirdSection>
        <HiddenAnchor id="lyrebird" />
        <h2>Lyrebird</h2>
        <StyledButtonList>
          <StyledButtonListItem>
            <button onClick={e => this.switchChartMode(e, 'all')}>All</button>
          </StyledButtonListItem>
          <StyledButtonListItem>
            <button onClick={e => this.switchChartMode(e, 'freq')}>
              By Frequency
            </button>
          </StyledButtonListItem>
        </StyledButtonList>

        {this.state.utterances && (
          <LyrebirdUtterancesTable
            utterances={this.state.utterances}
            currentChart={this.state.currentChart}
          />
        )}
      </StyledLyrebirdSection>
    );
  }
}

export default LyrebirdSection;
