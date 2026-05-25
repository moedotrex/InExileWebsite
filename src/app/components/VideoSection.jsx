"use client"
import React from 'react'
import VideoCard from './VideoCard'
import Link from 'next/link';

const videoData = [
    {
        id: 1,
        title: "Mai Khoi",
        description: "Mai Khoi is a Vietnamese singer-songwriter and political activist known as 'Vietnam's Lady Gaga'. She transformed from a pop star to a dissident after being censored by the Vietnamese government for her activism advocating for democracy and human rights.",
        fullDescription: "Her concerts were banned, and she was placed under surveillance for attempting to run for political office and staging protests. In 2019, Mai Khoi fled Vietnam and sought asylum in the United States, where she continues her activism through music and advocacy, speaking out against authoritarianism and fighting for freedom of expression. She remains a powerful voice for Vietnamese dissidents and democracy activists worldwide.",
        youtubeUrl: "https://www.youtube.com/embed/4gldcJvXJb8",
        previewUrl: 'https://mai-khoi.com/',
        additionalLinks: [
            { label: "YouTube", url: "https://www.youtube.com/channel/UCVCatn-t5oDpJU1f1j9dFkg" },
            { label: "Mai Khoi and The Art of Creative Dissent", url: "https://www.youtube.com/watch?v=HVi06EwtBX4" }
        ]
    },
    {
        id: 2,
        title: "Jorge & Nancy",
        description: "Writer Jorge Olivera Castillo and human rights defender Nancy Alfaya are Cuban activists who have dedicated their careers to bringing sociopolitical change through fiction, poetry, journalism, and activism. Both have been arrested and imprisoned on numerous occasions for their work advocating for democratic change and political and artistic freedom in Cuba.",
        fullDescription: "Jorge was arrested in 2003 during the 'Black Spring' purge of 75 dissidents and sentenced to 18 years in prison for 'producing enemy propaganda' after reporting for Radio Marti. After 9 months in solitary confinement, he was released after 18 months due to international pressure. He has since published eight short story and poetry books. Nancy organized peaceful marches and protests as part of the 'Ladies in White,' demanding the release of political prisoners. As of 2021, both remain in exile in Pittsburgh, where Jorge is a writer-in-residence at City of Asylum.",
        youtubeUrl: "https://www.youtube.com/embed/HMI5NNpMQYU",
        additionalLinks: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jorge_Olivera_Castillo" },
            { label: "Poetry by Jorge Olivera Castillo", url: "https://intranslation.brooklynrail.org/spanish/poetry-by-jorge-olivera-castillo/" },
            { label: "Nancy Alfaya has been targeted by the Cuban government for her work defending women's rights", url: "https://raceandequality.org/resources/nancy-alfaya-has-been-targeted-by-the-cuban-government-for-her-work-defending-womens-rights/" },
            { label: "A Marriage against Cuba's Dictatorship", url: "https://washingtonstand.com/commentary/jorge-olivera-and-nancy-alfaya-a-marriage-against-cubas-dictatorship-part-1" }
        ]
    },
    {
        id: 3,
        title: "Oleksander Fraze-Frazenko",
        description: "Oleksander Fraze-Frazenko is a Ukrainian artist, activist, and LGBTQ+ rights advocate who has been at the forefront of fighting for equality and human rights in Ukraine.",
        fullDescription: "He has been instrumental in organizing Pride events and advocating for equality in Ukraine, often facing threats and violence for his activism. His work combines art and activism to challenge discrimination and promote human rights. Following Russia's invasion of Ukraine in 2022, Fraze-Frazenko has continued his advocacy while raising awareness about the impact of war on marginalized communities. He has become an important voice in documenting the experiences of LGBTQ+ Ukrainians during wartime and advocating for their safety and rights both within Ukraine and internationally.",
        youtubeUrl: "https://www.youtube.com/embed/3E43mSP5fV0",
        previewUrl: 'https://frazefrazenko.com',
        additionalLinks: [
            { label: "YouTube", url: "https://www.youtube.com/user/frazefrazenko" },
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Oleksandr_Fraze-Frazenko" },
            { label: "FAQ Ukraine: In English and Ukrainian", url: "https://www.amazon.com/FAQ-Ukraine-Ukrainian-Oleksandr-Fraze-Frazenko/dp/B0D6QD1N8C" }
        ]
    },
    {
        id: 4,
        title: "Mukhtar Saad Shehata",
        description: "Mukhtar Shehata is an Egyptian freelance researcher and writer. He holds an MA degree in African Studies, Indigenous Peoples, and Black Cultures from the Universidade do Estado da Bahia. He is the author of several novels, short stories, and research essays, and co-author with Samuli Schielke of the monograph 'Shared Margins: An Ethnography with Writers in Alexandria after the Revolution.'",
        fullDescription: "Currently affiliated with Leibniz-Zentrum Moderner Orient (ZMO) in Berlin, his research focuses on changes in the lives of Egyptian women and the rise of the 'semi-city' after the 2011 revolution. Together with Samuli Schielke, he examines how rural-urban and international migrations transform society between Egypt and its diasporas, particularly how conservative strivings and the dream of stability create new forms of life that both reproduce and undermine patriarchal ideals.",
        youtubeUrl: "https://www.youtube.com/embed/-AwvlwB0JoM",
        previewUrl: '/mukhtar',
        additionalLinks: [
            { label: "Google Scholar Website", url: "https://scholar.google.com/citations?user=n8mUn4kAAAAJ&hl=en" }
        ]
    },
    {
        id: 5,
        title: "Haifa Subay",
        description: "Haifa Subay is a Yemeni graffiti artist and activist who uses street art to raise awareness about the impact of war on women and children in Yemen.",
        fullDescription: "She holds a bachelor's degree in Accounting from Sana'a University but has dedicated her life to art and advocacy. Since launching 'Silent Victims' in 2017, she has painted murals on the bombarded streets of Yemen addressing forced disappearances, domestic violence, child recruitment, and the desire for peace. In 2019, she was invited to the Singapore Biennale and shortlisted for the prestigious Benesse Prize. Despite death threats, she launched 'Women and War' in 2020, inspired by her own experiences as a pregnant woman and mother during conflict. She is currently a fellow artist with the Artist Protection Fund at the University of Pittsburgh.",
        youtubeUrl: "https://www.youtube.com/embed/RwCAg1dHtlA",
        previewUrl: 'https://haifasubay.wordpress.com/',
        additionalLinks: [
            { label: "Shiftworks Community", url: "https://shiftworkspgh.org/pittsburgh-creative-corps/artist-directory/haifa-subay/" },
            { label: "Instagram", url: "https://www.instagram.com/haifasubay/?hl=en" }
        ]
    },
    {
        id: 6,
        title: "Habibullah Sorosh",
        description: "Habibullah Sorosh is an Afghan artist and activist who has been featured in various cultural programs and exhibitions in the United States.",
        fullDescription: "He has participated in programs at MIT's List Visual Arts Center and has been featured in exhibitions exploring themes of displacement and cultural identity. Sorosh continues to engage with the Afghan diaspora community through his artistic practice.",
        youtubeUrl: "https://www.youtube.com/embed/aGSUgClJmnY",
        additionalLinks: [
            { label: "Habib Sorosh: A Biography", url: "https://www.globalengagement.chatham.edu/blog/2023/04/24/habib-sorosh-a-biography" },
            { label: "Trying for Nothing: A Personal Narrative by Habibullah Sorosh", url: "https://www.globalengagement.chatham.edu/blog/2022/08/01/trying-for-nothing" }
        ]
    },
    {
        id: 7,
        title: "Rania Mamoun",
        description: "Rania Mamoun is a Sudanese writer, novelist, and activist. She is the author of several acclaimed short story collections and is a co-founder of the Medani Resistance Committees.",
        fullDescription: "Her work includes 'Thirteen Months of Sunrise' published by Comma Press. Rania has been actively involved in grassroots organizing in Sudan and co-founded the Medani Resistance Committees. She fled Sudan during the recent conflict and is currently based in Pittsburgh, where she continues her writing and activism. Her work explores themes of displacement, women's rights, and political resistance.",
        youtubeUrl: "https://www.youtube.com/embed/WWxP_U0M_MU",
        previewUrl: 'https://www.instagram.com/raniamamoun/?hl=en',
        additionalLinks: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rania_Mamoun" },
            { label: "Words Without Borders", url: "https://wordswithoutborders.org/contributors/view/rania-mamoun/" },
            { label: "Goodreads", url: "https://www.goodreads.com/author/list/15369578.Rania_Mamoun" }
        ]
    },
    {
        id: 8,
        title: "Anouar Rahmani",
        description: "Anouar Rahmani is an Algerian writer and human rights defender who advocates for individual freedoms, environmental rights, and the rights of minorities, women, and the LGBT+ community. He is the author of four novels in Arabic and was the first person to publicly demand same-sex marriage in Algeria.",
        fullDescription: "He holds a License in Public Law and a Master's in State and Institutional Law from the University of Morsli Abdallah. His novels include 'Hallucinations of Jibril' and 'What God is Hiding from Us.' Anouar has faced persecution in Algeria, convicted of 'insulting state officials' and fined for social media posts criticizing government corruption. He has received support from PEN International and was shortlisted for the Index on Censorship's Freedom of Expression Awards in 2021. He is currently an Artist Protection Fund Fellow in residence at Carnegie Mellon University and City of Asylum in Pittsburgh.",
        youtubeUrl: "https://www.youtube.com/embed/P3bGjcafxPw",
        previewUrl: 'https://anouarrahmani.com/',
    }
]

const VideoSection = () => {
  return (
    <>
    <section id="projects" style={{ marginTop: "6rem" }}>
    <h2 className='text-center text-4xl font-bold text-white mt-2 mb-16 md:mb-1'>
        Individual Artists
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
            additionalLinks={video.additionalLinks}
        />
        ))}
        </div>
        </section>
    </>
  )
}

export default VideoSection;