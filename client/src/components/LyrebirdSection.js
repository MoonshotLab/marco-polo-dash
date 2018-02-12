import React from 'react';
import styled from 'styled-components';

import HiddenAnchor from './HiddenAnchor';

const StyledLyrebirdSection = styled.section``;

class LyrebirdSection extends React.Component {
  render() {
    return (
      <StyledLyrebirdSection>
        <HiddenAnchor id="lyrebird" />
        <h1>LyrebirdSection</h1>
      </StyledLyrebirdSection>
    );
  }
}

export default LyrebirdSection;
