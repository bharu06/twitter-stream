import React from 'react';

import { ajaxCall, showErrorAlert} from './AjaxCall.js';

export default class TweetIndexView extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tweets: []
    };

    this.renderTweetsTable = this.renderTweetsTable.bind(this);
    this.loadRecentTweets = this.loadRecentTweets.bind(this);
    this.loadRecentTweets();
  }

  loadRecentTweets() {
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

  renderTweetsTable() {
    let tweets = this.state.tweets.slice();
    const tweetRows = tweets.map((tweet, index) => {
      return (
        <tr key={index}>
          <td className="v-align-middle">
            <div className="bold">{tweet.tweet}</div>
          </td>
        </tr>
      );
    });
    return tweetRows;
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped b-a b-grey">
          <tbody>
            {
              this.renderTweetsTable()
            }
          </tbody>
        </table>
      </div>
    );
  }
}
