import React from 'react'

const FullDocumentarySection = () => {
  return (
    <section style={{ marginTop: "6rem" }}>
      <h2 className='text-center text-4xl font-bold text-white mt-2 mb-16'>
        Full Documentary
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="h-0 relative overflow-hidden rounded-xl" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://vimeo.com/1154088902"
            title="In Exile - Full Documentary"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default FullDocumentarySection