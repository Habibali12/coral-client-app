import React from 'react'

import CollectionImg from "../images/collection-bg.png";

const Collections = () => {
    return (
      <div
        style={{ backgroundImage: `url(${CollectionImg})` }}
        className="bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20"
      >
        <div className='h-[580px] flex justify-between md:flex-row items-center'>
            <div className="md:w-1/2"></div>
            <div className="md:w-1/2">
                <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima iusto, molestias exercitationem necessitatibus fuga dolor. Laborum maxime dignissimos autem nulla veniam sunt, delectus expedita?</p>
                <button className='px-6 py-2 bg-white text-dark'>See Collections</button>
            </div>
        </div>
      </div>
    );
  };
  

export default Collections