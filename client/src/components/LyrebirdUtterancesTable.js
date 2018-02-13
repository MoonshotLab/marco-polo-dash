import React from 'react';

class LyrebirdUtterancesTable extends React.Component {
  render() {
    const utterances = this.props.utterances.map(utterance => {
      return <li key={utterance._id}>{utterance.utterance}</li>;
    });
    return <ul>{utterances}</ul>;
  }
}

export default LyrebirdUtterancesTable;
