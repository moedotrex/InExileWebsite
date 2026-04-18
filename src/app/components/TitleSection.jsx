import React from 'react'
import Image from 'next/image'

const TitleSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
            <h1 className='text-white mb-6 text-5xl font-extrabold'>In Exile</h1>
            <p className='text-[#ADB7BE] text-lg lg:text-xl'>
                "In Exile" is a deeply moving and visually arresting documentary that brings to life the powerful stories of artists, writers, musicians, and political activists forced to flee their homelands. Each individual represents a nation in turmoil — from authoritarian regimes to war-torn landscapes — yet their voices rise above silence and displacement.

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