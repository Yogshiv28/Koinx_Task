import React from "react";
import Image from 'next/image';

const GetStartedCard: React.FC = () => {
  const cardStyle = {
    backgroundColor: 'rgb(0, 82, 254)',
    borderRadius: '20px',
  };

  return (
    <div className="max-w-[90%] mx-auto mt-14 ml-1 rounded overflow-hidden shadow-lg text-white text-center" style={cardStyle}>
      
      <div className="p-4 md:p-6 flex flex-col justify-center">
        <div className="font-bold text-xl mb-2">Get Started with KoinX for FREE</div>
        <p className="text-gray-300 text-base">
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </p>
        
        <div className="relative mt-4 rounded-md overflow-hidden" style={{ backgroundColor: 'rgb(0, 82, 254)' }}>
          <Image 
            src="/images/0_FOHWeuP1TvisyWJq-removebg-preview.png"  // Replace with the actual source of your image
            alt=""
            className="object-cover bg-transparent"
            width={500} // Set the desired width of the image
            height={400} // Set the desired height of the image
          />
        </div>
      </div>
      <div className="p-4 md:p-6">
        <button className="bg-white text-black px-4 py-2 rounded-full">
          Get Started for Free
        </button>
      </div>
    </div>
  );
};

export default GetStartedCard;






