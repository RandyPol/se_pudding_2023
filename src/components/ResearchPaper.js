import React from 'react'

const ResearchPaper = ({ slides, handleSlideClick }) => {
  return (
    <div className="introduction">
      <h1 className="introduction__title">Will You Find Love Swiping Right?</h1>
      <p className="introduction__paragraphs introduction__authors">
        Data Scientist: Jacques Diambra Odi | Data Analyst: Stephanie Zeng
        <br /> Software Engineers: Randy Polanco | Eddie Mendez
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
        We conducted EDA on the tinder dataset and highlighted some trends. We
        found more relationships with those that used Tinder, compared to those
        that did not use Tinder. This occurrence was confirmed with hypothesis
        testing, which suggested the relationship occurrences were different
        among Tinder users and non users.
      </p>
      <p className="introduction__paragraphs">
        We then created a machine learning model to predict the relationship
        status of an individual, based on a few self reported features.
        Initially, the dataset was split into three groups: the full dataset,
        tinder users, and non users. The full dataset model had the best F1
        score, while the non users model came a close second. A good F1 score
        suggests the model has good precision and recall, in other words, good
        at predicting both positive and negative classes. The tinder users model
        had an average F1 score, so the model does not accurately predict both
        the positive and negative classes. This was due to the small nature of
        the Tinder users dataset, which also left very little data to test the
        model. Overall, the best model to use for predictions is the model based
        on the full dataset.{' '}
      </p>
      <p className="introduction__paragraphs">
        We tested our model with a dataset we created. The results of the model
        predict a relationship, with a 93.99% probability.
      </p>
      <p className="introduction__paragraphs">
        Contrary to popular belief that Tinder is merely a hookup app, with
        relationships found far and few in between, our dataset suggests the
        opposite. Among these universities, individuals tend to have better luck
        finding a relationship using tinder.
      </p>
    </div>
  )
}

export default ResearchPaper
