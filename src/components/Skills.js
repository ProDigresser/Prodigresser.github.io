import React from 'react'
import skillArray from '../API/skills'
import learnArray from '../API/learning'


const Skills = () => {
  return <section className="section" id="skills">
    <section className="content">
      <div className="skills-box">
        <article className="pt-one">
          <div className="sec-title">
            <div>
              <h2><span className="green">//</span> Skills & Experience</h2>
              <p>During my time as a student and developer I have covered a broad range of languages and technologies - a sample of which are mentioned here.</p>
              <p>The core of my experience is based around JavaScript, Python and their respective frameworks. Personally, I enjoy developing on the Back-end - with experience using Node / Express and Python / Flask.</p>
            </div>
          </div>
          <div className="learning">
            <h3><span className="green">//</span> Learning</h3>
            <div className="mapped-skills learning-skills">
              {learnArray.map((skill, i) => {
                return <div className="skill-box" key={i}>
                  <div className="name-container" >
                    <p>{skill.name}</p>

                  </div>
                  <img src={skill.svg} alt={skill.name} className="devicon" />
                </div>
              })}
            </div>
          </div>
        </article>
        <article className="pt-two">
          <div className="mapped-skills">
            {skillArray.map((skill, i) => {
              return <div className="skill-box" key={i}>
                <div className="name-container">
                  <p>{skill.name}</p>
                </div>
                <img src={skill.svg} alt={skill.name} className="devicon" />
              </div>
            })}
          </div>
        </article>
      </div>

    </section>
  </section>
}

export default Skills