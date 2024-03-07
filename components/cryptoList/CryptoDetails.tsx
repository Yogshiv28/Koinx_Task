

import React from 'react';

interface CryptoDetailsProps {
  match: {
    params: {
      id: string;
    };
  };
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ match }) => {
  const cryptoId = match.params.id;



  return (
    <div>
      <h1>Crypto Details</h1>
      <p>Crypto ID: {cryptoId}</p>
      
    </div>
  );
};

export default CryptoDetails;

