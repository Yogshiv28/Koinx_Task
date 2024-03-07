import React, { useEffect, useState } from 'react';
import { fetchTrendingCoins, TrendingCryptoData } from '@/utils/apis/cryptoApi';

const TrendingCoins: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCryptoData[]>([]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const data = await fetchTrendingCoins();
        console.log('Fetched Trending Coins:', data);
        setTrendingCoins(data);
      } catch (error: any) {
        console.error('Error fetching trending coins:', error.message);
      }
    };

    fetchTrendingData();
  }, []);

  return (
    <div className="mt-7 px-1 ml-6 max-w-[83%] border mx-auto rounded overflow-hidden shadow-lg">
      <div className="text-lg font-bold">
        <h1>Trending Coins (24h)</h1>
      </div>
      <div className="mt-4">
        {trendingCoins.map((coin) => (
          <div key={coin.id} className="bg-white p-4 mb-4 border rounded-md flex items-center">
            <div className="flex-shrink-0">
              <img src={coin.thumb} alt={coin.name} className="w-10 h-10" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{coin.name}</h2>
              <p className="text-gray-500">{coin.symbol}</p>
            </div>
            <div className={`ml-auto text-lg ${Object.keys(coin.price_change_percentage_24h || {}).length > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {Object.keys(coin.price_change_percentage_24h || {}).length > 0 ? (
                `${Object.values(coin.price_change_percentage_24h || {})[0].toFixed(2)}%`
              ) : (
                'N/A'
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;


