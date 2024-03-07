// CryptoList.tsx

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './cryptoList.css';
import { fetchCryptoList, fetchCryptoPrice } from '@/utils/apis/cryptoApi';
import CryptoDetails from '@/components/cryptoList/CryptoDetails';

interface Crypto {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
}

interface CryptoListProps {
  cryptoData: Crypto[];
}

const CryptoList: React.FC<CryptoListProps> = ({ cryptoData }) => {
  const [cryptos, setCryptos] = useState<Crypto[]>(cryptoData);
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);
  const [cryptoPrice, setCryptoPrice] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCryptoList();
        setCryptos(result);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = async (crypto: Crypto) => {
    try {
      setIsLoading(true);
      setSelectedCrypto(crypto);
      const priceData = await fetchCryptoPrice(crypto.id);
      setCryptoPrice(priceData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="crypto-list-container">
      <h1 className="mb-3">Cryptocurrencies</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : selectedCrypto !== null ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedCrypto(null)}>
              &times;
            </span>
            <h2>{selectedCrypto.name} Details</h2>
            <img
              src={selectedCrypto.image}
              alt={`${selectedCrypto.name} logo`}
              style={{ width: '200px', height: '200px', borderRadius: '50%' }}
            />
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <p>Price in USD: ${cryptoPrice?.usd}</p>
                <p>Price in INR: {cryptoPrice?.inr}</p>
                <Link href={`/crypto/${selectedCrypto.id}`}>Go to details page</Link>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="crypto-grid">
          {cryptos.length > 0 &&
            cryptos.map((crypto: Crypto) => (
              <div
                key={crypto.id}
                className={`crypto-card ${selectedCrypto === crypto ? 'card-open' : ''}`}
                onClick={() => handleCardClick(crypto)}
              >
                {crypto.image && <img src={crypto.image} alt={`${crypto.name} logo`} />}
                <div className="crypto-info">
                  <p style={{ marginRight: '10px' }}>Name: {crypto.name}</p>
                  <p>Symbol: {crypto.symbol}</p>
                  <p className="price">Price in USD: ${crypto.current_price}</p>
                  <p>Market Cap: ${crypto.market_cap}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CryptoList;

