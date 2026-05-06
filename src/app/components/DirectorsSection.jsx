import React from 'react'
import Image from 'next/image'

const directorsData = [
    {
        id: 1,
        name: "Ralph Vituccio",
        bio: "Ralph Vituccio is a filmmaker and documentary director...", // Add full bio here
        image: "/images/ralph.jpg", // Add image path
        links: [
            { label: "Website", url: "https://www.ralphvituccio.com/" },
            { label: "IMDb", url: "https://www.imdb.com/name/..." }, // Add actual URLs
        ]
    },
    {
        id: 2,
        name: "Reem Alghazi",
        bio: "Reem Alghazi is a documentary filmmaker...", // Add full bio here
        image: "/images/reem.jpg", // Add image path
        links: [
            { label: "Website", url: "https://www.youtube.com/watch?v=-_KLSRfYyUk" },
            { label: "Instagram", url: "https://www.instagram.com/..." }, // Add actual URLs
        ]
    }
]

const DirectorCard = ({ name, bio, image, links }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 bg-[#181818] rounded-xl p-6 mb-8">
            {/* Director Image */}
            <div className="md:w-1/3">
                <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden">
                    <Image 
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            
            {/* Director Info */}
            <div className="md:w-2/3">
                <h3 className="text-white text-2xl font-bold mb-4">{name}</h3>
                <p className="text-[#ADB7BE] mb-4">{bio}</p>
                
                {/* Links */}
                {links && links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {links.map((link, index) => (
                            <a 
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline"
                            >
                                {link.label} →
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

const DirectorsSection = () => {
    return (
        <section style={{ marginTop: "6rem" }}>
            <h2 className='text-center text-4xl font-bold text-white mt-2 mb-16'>
                The Directors
            </h2>
            <div className="max-w-4xl mx-auto">
                {directorsData.map((director) => (
                    <DirectorCard 
                        key={director.id}
                        name={director.name}
                        bio={director.bio}
                        image={director.image}
                        links={director.links}
                    />
                ))}
            </div>
        </section>
    )
}

export default DirectorsSection