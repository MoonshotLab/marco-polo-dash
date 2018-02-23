import React from 'react';
import ReactTable from 'react-table';
import * as moment from 'moment';
import styled from 'styled-components';
import { filter } from 'lodash';

const StyledTableSection = styled.section``;

const getFilteredReactionsByTableType = (reactions, tableType = 'all') => {
  switch (tableType) {
    case 'all':
      return reactions;
    case 'feels':
      return filter(reactions, reaction => reaction.type === 'feeling');
    case 'jokes':
      return filter(reactions, reaction => reaction.type === 'joke');
    default:
      return null;
  }
};

const getChartNameByType = (tableType = 'all') => {
  switch (tableType) {
    case 'all':
      return 'All Reactions';
    case 'feels':
      return 'Only Feeling Reactions';
    case 'jokes':
      return 'Only Joke Reactions';
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
          Header: 'Session ID',
          accessor: 'sessionId'
        },
        {
          Header: 'Type',
          accessor: 'type'
        },
        {
          Header: 'Audio',
          columns: [
            {
              id: 'textTranscription',
              Header: 'Transcription',
              accessor: d => d.text.transcription
            },
            {
              id: 'textSentiment',
              Header: 'Sentiment',
              accessor: d => d.text.sentiment.val
            }
          ]
        },
        {
          Header: 'Video',
          columns: [
            {
              id: 'videoJoy',
              Header: 'Joy',
              accessor: d => d.video.sentiment.joy
            },
            {
              id: 'videoSadness',
              Header: 'Sadness',
              accessor: d => d.video.sentiment.sadness
            },
            {
              id: 'videoAnger',
              Header: 'Anger',
              accessor: d => d.video.sentiment.anger
            },
            {
              id: 'videoSurprise',
              Header: 'Surprise',
              accessor: d => d.video.sentiment.surprise
            }
          ]
        },
        {
          Header: 'Timestamp',
          accessor: 'timestamp',
          Cell: props => <span>{moment(props.value).format('lll')}</span>
        }
      ];
    case 'feels':
      return [
        {
          Header: 'ID',
          accessor: '_id',
          show: false
        },
        {
          Header: 'Audio',
          columns: [
            {
              id: 'textTranscription',
              Header: 'Transcription',
              accessor: d => d.text.transcription
            },
            {
              id: 'textSentiment',
              Header: 'Sentiment',
              accessor: d => d.text.sentiment.val
            }
          ]
        },
        {
          Header: 'Video',
          columns: [
            {
              id: 'videoJoy',
              Header: 'Joy',
              accessor: d => d.video.sentiment.joy
            },
            {
              id: 'videoSadness',
              Header: 'Sadness',
              accessor: d => d.video.sentiment.sadness
            },
            {
              id: 'videoAnger',
              Header: 'Anger',
              accessor: d => d.video.sentiment.anger
            },
            {
              id: 'videoSurprise',
              Header: 'Surprise',
              accessor: d => d.video.sentiment.surprise
            }
          ]
        },
        {
          Header: 'Timestamp',
          accessor: 'timestamp',
          Cell: props => <span>{moment(props.value).format('lll')}</span>
        }
      ];
    case 'jokes':
      return [
        {
          Header: 'ID',
          accessor: '_id',
          show: false
        },
        {
          Header: 'Joke',
          accessor: 'joke'
        },
        {
          Header: 'Audio',
          columns: [
            {
              id: 'textTranscription',
              Header: 'Transcription',
              accessor: d => d.text.transcription
            },
            {
              id: 'textSentiment',
              Header: 'Sentiment',
              accessor: d => d.text.sentiment.val
            }
          ]
        },
        {
          Header: 'Video',
          columns: [
            {
              id: 'videoJoy',
              Header: 'Joy',
              accessor: d => d.video.sentiment.joy
            },
            {
              id: 'videoSadness',
              Header: 'Sadness',
              accessor: d => d.video.sentiment.sadness
            },
            {
              id: 'videoAnger',
              Header: 'Anger',
              accessor: d => d.video.sentiment.anger
            },
            {
              id: 'videoSurprise',
              Header: 'Surprise',
              accessor: d => d.video.sentiment.surprise
            }
          ]
        },
        {
          Header: 'Timestamp',
          accessor: 'timestamp',
          Cell: props => <span>{moment(props.value).format('lll')}</span>
        }
      ];
    default:
      return null;
  }
};

class SALReactionsTable extends React.Component {
  render() {
    return (
      <StyledTableSection>
        <h3>{getChartNameByType(this.props.currentChart)}</h3>
        <ReactTable
          data={getFilteredReactionsByTableType(
            this.props.data,
            this.props.currentChart
          )}
          columns={getColumnsByTableType(this.props.currentChart)}
        />
      </StyledTableSection>
    );
  }
}

export default SALReactionsTable;
