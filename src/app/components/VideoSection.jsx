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
        description: "Writer Jorge Olivera Castillo and human rights defender Nancy Alfaya are Cuban activists who have dedicated their careers to bringing sociopolitical change through fiction, poetry, journalism, and activism. Both have been arrested and imprisoned on numerous occasions for their work advocating for democratic change and political and artistic freedom in Cuba.",
        fullDescription: "Jorge Olivera Castillo is a Cuban writer, poet, and journalist who was arrested in 2003 during the 'Black Spring' purge of 75 dissidents. He was sentenced to 18 years in prison for 'producing enemy propaganda' after reporting for Radio Marti on the realities of ordinary Cubans. After being held in solitary confinement for 9 months, he was released after 18 months due to international pressure. He has since published eight short story and poetry books and is currently a writer-in-residence at City of Asylum in Pittsburgh. Nancy Alfaya is a leading human rights defender in Cuba, with a specific focus on women's rights. When Jorge was imprisoned in 2003, she organized peaceful marches and protests as part of the 'Ladies in White,' demanding the release of political prisoners. Despite ongoing harassment and arrests by Cuban authorities, the couple continues their work advocating for freedom and human rights. As of 2021, they remain in exile in Pittsburgh.",
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
        title: "Mukhtar Saad Shehata",
        description: "Mukhtar Shehata is an Egyptian freelance researcher and writer. He holds an MA degree in African Studies, Indigenous Peoples, and Black Cultures from the Universidade do Estado da Bahia. He is the author of several novels, short stories, and research essays, and co-author with Samuli Schielke of the monograph 'Shared Margins: An Ethnography with Writers in Alexandria after the Revolution.'",
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
        description: "Habibullah Sorosh is an Afghan artist and activist who has been featured in various cultural programs and exhibitions in the United States.",
        fullDescription: "Habibullah Sorosh is an Afghan artist and activist currently residing in the United States. He has participated in programs at MIT's List Visual Arts Center and has been featured in exhibitions exploring themes of displacement and cultural identity. Sorosh continues to engage with the Afghan diaspora community through his artistic practice.",
        youtubeUrl: "https://www.youtube.com/embed/aGSUgClJmnY",
        previewUrl: 'https://www.ralphvituccio.com/',
    },
    {
        id: 7,
        title: "Rania Mamoun",
        description: "Rania Mamoun is a Sudanese writer, novelist, and activist. She is the author of several acclaimed short story collections and is a co-founder of the Medani Resistance Committees.",
        fullDescription: "Rania Mamoun is a Sudanese writer, novelist, and activist. She is the author of several short story collections, including 'Thirteen Months of Sunrise' published by Comma Press. Rania co-founded the Medani Resistance Committees and has been actively involved in grassroots organizing in Sudan. She fled Sudan during the recent conflict and is currently based in Pittsburgh, where she continues her writing and activism. Her work often explores themes of displacement, women's rights, and political resistance.",
        youtubeUrl: "https://www.youtube.com/embed/WWxP_U0M_MU",
        previewUrl: 'https://www.instagram.com/raniamamoun/?hl=en',
    },
    {
        id: 8,
        title: "Anouar Rahmani",
        description: "Anouar Rahmani is an Algerian writer and human rights defender who advocates for individual freedoms, environmental rights, and the rights of minorities, women, and the LGBT+ community. He is the author of four novels in Arabic and was the first person to publicly demand same-sex marriage in Algeria.",
        fullDescription: "Anouar Rahmani is an Algerian writer and human rights defender. He holds a License in Public Law and a Master's in State and Institutional Law from the University of Morsli Abdallah. He is the author of four novels in Arabic, including Hallucinations of Jibril' and 'What God is Hiding from Us.' In 2015, he was the first person to demand same-sex marriage in Algeria publicly. Anouar has faced persecution in Algeria due to his activism, novels, and journalism. He was convicted of 'insulting state officials' and fined for social media posts criticizing government corruption. He has received support from PEN International and was shortlisted for the Index on Censorship's Freedom of Expression Awards in 2021. He is currently an Artist Protection Fund Fellow in residence at Carnegie Mellon University and City of Asylum in Pittsburgh.",
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