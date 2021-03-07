export class Stock {
    id: number;
    name: string;
    symbol: string;
    exchangeName: string;
    sourceName : string;
    market: string;
   /*  marketChange: number;
    marketChangePrecent: number;
    marketPrice: number; */
    region: string;
    constructor(
        id: number,
        name: string,
        symbol: string,
        exchangeName: string,
        sourceName : string,
        market: string,
        /* marketChange: number,
        marketChangePrecent: number,
        marketPrice: number, */
        region: string
    ){
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.exchangeName = exchangeName;
        this.sourceName = sourceName;
        this.market = market;
        /* this.marketChange = marketChange;
        this.marketChangePrecent = marketChangePrecent;
        this.marketPrice = marketPrice; */
        this.region = region;
    }
}