
export interface ICoin {
    id: string,
    icon: string,
    name: string,
    symbol: string,
    rank: number,
    price: number,
    priceBtc: number,
    volume: number,
    marketCap: number,
    availableSupply: number,
    totalSupply: number,
    priceChange1h: number,
    priceChange1d: number,
    priceChange1w: number,
    redditUrl: string,
    websiteUrl: string,
    twitterUrl: string,
    decimals?: number,
    contractAddress?: string,
    explorers: string[],
}

export interface IAsset {
    id: string,
    amount: number,
    boughtPrice: number,
    date: object,
    price?: number,
    icon?: string,
    priceDifference?: number,
    grow?: boolean,

}

export interface ICryptoData {
    result: ICoin[],
    meta: {
        page: number,
        limit: number,
        itemCount: number,
        pageCount: number,
        hasPreviousPage: boolean,
        hasNextPage: boolean,
    }
}

export type AppContextType = {
    cryptoData: ICryptoData[],
    assetData: IAsset[],
}