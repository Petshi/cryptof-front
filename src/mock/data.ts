// https://openapi.coinstats.app/

import {ICryptoData,IAssets } from "../types/dataType";

export const cryptoData: ICryptoData = {
    result: [
        {
            id: 'bitcoin',
            icon: 'https://static.coinstats.app/coins/1650455588819.png',
            name: 'Bitcoin',
            symbol: 'BTC',
            rank: 1,
            price: 44870.39834657236,
            priceBtc: 1,
            volume: 35728788775.15447,
            marketCap: 879141227764.5575,
            availableSupply: 19592900,
            totalSupply: 21000000,
            priceChange1h: -0.34,
            priceChange1d: 0.94,
            priceChange1w: 5.02,
            redditUrl: 'https://www.reddit.com/r/Bitcoin/',
            websiteUrl: 'http://www.bitcoin.org',
            twitterUrl: 'https://twitter.com/bitcoin',
            explorers: [
                'https://blockchair.com/bitcoin/',
                'https://btc.com/',
                'https://btc.tokenview.io/',
                'https://www.oklink.com/btc',
                'https://3xpl.com/bitcoin',
                'https://blockchain.coinmarketcap.com/chain/bitcoin',
                'https://blockexplorer.one/btc/mainnet',
            ],
        },
    ],
    meta: {
        page: 1,
        limit: 20,
        itemCount: 17965,
        pageCount: 899,
        hasPreviousPage: false,
        hasNextPage: true,
    },
}

export const cryptoAssets: IAssets[] = [
    {
        id: 'bitcoin',
        amount: 0.02,
        price: 26244,
        date: new Date(),
    },
    {
        id: 'ethereum',
        amount: 5,
        price: 2400,
        date: new Date(),
    },
]