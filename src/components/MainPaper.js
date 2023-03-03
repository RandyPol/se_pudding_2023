import React from 'react'

const MainPaper = ({ slides, handleSlideClick }) => {
  return (
    <div className="introduction">
      <h1 className="introduction__title">
        What Millennial Users Should Expect When They Swipe?
      </h1>
      <p className="introduction__paragraphs introduction__authors">
        Data Scientist: Jacques Diambra Odi, Stephanie | Software Engineers:
        Randy Polanco, and Eddie Mendez
      </p>
      <h2 className="introduction__headings">ABSTRACT</h2>
      <p className="introduction__paragraphs">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
      <h2 className="introduction__headings">Introductions</h2>
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
      <h2 className="introduction__headings">Graphs: Numbers Don't Lie</h2>
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
