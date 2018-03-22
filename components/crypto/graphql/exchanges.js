import gql from 'graphql-tag';

export const allExchangesQuery = gql`
  query getExchanges {
    allExchanges {
      id,
      name,
      logo,
      countries
    }
  }
`;


export const exchangeInfoQuery = gql`
  query getExchange($id : String!) {
    coin(id: $id) {
      id
      name
      logo
    }
  }
`;

export const orderBookQuery = gql`
  query getOrderBook($exchange : String!, $symbol: String, $toSymbol: String, $start: Int, $limit: Int) {
    orderBook(exchange: $exchange, symbol: $symbol, toSymbol: $toSymbol, start: $start, limit: $limit) {
      symbol
      last_updated
      asks {
        price
        qty
      }
      bids {
        price
        qty
      }
    }
  }
`;
