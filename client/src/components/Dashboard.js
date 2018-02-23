import React from 'react';
import styled from 'styled-components';

import LyrebirdSection from './LyrebirdSection';
// import MitsukuSection from './MitsukuSection';
import SALSection from './SALSection';
// import DeviceBuffetSection from './DeviceBuffetSection';
// import CasebotSection from './CasebotSection';

const StyledDashboard = styled.section``;

class Dashboard extends React.Component {
  render() {
    return (
      <StyledDashboard>
        <h1>Dashboard</h1>
        <LyrebirdSection />
        {/* <MitsukuSection /> */}
        <SALSection />
        {/* <DeviceBuffetSection /> */}
        {/* <CasebotSection /> */}
      </StyledDashboard>
    );
  }
}

export default Dashboard;
