import React, { Component } from 'react';
import App from '../../../components/crypto/App';

export default class About extends Component {
  static getInitialProps({ query: { symbol, toSymbol, exchange } }) {
    return { symbol, toSymbol, exchange };
  }

  render() {
    return (
      <App title={`${this.props.symbol}/${this.props.toSymbol}/${this.props.exchange} - under construction...`} />
    );
  }
}

