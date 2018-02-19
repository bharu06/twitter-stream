import React from 'react';

import Highcharts from 'highcharts';

export default class HighchartsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	if (this.props.options) {
    		new Highcharts.Chart(this.props.options);
    }
	}

	componentDidUpdate() {
    if (this.props.options) {
      new Highcharts.Chart(this.props.options);
    }
  }

  render () {
 	  return (
      <div className={this.props.divClass} id={this.props.divID}>
      </div>
    );
  }
}
