import React from 'react';
import styled from 'styled-components';
import fetch from 'node-fetch';

import HiddenAnchor from './HiddenAnchor';
import LyrebirdUtterancesTable from './LyrebirdUtterancesTable';

const StyledLyrebirdSection = styled.section``;

function getAllUtterances() {
  return fetch('/log/lyrebird/utterance').then(res => res.json());
}

class LyrebirdSection extends React.Component {
  constructor() {
    super();

    this.state = {
      utterances: []
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

  render() {
    return (
      <StyledLyrebirdSection>
        <HiddenAnchor id="lyrebird" />
        <h2>LyrebirdSection</h2>
        {this.state.utterances && (
          <LyrebirdUtterancesTable utterances={this.state.utterances} />
        )}
      </StyledLyrebirdSection>
    );
  }
}

export default LyrebirdSection;
