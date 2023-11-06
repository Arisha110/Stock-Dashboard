const basePath = "https://finnhub.io/api/v1";
const Api_key = process.env.REACT_APP_KEY;


// https://finnhub.io/api/v1/search?q=tesco&token=cl34bl1r01qqqk61fnrgcl34bl1r01qqqk61fns0
export const searchSymbols = async (query) => {
    const url = `${basePath}/search?q=${query}&token=cl34bl1r01qqqk61fnrgcl34bl1r01qqqk61fns0`;
    
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();

};

// https://finnhub.io/api/v1/stock/profile2?symbol=AAP&token=cl34bl1r01qqqk61fnrgcl34bl1r01qqqk61fns0
export const fetchStockDetails = async (stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=cl34bl1r01qqqk61fnrgcl34bl1r01qqqk61fns0`;
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}
// https://finnhub.io/api/v1/quote?symbol=META&token=cl34bl1r01qqqk61fnrgcl34bl1r01qqqk61fns0
export const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=cl34bl1r01qqqk61fnrgcl34bl1r01qqqk61fns0`;
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();


}
//  ${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`
// https://finnhub.io/api/v1/forex/candle?symbol=${stockSymbol}:EUR_USD&resolution=${resolution}&from=${from}&to=${to}&token=cl34bl1r01qqqk61fnrgcl34bl1r01qqqk61fns0
export const fetchHistoricalData = async (stockSymbol, resolution, from, to) => {
    // const url = `${basePath}/forex/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=cl34bl1r01qqqk61fnrgcl34bl1r01qqqk61fns0`;
  const url =`${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=cl34bl1r01qqqk61fnrgcl34bl1r01qqqk61fns0`
    const response= await fetch(url);
    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();

}