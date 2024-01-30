export const percentDiff = (price: number, boughtPrice: number): number => {
        return  100 * Math.abs( ( boughtPrice - price ) / ( (boughtPrice+price)/2 ) );
}