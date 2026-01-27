"use client"
import React from 'react'
import VideoCard from './VideoCard'
import Link from 'next/link';

const videoData = [
    {
        id: 1,
        title: "Video 1",
        description: "Video 1 Description",
        fullDescription: "This is the expanded description with more details about the video. You can add as much text as you want here and it will only show when the user clicks 'Read More'.",
        videoUrl: "/images/videos/test1.mp4",
        previewUrl: 'https://www.ralphvituccio.com/',
    },
    {
        id: 2,
        title: "Video 2",
        description: "Video 2 Description",
        fullDescription: "Additional information about Video 2 that appears when expanded.",
        videoUrl: "/images/videos/test1.mp4",
    },
    {
        id: 3,
        title: "Video 3",
        description: "Video 3 Description",
        fullDescription: "More details about Video 3 for interested viewers.",
        videoUrl: "/images/videos/test1.mp4",
    }
]

const VideoSection = () => {
  return (
    <>
    <section id="projects" style={{ marginTop: "6rem" }}>
    <h2 className='text-center text-4xl font-bold text-white mt-2 mb-16 md:mb-1'>
        Video Section
    </h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12 mt-8'>
        {videoData.map((video) => (
            <VideoCard 
            key={video.id} 
            title={video.title} 
            description={video.description} 
            fullDescription={video.fullDescription}
            videoUrl={video.videoUrl}
        />
        ))}
        </div>
        </section>
    </>
  )
}

export default VideoSection;