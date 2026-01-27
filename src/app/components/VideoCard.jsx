"use client"
import React, { useState } from 'react'
import Link from "next/link";

const VideoCard = ({ videoUrl, title, description, fullDescription, previewUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
        <div 
        className="h-0 relative overflow-hidden rounded-t-xl"
        style={{ 
          paddingTop: "56.25%",
          }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
          controls
          playsInline
          poster="/images/videos/test1.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-3">{description}</p>
        
        {isExpanded && fullDescription && (
          <p className="text-[#ADB7BE] mb-3">{fullDescription}</p>
        )}
        
        {fullDescription && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoCard;