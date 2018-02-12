import React from 'react';
import styled from 'styled-components';

import HiddenAnchor from './HiddenAnchor';

const StyledCasebotSection = styled.section``;

class CasebotSection extends React.Component {
  render() {
    return (
      <StyledCasebotSection>
        <HiddenAnchor id="casebot" />
        <h1>CasebotSection</h1>
      </StyledCasebotSection>
    );
  }
}

export default CasebotSection;
