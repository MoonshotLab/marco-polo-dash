import React from 'react';
import styled from 'styled-components';

import HiddenAnchor from './HiddenAnchor';

const StyledMitsukuSection = styled.section``;

class MitsukuSection extends React.Component {
  render() {
    return (
      <StyledMitsukuSection>
        <HiddenAnchor id="mitsuku" />
        <h1>MitsukuSection</h1>
      </StyledMitsukuSection>
    );
  }
}

export default MitsukuSection;
