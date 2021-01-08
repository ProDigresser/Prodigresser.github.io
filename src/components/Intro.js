import React from 'react'
import hexagon from '../images/profile-hex.png'
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
          <h2>Hospitality Pro<Typing.Speed ms={400} />...</h2><Typing.Delay ms={10000000000} />
        </Typing>
        
        
      </div>
      <div className="image-container">
        <img src={hexagon} alt="Profile Image" className="profile"/>
      </div>
    </section>

  </section>
}

export default Intro