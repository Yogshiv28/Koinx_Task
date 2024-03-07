// CryptoDetails.tsx

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

  // Fetch additional details for the specific cryptocurrency using cryptoId

  return (
    <div>
      <h1>Crypto Details</h1>
      <p>Crypto ID: {cryptoId}</p>
      {/* Include other details as needed */}
    </div>
  );
};

export default CryptoDetails;

