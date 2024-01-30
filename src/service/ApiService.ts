import {cryptoAssets, cryptoData} from "../mock/data";
import {IAsset, ICryptoData} from "../@types/app";

export const fetchCryptoData = () => {
    return new Promise<ICryptoData> ((resolve) => {
            setTimeout(() => {
                    resolve(cryptoData)
                }, 1000
            )
        }
    )
}

export const fetchAssetsData = () => {
    return new Promise<IAsset[]> ((resolve) => {
            setTimeout(
                () => {
                    resolve(cryptoAssets)
                }, 1000
            )
        }
    )
}