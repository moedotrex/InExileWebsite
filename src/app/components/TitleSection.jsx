import React from 'react'
import Image from 'next/image'

const TitleSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
            <h1 className='text-white mb-6 text-5xl font-extrabold'>In Exile</h1>
            <p className='text-[#ADB7BE] text-lg lg:text-xl'>
                In Exile is a documentary about...
            </p>
        </div>
        <div className="md:w-1/2">
            <Image 
                src="/images/poster.jpg"
                alt="In Exile" 
                width={500} 
                height={300}
                className="rounded-lg"
            />
        </div>
    </section>
  )
}

export default TitleSection;