interface CryptoApiResponse {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
}

// cryptoApi.ts
// cryptoApi.ts
export interface CryptoData {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
}

export const fetchCryptoList = async (): Promise<CryptoData[]> => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch cryptocurrency list. Status: ${response.status}`);
    }

    const result: CryptoData[] = await response.json();
    return result;
  } catch (error: any) {
    console.error('Error fetching cryptocurrency list:', error.message);
    throw error;
  }
};


export const fetchCryptoPrice = async (cryptoId: string) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=inr,usd&include_24hr_change=true`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch crypto price. Status: ${response.status}`);
    }

    const data = await response.json();
    return data[cryptoId];
  } catch (error: any) {
    console.error('Error fetching crypto price:', error.message);
    throw error;
  }
};


// cryptoApi.ts

// cryptoApi.ts
// cryptoApi.ts
// cryptoApi.ts
// cryptoApi.ts
export interface TrendingCryptoData {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  price_change_percentage_24h?: number
  // price_change_percentage_24h: ; // This field represents percentage changes in various currencies
  thumb: string;
}

export const fetchTrendingCoins = async (): Promise<TrendingCryptoData[]> => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending');

    if (!response.ok) {
      throw new Error(`Failed to fetch trending coins. Status: ${response.status}`);
    }

    const result: { coins?: { item: TrendingCryptoData }[] } = await response.json();

    console.log('API Response:', result);

    if (!result.coins || !Array.isArray(result.coins)) {
      throw new Error('Invalid API response structure. Expected an array under "coins" property.');
    }

    // Extract the top 3 trending coins
    const top3TrendingCoins = result.coins
      .map((coin) => coin.item)
      .slice(0, 3);

    return top3TrendingCoins;
  } catch (error: any) {
    console.error('Error fetching trending coins:', error.message);
    throw error;
  }
};

