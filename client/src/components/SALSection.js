import React from 'react';
import styled from 'styled-components';

import HiddenAnchor from './HiddenAnchor';

const StyledSALSection = styled.section``;

class SALSection extends React.Component {
  render() {
    return (
      <StyledSALSection>
        <HiddenAnchor id="sal" />
        <h1>SALSection</h1>
      </StyledSALSection>
    );
  }
}

export default SALSection;
