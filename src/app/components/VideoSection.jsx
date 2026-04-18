"use client"
import React from 'react'
import VideoCard from './VideoCard'
import Link from 'next/link';

const videoData = [
    {
        id: 1,
        title: "Mai Khoi",
        description: "Video 1 Description",
        fullDescription: "This is the expanded description with more details about the video.",
        youtubeUrl: "https://www.youtube.com/embed/4gldcJvXJb8",
        previewUrl: 'https://mai-khoi.com/',
    },
    {
        id: 2,
        title: "Jorge & Nancy",
        description: "Video 2 Description",
        fullDescription: "Additional information about Video 2 that appears when expanded.",
        youtubeUrl: "https://www.youtube.com/embed/HMI5NNpMQYU",
        previewUrl: 'https://www.ralphvituccio.com/',
    },
    {
        id: 3,
        title: "Oleksander Fraze-Frazenko",
        description: "Video 3 Description",
        fullDescription: "More details about Video 3 for interested viewers.",
        youtubeUrl: "https://www.youtube.com/embed/3E43mSP5fV0",
        previewUrl: 'https://frazefrazenko.com',
    },
    {
        id: 4,
        title: "Muhktar Shehata",
        description: "Video 3 Description",
        fullDescription: "More details about Video 3 for interested viewers.",
        youtubeUrl: "https://www.youtube.com/embed/-AwvlwB0JoM",
        previewUrl: 'https://www.ralphvituccio.com/',
    },
    {
        id: 5,
        title: "Haifa Subay",
        description: "Video 3 Description",
        fullDescription: "More details about Video 3 for interested viewers.",
        youtubeUrl: "https://www.youtube.com/embed/RwCAg1dHtlA",
        previewUrl: 'https://www.instagram.com/haifasubay/?hl=en',
    },
    {
        id: 6,
        title: "Habibullah Sorosh",
        description: "Video 3 Description",
        fullDescription: "More details about Video 3 for interested viewers.",
        youtubeUrl: "https://www.youtube.com/embed/aGSUgClJmnY",
        previewUrl: 'https://www.ralphvituccio.com/',
    },
    {
        id: 7,
        title: "Rania Mamoun",
        description: "Video 3 Description",
        fullDescription: "More details about Video 3 for interested viewers.",
        youtubeUrl: "https://www.youtube.com/embed/WWxP_U0M_MU",
        previewUrl: 'https://www.instagram.com/raniamamoun/?hl=en',
    },
    {
        id: 8,
        title: "Anouar Rahmani",
        description: "Video 3 Description",
        fullDescription: "More details about Video 3 for interested viewers.",
        youtubeUrl: "https://www.youtube.com/embed/P3bGjcafxPw",
        previewUrl: 'https://anouarrahmani.com/',
    }
]

const VideoSection = () => {
  return (
    <>
    <section id="projects" style={{ marginTop: "6rem" }}>
    <h2 className='text-center text-4xl font-bold text-white mt-2 mb-16 md:mb-1'>
        Video Section
    </h2>
        <div className='grid md:grid-cols-2 gap-8 md:gap-12 mt-8'>
        {videoData.map((video) => (
            <VideoCard 
            key={video.id} 
            title={video.title} 
            description={video.description} 
            fullDescription={video.fullDescription}
            videoUrl={video.videoUrl}
            youtubeUrl={video.youtubeUrl}
            previewUrl={video.previewUrl}
        />
        ))}
        </div>
        </section>
    </>
  )
}

export default VideoSection;