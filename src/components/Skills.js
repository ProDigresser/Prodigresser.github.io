import React from 'react'
import html from '../images/svg-icons/html5-plain.svg'
import css from '../images/svg-icons/css3-plain.svg'
import git from '../images/svg-icons/git-plain.svg'
import github from '../images/svg-icons/github-original.svg'
import javascript from '../images/svg-icons/javascript-plain.svg'
import react from '../images/svg-icons/react-original.svg'
import node from '../images/svg-icons/nodejs-plain.svg'
import express from '../images/svg-icons/express-original.svg'
import python from '../images/svg-icons/python-plain.svg'
import flask from '../images/svg-icons/flask-icon.svg'
import sass from '../images/svg-icons/sass-original.svg'
import npm from '../images/svg-icons/npm-original-wordmark.svg'
import vscode from '../images/svg-icons/visualstudio-plain.svg'
import webpack from '../images/svg-icons/webpack-plain.svg'
import mongo from '../images/svg-icons/mongodb-plain.svg'
import postgre from '../images/svg-icons/postgresql-plain.svg'
import bulma from '../images/svg-icons/bulma-plain.svg'
import heroku from '../images/svg-icons/heroku-plain.svg'
import mocha from '../images/svg-icons/mocha-plain.svg'
import django from '../images/svg-icons/django-plain.svg'

const skillArray = [
  { name: 'HTML5', svg: html },
  { name: 'CSS', svg: css },
  { name: 'Git', svg: git },
  { name: 'Github', svg: github },
  { name: 'JavaScript', svg: javascript },
  { name: 'React.js', svg: react },
  { name: 'Node.js', svg: node },
  { name: 'Express.js', svg: express },
  { name: 'Python', svg: python },
  { name: 'Flask', svg: flask },
  { name: 'Sass', svg: sass },
  { name: 'NPM', svg: npm },
  { name: 'VS Code', svg: vscode },
  { name: 'Webpack', svg: webpack },
  { name: 'MongoDB', svg: mongo },
  { name: 'PostgreSQL', svg: postgre },
  { name: 'Bulma', svg: bulma },
  { name: 'Heroku', svg: heroku }
]
const learnArray = [{ name: 'Mocha', svg: mocha }, { name: 'Django', svg: django }]

const Skills = () => {
  return <section className="section" id="skills">
    <section className="content">
      <div className="skills-box">
        <article className="pt-one">
          <div className="sec-title">
            <div>
              <h2><span className="green">//</span> Skills</h2>
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
                  <img src={skill.svg} alt={skill.name} />
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