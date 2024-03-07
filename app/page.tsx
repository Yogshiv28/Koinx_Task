
"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "@/components/navbar/navbar";
import {  fetchCryptoList } from '@/utils/apis/cryptoApi'
import CryptoList from "@/components/cryptoList/cryptoList";
import GetStartedCard from '@/components/rightSideBar/getStartedCard'
import Trendingcoins from '@/components/rightSideBar/trendingCoins';

const Home: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCryptoList();
        setCryptoData(result);
      } catch (error) {
        console.error('Error setting cryptocurrency data:', error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-12 mt-3 ml-11">
        <div className="col-span-9">
          <CryptoList cryptoData={cryptoData} />
        </div>
        <div className="col-span-3">
          <GetStartedCard/>
          <Trendingcoins/>
        </div>
      </div>
    </div>
  );
};

export default Home;
