import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.div`
  padding-top: 2em;
`;

class HiddenAnchor extends React.Component {
  render() {
    return <StyledAnchor id={this.props.id} />;
  }
}

export default HiddenAnchor;
