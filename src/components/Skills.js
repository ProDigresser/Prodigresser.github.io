import React from 'react'

const skillArray = [
  'HTML5',
  'CSS',
  'SCSS',
  'Git',
  'JS',
  'React.js',
  'Node.js',
  'Express.js',
  'Python',
  'Flask',
  'SQLalchemy',
  'NPM',
  'PIPENV',
  'Webpack',
  'MongoDB',
  'PostgreSQL',
  'Bulma',
  'Heroku'
]
const learnArray = ['Mocha', 'Java']

const Skills = () => {
  return <section className="section" id="skills">
    <section className="content">
      <div className="skills-box">
        <article className="pt-one">
          <div className="sec-title">title</div>
          <div className="learning">
            {learnArray.map((skill, i) => {
              return <div className="skill-box" key={i}>
                <p>{skill}</p>
              </div>
            })}
          </div>
        </article>
        <article className="pt-two">
          <div className="mapped-skills">
            {skillArray.map((skill, i) => {
              return <div className="skill-box" key={i}>
                <p>{skill}</p>
              </div>
            })}
          </div>
        </article>
      </div>

    </section>
  </section>
}

export default Skills