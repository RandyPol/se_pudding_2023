import React from 'react'

const MainPaper = ({ slides, handleSlideClick }) => {
  return (
    <div className="introduction">
      <h1 className="introduction__title">Will You Find Love Swiping Right?</h1>
      <p className="introduction__paragraphs introduction__authors">
        Data Scientist: Jacques Diambra Odi Stephanie Data Analyst: Stephanie
        Zeng | Software Engineers: Randy Polanco, and Eddie Mendez
      </p>
      <h2 className="introduction__headings">Introductions</h2>
      <p className="introduction__paragraphs">
        Released in 2012, Tinder is an online dating and geosocial networking
        application. In Tinder lingo, “swipe right” to like and “swipe left” to
        dislike other users’ profiles, which include their photos, a short bio,
        and a list of their interests. When both parties have “swiped right” on
        each other, they will be notified that they have a match and can start
        chatting. The user can also go beyond their distance settings and match
        with people around the world with the Passport feature by upgrading to a
        Tinder premium subscription. Tinder advertises itself as the world’s
        most popular dating app, making it a great way to meet new people from
        all over. They claim they have over 55 billion matches but how many have
        turned into a successful relationship?{' '}
      </p>{' '}
      <p className="introduction__paragraphs">
        Looking at a small dataset with information from 1896 participants, it
        provides us metrics related to whether they are in a relationship or
        not, if they use tinder, the number of matches of each user, and the
        match rate.
      </p>{' '}
      <p className="introduction__paragraphs">
        We thought it would be interesting to learn if using Tinder, the world’s
        most popular dating app, will yield a successful relationship and if
        having more matches will also mean a higher success rate.
      </p>
      <h2 className="introduction__headings">Numbers Don't Lie</h2>
      <p className="introduction__paragraphs-graphs">
        (Click on the graphs for full details)
      </p>
      <div className="slideshow__slides">
        {slides.map((slide, index) => (
          <div
            className="slideshow__slide"
            key={slide.id}
            onClick={() => handleSlideClick(index)}
          >
            <img
              className="slideshow__slide-img"
              src={require(`../images/chartsFigures/${slide.imageUrl}`)}
              alt={slide.title}
            />
            <h3>{slide.title}</h3>
          </div>
        ))}
      </div>
      <h2 className="introduction__headings">CONCLUSION</h2>
      <p className="introduction__paragraphs">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
  )
}

export default MainPaper
