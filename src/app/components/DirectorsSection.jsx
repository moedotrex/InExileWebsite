import React from 'react'
import Image from 'next/image'

const directorsData = [
    {
        id: 1,
        name: "Ralph Vituccio",
        bio: "Ralph Thomas Vituccio is a filmmaker and Professor of Media at Carnegie Mellon University. His work explores themes of displacement, exile, and human rights through documentary filmmaking. Vituccio's films have been screened internationally and focus on giving voice to artists and activists who have been forced to flee their homelands. As an educator, he mentors students in documentary production and socially engaged media practices, emphasizing the power of storytelling to create social change and preserve cultural memory.",
        image: "/images/ralph.jpg",
        links: [
            { label: "Website", url: "https://www.ralphvituccio.com/" }
        ]
    },
    {
        id: 2,
        name: "Reem Alghazi",
        bio: "Reem Alghazzi is a Syrian Artist. She has directed and produced several short films individually and as part of collectives. Her films have been screened at the Cinéma du réel in Paris and the Locarno International Film Festival. Alghazzi has published several articles and texts in local and Arabic websites/newspapers. Her work has been also presented in several exhibitions and in the Museum of Modern Art in Warsaw. In 2010, she established the Stories Film Lab, in Damascus. In 2023 she was awarded Samira Alkhalil’s Prize in Paris.",
        image: "/images/reem.jpg",
        links: [
            { label: "Syrian Dinner & Movie: Becoming Iphigenia", url: "https://www.youtube.com/watch?v=-_KLSRfYyUk" },
            { label: "Filmmaker Reem Al Ghazzi on the project Becoming Iphigenia", url: "https://soundcloud.com/freecityradio/190-filmmaker-reem-al-ghazzi-on-the-project-becoming-iphigenia" }, 
            { label: "Becoming Iphigenia", url: "https://cinemapublic.ca/en/films/becoming-iphigenia/" },
            { label: "Echoes from Syria", url: "https://guidedoc.tv/documentary/becoming-iphigenia-documentary-film/" },
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