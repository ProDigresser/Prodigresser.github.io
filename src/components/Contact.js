import React from 'react'
import linkedin from '../images/ed-logos/linkedin-logo.png'
import github from '../images/svg-icons/github-black.svg'

const Contact = () => {

  const myMailto = 'mailto:hello+portfolio@laurencewalshe.dev?cc=laurencewalshe@gmail.com&subject=Let\'s Work Together&body=Hello Laurence! %0D%0A%0D%0AI saw your portfolio and I would like to discuss an opportunity with you -'

  return <section className="section" id="contact">
    <section className="content">
      <div className="contact-box">
        <div className="hex-box hex-one">
          <div className="hexagon ">
            <div className="abs"><a target="_blank" rel="noreferrer" href={myMailto}><span>@</span></a></div>
            <span></span>
          </div>
          <div className="lat-spacer"></div>
        </div>
        <div className="hex-box hex-two">
          <div className="spacer"></div>
          <div className="lat-spacer"></div>
          <div className="hexagon">
            <div className="abs"><a target="_blank" rel="noreferrer" href="https://github.com/ProDigresser"><img className="github-logo" src={github} alt="github"/></a></div>
            <span></span>
          </div>
        </div>
        <div className="hex-box hex-three">
          <div className="spacer"></div>
          <div className="spacer"></div>
          <div className="hexagon">
            <div className="abs"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/laurence-walshe/"><img className="linkedin-logo"src={linkedin} alt="linkedin"/></a></div>
            <span></span>
          </div>
          <div className="lat-spacer"></div>
        </div>
      </div>
      <div className="elem-spacer"></div>
    </section>
  </section>
}

export default Contact