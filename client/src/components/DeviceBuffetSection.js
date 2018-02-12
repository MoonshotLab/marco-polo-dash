import React from 'react';
import styled from 'styled-components';

import HiddenAnchor from './HiddenAnchor';

const StyledDeviceBuffetSection = styled.section``;

class DeviceBuffetSection extends React.Component {
  render() {
    return (
      <StyledDeviceBuffetSection>
        <HiddenAnchor id="device-buffet" />
        <h1>DeviceBuffetSection</h1>
      </StyledDeviceBuffetSection>
    );
  }
}

export default DeviceBuffetSection;
