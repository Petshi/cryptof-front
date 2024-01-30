import React, {useEffect, useState} from 'react';
import Sider from "antd/es/layout/Sider";
import {Card, List} from "antd";
import {ICoin, IAsset} from "../../@types/app";
import {fetchAssetsData, fetchCryptoData} from "../../service/ApiService";
import {percentDiff} from "../../utils/utils";

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

export const AppSider = () => {
    const [cryptoData, setCryptoData] = useState<ICoin[] | []>([])
    const [assets, setAssets] = useState<IAsset[] | []>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function preload() {
            setLoading(true)
            const assets: IAsset[] = await fetchAssetsData()
            const {result} = await fetchCryptoData()

            setAssets(assets.map((asset) => {
                const assetCoin = result.find((coin) => coin.id === asset.id)
                return {
                    boughtPrice: assetCoin.price,
                    icon: assetCoin.icon,
                    priceDifference: assetCoin.price - asset.boughtPrice,
                    grow: asset.boughtPrice < assetCoin.price,
                    percentDiff: percentDiff(assetCoin.price, asset.boughtPrice),
                    ...asset
                }
            }))
            setCryptoData(result)
            setLoading(false)


        }

        preload()

    }, [])
    return (
        <Sider width="30%" style={siderStyle}>
            <Card loading={loading} bordered={false} style={{}}>
                <List
                    size="small"
                    bordered
                    dataSource={assets}
                    renderItem={(asset: IAsset) =>
                        <List.Item>
                            <span>{asset.price}</span>
                        </List.Item>
                    }
                />
            </Card>
        </Sider>
    );
};