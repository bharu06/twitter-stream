import React from 'react';
import { ajaxCall } from './AjaxCall.js';


export default class ChartComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };

    this.getPieChartSeries = this.getPieChartSeries.bind(this);
  }

  getPieChartSeries() {
    const tweets = this.state.tweets.slice();
    
  }

  componentDidMount() {
    let url = "http://localhost:3000"
    ajaxCall(
      {url},
      (tweets) => {
        this.setState({
          tweets: tweets
        });
        window.setTimeout(this.loadRecentTweets, 60000);
      },
      (error, json) => {
          showErrorAlert(`Error in loading data: #${error.code}`, 5000);
      }
    );
  }

  render() {
    return (
      <div>
        ChartComponent View
     </div>
    );
  }
}
