import React from 'react'
import Typing from 'react-typing-animation'

const Intro = () => {
  return <section className="section" id="intro">
    <section className="content">
      <div className="title-container">
        <Typing speed={80}>
          <h1 className="title"><span className="green">{'//'}</span> Laurence Walshe</h1>
          <Typing.Delay ms={500} />
          <Typing.Speed ms={30} />
          <h2>Software Engineer</h2>
          <Typing.Delay ms={500} />
          <Typing.Speed ms={30} />
          <h2>Coffee Scientist</h2>
          <Typing.Delay ms={500} />
          <Typing.Speed ms={30} />
          <h2>Web Developer</h2>
          <Typing.Delay ms={500} />
          <Typing.Speed ms={30} />
          <h2>Hospitality Pro<Typing.Speed ms={400} />...</h2>
        </Typing>
      </div>
      <figure className="image-container">
        <div className="hexagon">
          <div className="hexTop"></div>
          <div className="hexBottom"></div>
        </div>
      </figure>
    </section>

  </section>
}

export default Intro