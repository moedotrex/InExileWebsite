import React from 'react';

const Mukhtar = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <section className="mt-40 mb-20">
        <div className='col-span-7 place-self-center text-center'>
          <h1 className="text-white mb-10 text-4xl sm:text-6xl lg:text-6xl font-bold">
            Mukhtar Saad Shehata
          </h1>
        </div>
        <div className="flex justify-center items-center mt-4 px-4">
          <iframe 
            src="/images/mukhtar.pdf"
            width="70%" 
            height="800px"
            className="border-0 rounded-lg"
            title="Mukhtar Saad Shehata PDF"
          />
        </div>
      </section>
    </div>
  );
};

export default Mukhtar;