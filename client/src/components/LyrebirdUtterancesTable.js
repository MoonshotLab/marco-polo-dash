import React from 'react';
import ReactTable from 'react-table';
import * as moment from 'moment';
import styled from 'styled-components';
import { lowerCase } from 'lodash';

const StyledTableSection = styled.section``;

const getUniqueUtterancesByFrequency = (utterances = []) => {
  const utteranceFrequencies = {};

  utterances.map(utteranceObj => {
    if (lowerCase(utteranceObj.utterance) in utteranceFrequencies !== true) {
      utteranceFrequencies[lowerCase(utteranceObj.utterance)] = {
        utterance: utteranceObj.utterance,
        frequency: 0
      };
    }

    utteranceFrequencies[lowerCase(utteranceObj.utterance)].frequency++;
  });

  // sort before returning an array
  return Object.values(utteranceFrequencies).sort(
    (a, b) => b.frequency - a.frequency
  );
};

const getChartNameByType = (tableType = 'all') => {
  switch (tableType) {
    case 'all':
      return 'All';
    case 'freq':
      return 'By Frequency';
    default:
      return null;
  }
};

const getFilteredUtterancesByTableType = (utterances, tableType = 'all') => {
  switch (tableType) {
    case 'all':
      return utterances;
    case 'freq':
      return getUniqueUtterancesByFrequency(utterances);
    default:
      return null;
  }
};

const getColumnsByTableType = (tableType = 'all') => {
  switch (tableType) {
    case 'all':
      return [
        {
          Header: 'ID',
          accessor: '_id',
          show: false
        },
        {
          Header: 'Phrase',
          accessor: 'utterance'
        },
        {
          Header: 'Timestamp',
          accessor: 'timestamp',
          Cell: props => <span>{moment(props.value).format('lll')}</span>
        },
        {
          Header: 'Screenshot',
          accessor: 'screenshot',
          Cell: props => (
            <a href={props.value} target="_blank">
              Link
            </a>
          )
        }
      ];
    case 'freq':
      return [
        {
          Header: 'Phrase',
          accessor: 'utterance'
        },
        {
          Header: 'Frequency',
          accessor: 'frequency'
        }
      ];
    default:
      return null;
  }
};

class LyrebirdUtterancesTable extends React.Component {
  render() {
    return (
      <StyledTableSection>
        <h3>{getChartNameByType(this.props.currentChart)}</h3>
        <ReactTable
          data={getFilteredUtterancesByTableType(
            this.props.utterances,
            this.props.currentChart
          )}
          columns={getColumnsByTableType(this.props.currentChart)}
        />
      </StyledTableSection>
    );
  }
}

export default LyrebirdUtterancesTable;
