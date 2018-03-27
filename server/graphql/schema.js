const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');


const typeDefs = `
type Query {
  coin(symbol: String): Coin
  allCoins: [Coin]
  allICO: [Coin]
  allExchanges : [Exchange]
  exchange(exchange: String): Exchange
  priceHistory(symbol: String, toSymbol: String, exchange: String, period: String, limit: Int): [PriceHistory]
  marketCap(currency: String, start: Int, limit: Int) : [MarketCap]
  orderBook(exchange: String, symbol: String, toSymbol: String, start: Int, limit: Int) : OrderBook
}
type ErrorMessage {
  message: String
  type: String
}


type Symbol {
  symbol: String
}

type ICO {
  blog: String
  blogLink: String
  date: Float
  description: String
  endDate: Float
  features: [String]
  fundingCap: String
  fundingTarget: String
  fundsRaisedList: String
  fundsRaisedUSD: String
  tokenSupply: String
  jurisdiction: String
  legalAdvisers: String
  legalForm: String
  paymentMethod: [Symbol]
  publicPortfolioId: String
  publicPortfolioUrl: String
  securityAuditCompany: String
  startPrice: String
  startPriceCurrency: String
  status: String
  tokenPercentageForInvestors: String
  tokenReserveSplit: [String]
  tokenSupplyPostICO: String
  tokenType: String
  website: String
  websiteURL: String
  whitePaper: String
  whitePaperLink: String
} 
type Coin {
  algorithm: String
  coinName: String
  fullName: String
  fullyPremined: String
  id: String
  imageUrl: String
  name: String
  preMinedValue: String
  proofType: String
  sortOrder: String
  sponsored: String
  symbol: String
  totalCoinSupply: String
  totalCoinsFreeFloat: String
  url: String
  description: String
  messages: [ErrorMessage]
  ICO: ICO
}

type Tier {
  tier: Float
  fee: Float
}
type TradingTiers {
  taker: [Tier]
  maker: [Tier]
}
type TradingFees {
  tierBased: Boolean
  percentage: Boolean
  tiers: TradingTiers
}

type FundingFee {
  symbol: String
  fee: Float
  coin: Coin
}

type FundingFees { 
  tierBased: Boolean
  percentage: Boolean
  withdraw: [FundingFee]
  deposit: [FundingFee]
} 
 

type Fees {
  trading: TradingFees
  funding: FundingFees
}
  
type Market {
  id: String
  symbol: String
  base: String
  quote: String
  darkpool: String
  maker: Float
  taker: Float
  limits: String
  precision: Int
  tierBased: Boolean
  percentage: Float  
}  

type Currency {
  id: String
  code: String
  precision: Int
  coin: Coin
}
type Exchange {
  id: String
  name: String
  logo: String
  url: [String]
  hasOrderBook: Boolean
  countries: [String]
  fees: Fees
  currencies: [Currency]
  markets: [Market]
}

type PriceHistory{
  time: Int
  close: Float
  high: Float
  low: Float
  open: Float
  volumefrom: Float
  volumeto: Float
}

type MarketCap {
  symbol: String
  rank: Int
  last_updated: Float
  price_usd: Float
  volume_24h_usd: Float
  market_cap_usd: Float
  price_btc: Float
  available_supply: Float
  price: Float
  market_cap: Float
  volume_24h: Float
  percent_change_1h: Float
  percent_change_24h: Float
  percent_change_7d: Float
  total_supply: Float
  coin: Coin
}

type Order {
  price: Float
  qty: Float
}
type OrderBook {
  symbol: String
  realToSymbol: String
  last_updated: Float
  asks: [Order]
  bids: [Order]
}
`;


const schema = makeExecutableSchema({ typeDefs, resolvers });


module.exports = schema;
